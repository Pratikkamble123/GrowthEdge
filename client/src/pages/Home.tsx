import { Link } from "wouter";
import { ArrowRight, BarChart3, Target, Zap, CheckCircle2, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mesh min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting new clients for Q3 2024
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Scale Your Business with <span className="text-gradient-primary">Predictable Lead Generation</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                We build high-converting funnels and manage targeted ad campaigns that turn strangers into high-value clients on autopilot.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full text-base px-8 h-14 shadow-lg shadow-primary/20 hover:shadow-primary/40 group">
                  Get Your Free Strategy
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full text-base px-8 h-14 bg-background/50 backdrop-blur hover:bg-secondary">
                  View Our Results
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by 250+ scaling businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Using simple text logos for premium minimal look */}
            <h3 className="text-2xl font-display font-bold tracking-tighter">AcmeCorp</h3>
            <h3 className="text-2xl font-display font-bold tracking-tighter">TechFlow</h3>
            <h3 className="text-2xl font-display font-bold tracking-tighter">GlobalReach</h3>
            <h3 className="text-2xl font-display font-bold tracking-tighter">Synergy</h3>
            <h3 className="text-2xl font-display font-bold tracking-tighter">Nexus</h3>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              A holistic approach to customer acquisition. We don't just run ads; we build entire revenue engines.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Targeted Lead Generation",
                desc: "Hyper-focused B2B & B2C campaigns designed to capture high-intent prospects actively looking for your solution.",
              },
              {
                icon: BarChart3,
                title: "Paid Ads Management",
                desc: "Expert scaling across Google, Meta, and LinkedIn Ads. We maximize ROAS by making every dollar count.",
              },
              {
                icon: Zap,
                title: "Conversion Optimization",
                desc: "We turn clicks into clients. Rapid A/B testing, landing page design, and funnel architecture that converts.",
              }
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full bg-card/50 backdrop-blur hover-elevate border-border/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Why Top Companies Partner With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're not your typical agency. We act as your dedicated growth partner, focusing strictly on metrics that matter: Revenue, CAC, and LTV.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Data-driven decisions, zero guesswork",
                  "Transparent reporting & dedicated slack channels",
                  "Proprietary conversion frameworks",
                  "Focus on quality leads, not just volume"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/20 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-8">More About Us</Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative">
              {/* placeholder for an actual image or illustration */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-border/50 shadow-2xl">
                {/* modern abstract business growth graph */}
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Floating stat card */}
                <div className="absolute bottom-8 right-8 left-8 glass-panel rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Average ROI Increase</p>
                    <p className="text-3xl font-bold text-white">+214%</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Don't Just Take Our Word For It</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "GrowthEdge completely transformed our pipeline. Within 90 days, our cost per acquisition dropped by 40% while lead quality improved.",
                name: "Sarah Jenkins",
                role: "VP Marketing, TechFlow",
              },
              {
                quote: "The only agency I've worked with that actually understands B2B sales cycles. Their funnel architecture is world-class.",
                name: "Michael Chang",
                role: "CEO, NexaCorp",
              },
              {
                quote: "We scaled from $2M to $5M ARR primarily thanks to the ad strategies GrowthEdge implemented. Absolute game changers.",
                name: "Elena Rodriguez",
                role: "Founder, Elevate App",
              }
            ].map((test, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full bg-secondary/20 hover:bg-secondary/40 transition-colors border-border/30">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-lg text-foreground/90 italic mb-8">"{test.quote}"</p>
                    <div>
                      <p className="font-bold text-white">{test.name}</p>
                      <p className="text-sm text-muted-foreground">{test.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center glass-panel rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Book a free 30-minute strategy session. We'll audit your current process and outline a custom blueprint for growth.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/25 hover:shadow-primary/50 group">
                Claim Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
