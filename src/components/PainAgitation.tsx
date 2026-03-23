"use client";

import AnimatedSection from "./AnimatedSection";
import { AlertTriangle, X } from "lucide-react";

const threats = [
  {
    title: "The Mobile Bomber Threat",
    description:
      "Intelligence has confirmed that large gatherings of Americans are a primary target for terrorist groups. The preferred weapon: person-borne explosive devices (PBIEDs). Traditional screening lines and metal detectors cannot detect a threat that walks right past them in a crowd.",
  },
  {
    title: "Technology Has a Ceiling",
    description:
      "Cameras watch. Sensors beep. Neither can trail a vapor plume through a crowd, track a scent two minutes after materials pass, or lead a handler directly to the source. Electronics cannot replace a living, breathing detection system that thinks and adapts in real time.",
  },
  {
    title: "Expanding Operational Demands",
    description:
      "Airports, train stations, sporting events, government facilities, critical infrastructure — the list of soft targets grows every year. Your teams are stretched thin. You need a force multiplier that deploys fast, integrates seamlessly, and operates unobtrusively.",
  },
  {
    title: "Firearms & Narcotics in Transit",
    description:
      "Concealed firearms moving through crowds, narcotics trafficking at scale, even electronic devices used in sex trafficking — these threats are mobile, evolving, and exploiting every gap in your current defensive posture.",
  },
];

export default function PainAgitation() {
  return (
    <section id="threat" className="relative py-28 md:py-36 bg-concrete diagonal-lines">
      <div className="absolute top-0 left-0 right-0 h-1 bg-olive" />

      <div className="max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={16} className="text-tan" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-tan uppercase">
              Threat Assessment
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            Your Perimeter<br />
            <span className="text-tan">Has Blind Spots.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mb-20">
            Millions of Americans attend large outdoor and indoor events each year.
            The cost of a security failure isn&apos;t just monetary — it&apos;s the
            loss of life, the loss of freedoms, and the loss of feeling safe inside
            our own borders.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-px bg-border-harsh">
          {threats.map((threat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background p-10 md:p-12 group hover:bg-background-light transition-colors h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-olive/10 border border-olive/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <X size={14} className="text-tan" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl font-semibold uppercase tracking-wide">
                    {threat.title}
                  </h3>
                </div>
                <p className="text-foreground-muted leading-relaxed pl-12">
                  {threat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-20 border-l-4 border-olive pl-8 py-3">
            <p className="font-[var(--font-display)] text-xl md:text-2xl font-semibold uppercase tracking-wide text-foreground">
              The only technology that can non-obtrusively screen for body-worn
              explosives while in transit
            </p>
            <p className="font-[var(--font-display)] text-xl md:text-2xl font-semibold uppercase tracking-wide text-tan mt-1">
              is a Vapor Wake Detection Canine.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
