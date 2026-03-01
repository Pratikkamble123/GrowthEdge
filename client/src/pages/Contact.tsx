import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

import { useCreateLead } from "@/hooks/use-leads";
import { api } from "@shared/routes";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/ui/animated-section";

// Use the schema from @shared/routes
type LeadFormValues = z.infer<typeof api.leads.create.input>;

export default function Contact() {
  const { mutate: createLead, isPending, isSuccess } = useCreateLead();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(api.leads.create.input),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      serviceInterestedIn: "",
      message: "",
    },
  });

  function onSubmit(data: LeadFormValues) {
    createLead(data);
  }

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <AnimatedSection direction="right" className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Scale Your Business.
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              Fill out the form to request your free strategy session. We'll review your current setup and show you exactly where the massive opportunities are.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email Us</h4>
                  <p className="text-muted-foreground">hello@growthedge.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 border border-border">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Call Us</h4>
                  <p className="text-muted-foreground">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 border border-border">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">HQ</h4>
                  <p className="text-muted-foreground">100 Innovation Drive, Suite 400<br />San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="left">
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-border shadow-2xl relative overflow-hidden">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-card z-20 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. One of our growth experts will be in touch within 24 hours to schedule your strategy session.
                  </p>
                  <Button variant="outline" onClick={() => form.reset()} className="rounded-full">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : null}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 h-12 rounded-xl focus-visible:ring-primary/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" className="bg-background/50 h-12 rounded-xl focus-visible:ring-primary/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="bg-background/50 h-12 rounded-xl focus-visible:ring-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterestedIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Primary Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 h-12 rounded-xl focus:ring-primary/50">
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="Lead Generation">Lead Generation Campaigns</SelectItem>
                            <SelectItem value="Paid Ads">Paid Ads Management</SelectItem>
                            <SelectItem value="CRO">Conversion Optimization</SelectItem>
                            <SelectItem value="Other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Tell us about your goals</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="We're currently doing $1M ARR and want to hit $3M..." 
                            className="bg-background/50 min-h-[120px] rounded-xl resize-none focus-visible:ring-primary/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isPending} 
                    className="w-full h-14 rounded-xl text-lg font-medium shadow-lg shadow-primary/25"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Strategy Session"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
