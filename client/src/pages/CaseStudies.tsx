import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function CaseStudies() {
  const caseStudies = [
    {
      client: "SaaSFlow",
      industry: "B2B Software",
      metrics: [
        { label: "Increase in MQLs", value: "+145%", icon: TrendingUp },
        { label: "Cost Per Lead", value: "-42%", icon: Target },
        { label: "New ARR generated", value: "$1.2M", icon: Users }
      ],
      problem: "SaaSFlow had a great product but was relying entirely on outbound SDR efforts with diminishing returns. Their inbound organic traffic wasn't converting, and previous ad campaigns had burned cash with no ROI.",
      strategy: "We completely rebuilt their landing pages for conversion, implemented a gated high-value lead magnet, and launched targeted LinkedIn Ads aiming at specific job titles within their precise company size criteria.",
      image: "1551434678-e076c223a692"
    },
    {
      client: "Elite Consulting",
      industry: "Professional Services",
      metrics: [
        { label: "Qualified Calls/Mo", value: "85+", icon: Target },
        { label: "Show Rate", value: "88%", icon: Users },
        { label: "ROI on Ad Spend", value: "410%", icon: TrendingUp }
      ],
      problem: "Elite Consulting was spending 20+ hours a week trying to manually network on LinkedIn. Their calendar was empty, and revenue was stagnant.",
      strategy: "We deployed a comprehensive 'VSL (Video Sales Letter) Funnel'. We drove top-of-funnel traffic via Facebook and YouTube ads to a highly educational video that pre-sold their expertise, pushing prospects directly to a calendar booking page.",
      image: "1542744173-58322608d8e0"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-secondary/20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We let our results do the talking. Here's how we've helped companies like yours scale their revenue predictably.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={idx} className="glass-panel rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative min-h-[300px]">
                    {/* case study business environment image */}
                    <img 
                      src={`https://images.unsplash.com/photo-${study.image}?w=800&q=80`}
                      alt={study.client}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur rounded-full text-primary text-sm font-medium mb-4 w-max">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl font-display font-bold text-white">{study.client}</h2>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8 md:p-12 bg-card">
                    <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-border">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <metric.icon className="w-5 h-5 text-primary mb-2" />
                          <p className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-destructive" /> The Problem
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" /> Our Strategy
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.strategy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Want to be our next success story?</h2>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Let's Build Your System
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
