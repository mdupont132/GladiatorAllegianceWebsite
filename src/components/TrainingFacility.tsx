"use client";

import AnimatedSection from "./AnimatedSection";
import { MapPin, Target, Shield, Users, Crosshair, ArrowRight } from "lucide-react";

const facilityHighlights = [
  { icon: MapPin, label: "172 Acres of Training Land" },
  { icon: Target, label: "148 Kennels" },
  { icon: Crosshair, label: "25 to 300 Yard Range Complexes" },
  { icon: Shield, label: "ATF Licensed Explosive Storage" },
  { icon: Users, label: "30-Student Classrooms" },
];

const trainingAreas = [
  {
    title: "K-9 Training Complex",
    items: [
      "Canine performance and conditioning suites",
      "Grooming, bathing, and canine welfare centers",
      "Mock checkpoints, open areas, and warehouses",
      "Scenario compounds with sound, smoke, and explosions",
      "Dedicated buildings for patented Vapor Wake training process",
      "ATF & DEA licensed training aid storage",
    ],
  },
  {
    title: "Firearms & Explosives Ranges",
    items: [
      "Two small arms range complexes",
      "Distances from 25 to 300 yards",
      "Rated for all calibers up to 7.62mm",
      "All-weather compacted gravel floors",
      "Covered loading and equipment tables",
    ],
  },
  {
    title: "Close Quarters Battle (CQB)",
    items: [
      "Non-lethal shooting facilities",
      "Realistic furnishings and culturally appropriate props",
      "Clearing houses and hostage rescue scenarios",
      "Embassy hostage takeover exercises",
    ],
  },
  {
    title: "Combatives & Classroom",
    items: [
      "Fully padded Zebra Athletics floor with 7' padded walls",
      "Four-camera DVR system for live viewing and playback",
      "Adjoining 30-student classroom with HD monitors",
      "Scenario-specific equipment: smoke, strobes, audio conditioning",
    ],
  },
];

const programs = [
  "SWAT/Tactical Operators Course",
  "Law Enforcement Precision Rifle/Sniper",
  "Firearms Instructor Certification",
  "B.E.C.O.N. Active Shooter Training",
  "Special Forces Assessment & Selection (SFAS)",
  "QRF Response Team Training",
  "Foreign Affairs Counter Threat (FACT)",
  "goTenna & TAK Training Courses",
];

export default function TrainingFacility() {
  return (
    <section id="facility" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-36 h-36 border-l-2 border-t-2 border-olive/20" />
      <div className="absolute bottom-0 right-0 w-36 h-36 border-r-2 border-b-2 border-olive/20" />

      <div className="max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-olive-bright" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              ISOK Training Academy
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            Where Operators<br />
            <span className="text-tan">Are Forged.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-3xl mb-10">
            The International Special Operations K9 Training Academy (ISOK) is
            our state-of-the-art, multi-acre training center — one of the largest
            commercial canine and tactical training facilities in the United States.
            ISOK provides comprehensive training solutions for government,
            commercial, and industry partners in the evolving field of security and
            counterterrorism.
          </p>
        </AnimatedSection>

        {/* Facility highlights strip */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border-harsh mb-14">
            {facilityHighlights.map((h, i) => (
              <div key={i} className="bg-concrete px-5 py-6 flex flex-col items-center text-center gap-3">
                <h.icon size={22} className="text-olive-bright" />
                <span className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-foreground-muted uppercase">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Training areas grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {trainingAreas.map((area, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div className="bg-concrete border border-border-harsh p-8 h-full relative group hover:border-olive/30 transition-colors">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-olive/40" />
                <h3 className="font-[var(--font-display)] text-lg font-semibold uppercase tracking-wide mb-4">
                  {area.title}
                </h3>
                <div className="space-y-2">
                  {area.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-olive mt-2 flex-shrink-0" />
                      <span className="text-foreground-muted text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Training programs */}
        <AnimatedSection delay={0.4}>
          <div className="bg-concrete border border-border-harsh p-10">
            <h3 className="font-[var(--font-display)] text-lg font-semibold uppercase tracking-wide mb-6">
              Training Programs Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {programs.map((prog, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-olive mt-2 flex-shrink-0" />
                  <span className="text-foreground-muted text-sm">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Clients & Affiliates */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold uppercase tracking-wide">
                ISOK <span className="text-tan">Clients &amp; Affiliates</span>
              </h3>
              <div className="w-24 h-1 bg-olive mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 mb-10">
              {[
                { name: "CIA", full: "Central Intelligence Agency" },
                { name: "IDF", full: "Israeli Defense Force" },
                { name: "NSA", full: "National Security Agency" },
                { name: "TSA", full: "Transportation Security Admin." },
                { name: "DHS", full: "Dept. of Homeland Security" },
                { name: "NRO", full: "National Reconnaissance Office" },
                { name: "DOD", full: "Department of Defense" },
                { name: "DEA", full: "Drug Enforcement Admin." },
                { name: "DOE", full: "Department of Energy" },
              ].map((client, i) => (
                <div
                  key={i}
                  className="bg-concrete border border-border-harsh p-3 text-center group hover:border-olive/40 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Shield size={12} className="text-olive-bright" />
                    <span className="font-[var(--font-display)] text-sm font-bold text-foreground uppercase tracking-wide">
                      {client.name}
                    </span>
                  </div>
                  <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-foreground-muted leading-tight block">
                    {client.full}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://www.isokacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-olive hover:bg-olive-bright text-foreground font-[var(--font-display)] text-sm font-semibold tracking-[0.1em] uppercase px-8 py-3 transition-colors inline-flex items-center gap-2"
              >
                Visit ISOK Academy
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
