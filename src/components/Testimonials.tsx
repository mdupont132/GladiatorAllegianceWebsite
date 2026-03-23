"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, CheckCircle } from "lucide-react";

const pastPerformance = [
  {
    program: "TSA Pilot Passenger Screening Canine Program",
    client: "Transportation Security Administration",
    description:
      "Our VWDC management and trainers were instrumental in the startup of TSA's Pilot Passenger Screening Canine Program, bringing a wealth of knowledge on the background, development, and delivery of Vapor Wake technology. TSA remains a key detection canine client.",
    highlights: [
      "Instrumental in the startup of TSA's Passenger Screening Canine Program",
      "Vapor Wake detection teams supporting airport and transit security",
      "Ongoing support to DHS Transportation Security Administration",
    ],
  },
  {
    program: "NYPD Counter-Terrorism Unit",
    client: "New York City Police Department",
    description:
      "NYPD's Counter-Terrorism Unit teamed up with Vapor Wake to assist the city with its plan to significantly increase its VWDC capabilities over the next five years. NYPD is a key detection canine client utilizing our body-worn K-9 program.",
    highlights: [
      "Partnership with NYPD Counter-Terrorism Unit",
      "Five-year plan to significantly increase VWDC capabilities",
      "Body-worn K-9 teams integrated into city-wide counter-terrorism operations",
    ],
  },
  {
    program: "Amtrak National Explosives Detection",
    client: "Amtrak Police Department",
    description:
      "Transformed Amtrak's National Explosives Detection Canine Program into an industry leader. Our Director of Vapor Wake Operations managed 81 specialized detection teams across the national rail network and developed advanced Vapor Wake certification training for Amtrak.",
    highlights: [
      "Transformed Amtrak's program into an industry leader",
      "Managed 81 specialized detection teams nationwide",
      "Developed advanced Vapor Wake certification training for Amtrak",
    ],
  },
  {
    program: "Washington D.C. Capitol Police",
    client: "U.S. Capitol Police",
    description:
      "Washington D.C. Capitol Police is a key detection canine client utilizing Vapor Wake and Kinetic Person-Born detection teams. Our team provides explosive and firearm detection capabilities with Top Secret cleared handlers for federal facility security.",
    highlights: [
      "Key Vapor Wake detection canine client",
      "All handlers hold Top Secret clearance",
      "Explosive and firearm detection for federal facilities",
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
