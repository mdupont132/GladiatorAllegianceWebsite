"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="connect"
      className="relative py-28 md:py-36 bg-background overflow-hidden"
    >
      {/* Harsh geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-olive/3 -skew-x-12" />
        <div className="absolute top-0 left-0 right-0 h-px bg-border-harsh" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border-harsh" />
        {/* Corner frames */}
        <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-olive/30" />
        <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-olive/30" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-olive/30" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-olive/30" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="w-12 h-px bg-olive" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              Initiate Contact
            </span>
            <div className="w-12 h-px bg-olive" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight mb-6">
            Ready To Close<br />
            <span className="text-tan">The Gap?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Every day without elite K-9 capability is a day your perimeter has
            holes. Let&apos;s discuss how Gladiator Allegiance can integrate
            with your agency&apos;s operations — starting now.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@gladiatorallegiance.com"
              className="bg-olive hover:bg-olive-bright text-foreground font-[var(--font-display)] text-base font-semibold tracking-[0.15em] uppercase px-12 py-6 transition-colors inline-flex items-center justify-center gap-3 group"
            >
              <Shield size={18} />
              LET&apos;S CONNECT
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+1-000-000-0000"
              className="border-2 border-foreground/20 hover:border-tan/50 text-foreground font-[var(--font-display)] text-base font-semibold tracking-[0.15em] uppercase px-12 py-6 transition-colors inline-flex items-center justify-center"
            >
              REQUEST BRIEFING
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border-harsh max-w-2xl mx-auto">
            {[
              { label: "Response Time", value: "< 24 HRS" },
              { label: "Consultation", value: "CLASSIFIED" },
              { label: "Deployment", value: "NATIONWIDE" },
            ].map((item, i) => (
              <div key={i} className="bg-background px-6 py-4 text-center">
                <div className="font-[var(--font-display)] text-lg font-bold text-tan">
                  {item.value}
                </div>
                <div className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-foreground-muted mt-1 uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
