"use client";

import AnimatedSection from "./AnimatedSection";
import { Phone, FileSearch, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Initial Consultation",
    description:
      "We assess your agency's operational environment, threat profile, and security gaps through a classified briefing. No templates — every engagement starts from your specific reality.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Threat Analysis & Planning",
    description:
      "Our team develops a tailored K-9 deployment strategy that integrates with your existing protocols, personnel, and command structure. We design around your mission, not ours.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Team Selection & Training",
    description:
      "Handler-K-9 teams are selected and trained to your operational specifications. Every dog, every handler, every scenario — calibrated to your threat environment.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment & Integration",
    description:
      "Seamless operational insertion with your existing teams. Ongoing performance monitoring, refresher training, and 24/7 support ensure sustained mission readiness.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-concrete">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-olive" />

      <div className="max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-olive-bright" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              Deployment Protocol
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            From Contact<br />
            <span className="text-tan">To Operational.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mb-20">
            A battle-tested process designed for agencies that need results, not
            red tape.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-olive/30" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="group flex flex-col md:flex-row gap-8 md:gap-12 bg-background border border-border-harsh p-10 md:p-12 hover:border-olive/40 transition-colors relative">
                  {/* Number block */}
                  <div className="flex-shrink-0 flex items-start gap-4">
                    <div className="w-[60px] h-[60px] bg-olive flex items-center justify-center relative z-10">
                      <span className="font-[var(--font-display)] text-xl font-bold text-foreground">
                        {step.number}
                      </span>
                    </div>
                    <div className="md:hidden w-11 h-11 bg-olive/10 border border-olive/30 flex items-center justify-center">
                      <step.icon size={20} className="text-olive-bright" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="hidden md:flex w-11 h-11 bg-olive/10 border border-olive/30 items-center justify-center">
                        <step.icon size={20} className="text-olive-bright" />
                      </div>
                      <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-semibold uppercase tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-foreground-muted leading-relaxed md:pl-14">
                      {step.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-olive/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
