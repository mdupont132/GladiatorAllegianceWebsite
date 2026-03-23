"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle } from "lucide-react";

const pastPerformance = [
  {
    program: "TSA Passenger Screening Canine Program",
    client: "Transportation Security Administration",
    description:
      "Selected as a prime contractor for TSA's Passenger Screening Canine (PSC) Program — deploying Vapor Wake detection teams across major U.S. airports and transit hubs. Teams screen hundreds of passengers per hour without disrupting pedestrian flow, detecting explosive materials on moving targets.",
    highlights: [
      "Vapor Wake teams deployed at Tier 1 airports nationwide",
      "Continuous operations with 24/7 readiness posture",
      "One of only 5 companies selected for Vapor Wake deployment",
    ],
  },
  {
    program: "NYPD Counter-Terrorism Bureau",
    client: "New York City Police Department",
    description:
      "Provided specialized detection canine teams to support NYPD's Counter-Terrorism operations across New York City. Integrated body-worn K-9 teams into high-density environments including transit systems, landmarks, and large-scale public events.",
    highlights: [
      "Body-worn K-9 teams operating in Times Square & transit hubs",
      "Integration with NYPD's counter-terrorism command structure",
      "Real-time threat detection in the nation's highest-traffic city",
    ],
  },
  {
    program: "Amtrak National Rail Security",
    client: "Amtrak / National Railroad Passenger Corporation",
    description:
      "Contracted to transform Amtrak's canine detection program with Vapor Wake and explosive detection teams deployed across the national rail network. Delivered rapid deployment capability with certified teams mobilized within days of contract award.",
    highlights: [
      "Nationwide rail system coverage across multiple corridors",
      "Program transformation from legacy to Vapor Wake methodology",
      "Rapid deployment — teams on-site within 7–10 days of award",
    ],
  },
  {
    program: "U.S. Capitol Police & Federal Facilities",
    client: "U.S. Capitol Police / Federal Protective Service",
    description:
      "Deployed detection canine teams to secure federal facilities in the National Capital Region, including support for U.S. Capitol Police operations. Teams provide explosive and firearm detection screening for government buildings, special events, and VIP movements.",
    highlights: [
      "Screening operations at federal buildings & government sites",
      "Special event security for high-profile national events",
      "Top Secret cleared handlers integrated into federal operations",
    ],
  },
];

export default function Testimonials() {
  return (
    <section id="proof" className="relative py-28 md:py-36 bg-background">
      <div className="absolute top-12 right-12 w-20 h-20 border border-olive/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border border-olive/10 rotate-12 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-olive-bright" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              Past Performance
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            Proven In<br />
            <span className="text-tan">The Field.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mb-20">
            From TSA&apos;s Passenger Screening Canine Program to NYPD
            Counter-Terrorism — real deployments protecting the agencies
            that cannot afford to get it wrong.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {pastPerformance.map((pp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative bg-concrete border border-border-harsh p-10 flex flex-col h-full group hover:border-olive/30 transition-colors">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-olive/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-olive/40" />

                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-olive-bright" />
                  <span className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-olive-bright uppercase">
                    {pp.client}
                  </span>
                </div>

                <h3 className="font-[var(--font-display)] text-lg font-semibold uppercase tracking-wide mb-4 text-tan">
                  {pp.program}
                </h3>

                <p className="text-foreground-muted text-sm leading-relaxed mb-8 flex-1">
                  {pp.description}
                </p>

                <div className="border-t border-border-harsh pt-4 space-y-2">
                  {pp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-olive-bright mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-xs leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
