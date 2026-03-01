import { Link } from "wouter";
import { Check, Target, BarChart3, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Services() {
  const services = [
    {
      id: "lead-gen",
      icon: Target,
      title: "Lead Generation Campaigns",
      description: "Stop relying on referrals and unpredictable word-of-mouth. We build robust outbound and inbound engines that consistently deliver high-intent prospects to your calendar.",
      benefits: [
        "Ideal Customer Profile (ICP) deep-dive mapping",
        "Multi-channel cold outreach sequences",
        "Lead magnet creation and distribution",
        "CRM integration and automated follow-ups"
      ]
    },
    {
      id: "paid-ads",
      icon: BarChart3,
      title: "Paid Ads Management",
      description: "Scale aggressively with data-driven advertising. We manage millions in ad spend, optimizing for the lowest Customer Acquisition Cost (CAC) while maintaining high lead quality.",
      benefits: [
        "Google Ads (Search, Display, Performance Max)",
        "LinkedIn Ads (B2B Lead Gen Forms, InMail)",
        "Meta Ads (Facebook & Instagram scaling)",
        "Advanced retargeting and audience suppression"
      ]
    },
    {
      id: "cro",
      icon: Zap,
      title: "Conversion Rate Optimization",
      description: "Traffic is useless if it doesn't convert. We audit, redesign, and test your landing pages to ensure you're extracting maximum value from every visitor.",
      benefits: [
        "High-converting landing page design & dev",
        "Continuous A/B and multivariate testing",
        "User behavior tracking and heatmapping",
        "Sales funnel architecture and friction removal"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-20 bg-secondary/20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive growth solutions engineered to scale your customer base and increase your bottom line.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                direction={index % 2 === 0 ? "right" : "left"}
                className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
                    <h4 className="font-bold text-white mb-6">What's Included:</h4>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  {/* placeholder for specific service illustration */}
                  <div className="aspect-square rounded-3xl overflow-hidden bg-secondary border border-border/50 relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? "1460925895917-afdab827c52f" : 
                        index === 1 ? "1551288049-bebda4e38f71" : 
                        "1504868584819-f8e8b4baffd7"
                      }?w=800&q=80`} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4">
        <AnimatedSection className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's jump on a quick call to audit your current setup and determine the highest-leverage opportunities for growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
