"use client";

import AnimatedSection from "./AnimatedSection";
import { Award, Users, ShieldCheck, Clock, Heart } from "lucide-react";

const leaders = [
  {
    name: "Miriah Allamong",
    title: "President & CEO",
    bio: "28-year security veteran and widely recognized leader in the K-9 security industry. Certified working dog handler and trainer with 20+ years in foreign conflicts alongside state and federal law enforcement and special operations teams. First female military contractor EOD Canine handler with 8 combat deployments to Afghanistan and Iraq. Native Alaskan. Her unwavering dedication to excellence is the cornerstone of Gladiator Allegiance.",
  },
  {
    name: "Pete Genovese",
    title: "President of K-9 Operations / Head Trainer",
    bio: "K9 Master Trainer and President of the UPWDA. 18 years of police experience including 14 years in K9 roles. Specialization in special crimes street division with SWAT/HRT teams. Maryland Police Training Commission Instructor. Lead instructor for 6 in-house K9 Academies. Gun Detection Dog Program Initiator and certified K9 Handler Trainer.",
  },
  {
    name: "William Parker",
    title: "Director of Vapor Wake Canine Operations",
    bio: "50+ years of expertise in canine program development. Pioneered explosive detection programs at major airports. Transformed Amtrak's National Explosives Detection Canine Program into an industry leader managing 81 specialized detection teams. K-9 Commander for Metropolitan Washington Airport Authority. Led the U.S. Army's first explosives detection canine team in Operation Desert Shield. Provided congressional expert testimony on national security.",
  },
];

const credentials = [
  {
    icon: ShieldCheck,
    title: "Auburn University Partnership",
    detail:
      "Exclusive licensing to train and deploy patented Vapor Wake Detection Canines — one of only 5 companies in the world selected for this technology.",
  },
  {
    icon: Users,
    title: "Top Secret Cleared",
    detail:
      "All employees hold Top Secret clearance. Our team includes veterans of elite military working dog programs, federal law enforcement, and Tier 1 special operations.",
  },
  {
    icon: Award,
    title: "NCS Certified & Lab-Tested",
    detail:
      "National Center for Spectator Sport Safety and Security conducted a three-day evaluation and lab test to confirm our VWDC accuracy. Certified and independently validated.",
  },
  {
    icon: Clock,
    title: "WOSB / 8(a) / HUBZone / Alaska Native",
    detail:
      "Woman-Owned Small Business, 8(a) certified, HUBZone certified, disabled veteran, Alaska Native owned. Qualified for federal set-aside contract opportunities.",
  },
  {
    icon: Heart,
    title: "War Dog Guardians 501(c)(3)",
    detail:
      "Our nonprofit partner ensures puppy-to-grave care for every K-9. Retired dogs are placed in vetted homes and supported for life — reflecting our commitment beyond the mission.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-concrete diagonal-lines overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-olive" />

      <div className="max-w-5xl mx-auto px-8">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-px bg-olive-bright" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              Who We Are
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            Forged In<br />
            <span className="text-tan">Combat. Built For This.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-3xl mb-8">
            Gladiator Allegiance LLC is a premier K-9 security company with a
            collective 53 years of experience as private military contractors.
            Our team has worked alongside the world&apos;s most distinguished
            operational teams, police officers, and special reaction teams —
            managing some of the largest working dog programs ever mobilized,
            both in the US and in global conflict zones.
          </p>
          <p className="text-foreground-muted text-lg max-w-3xl mb-20">
            Together with IAG Protection Group, we deliver comprehensive
            security solutions spanning body-worn K-9 detection, executive
            protection, advanced tactical training, and training grounds for
            three-letter governmental agencies.
          </p>
        </AnimatedSection>

        {/* Leadership */}
        <div className="mb-20">
          <AnimatedSection>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold uppercase tracking-wide mb-10">
              Leadership
            </h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background border border-border-harsh p-8 h-full relative group hover:border-olive/30 transition-colors">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-olive/40" />
                  <h4 className="font-[var(--font-display)] text-lg font-semibold uppercase tracking-wide text-tan">
                    {leader.name}
                  </h4>
                  <p className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-olive-bright uppercase mt-1 mb-4">
                    {leader.title}
                  </p>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Credentials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div className="bg-background border border-border-harsh p-8 group hover:border-olive/30 transition-colors h-full relative">
                <div className="w-11 h-11 bg-olive/10 border border-olive/30 flex items-center justify-center mb-5">
                  <cred.icon size={20} className="text-olive-bright" />
                </div>
                <h4 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide mb-2">
                  {cred.title}
                </h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {cred.detail}
                </p>
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-olive/40" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Core values */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-harsh">
            {[
              { value: "Integrity", desc: "Acting ethically and transparently in all business dealings" },
              { value: "Trust", desc: "Building positive relationships through honesty and mutual respect" },
              { value: "Teamwork", desc: "Leveraging diverse skills and perspectives toward common goals" },
              { value: "Passion", desc: "Unwavering commitment to our mission of protecting lives" },
            ].map((v, i) => (
              <div key={i} className="bg-background px-8 py-8 text-center">
                <div className="font-[var(--font-display)] text-lg font-bold text-tan uppercase">
                  {v.value}
                </div>
                <div className="text-foreground-muted text-xs mt-2 leading-relaxed">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
