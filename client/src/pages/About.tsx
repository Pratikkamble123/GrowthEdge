import { Link } from "wouter";
import { ArrowRight, Trophy, Users2, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                We're engineered for <span className="text-primary">one thing:</span> Growth.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                GrowthEdge was founded out of frustration with traditional marketing agencies that delivered vanity metrics instead of pipeline and revenue.
              </p>
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  We believe marketing should be a profit center, not an expense. That's why we obsess over unit economics—Customer Acquisition Cost, Lifetime Value, and Conversion Rates.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our team consists of data scientists, media buyers, and conversion copywriters who have spent the last decade figuring out exactly what makes B2B buyers click, convert, and buy.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              {/* modern agency office collaboration */}
              <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Our Team"
                  className="w-full h-auto object-cover opacity-80"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">By The Numbers</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl glass-panel">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">$50M+</h3>
                <p className="text-muted-foreground">Client Revenue Generated</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl glass-panel">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">250+</h3>
                <p className="text-muted-foreground">Companies Scaled</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="p-8 rounded-2xl glass-panel">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">20+</h3>
                <p className="text-muted-foreground">Growth Experts</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-6">Stop burning money on ineffective marketing.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with a team that holds themselves accountable to your revenue goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 h-14">
                Schedule a Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
