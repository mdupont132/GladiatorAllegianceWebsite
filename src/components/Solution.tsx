"use client";

import AnimatedSection from "./AnimatedSection";
import { Shield, Dog, Eye, Zap, Radio, Target, Crosshair, Bug, Search } from "lucide-react";
import Image from "next/image";

const capabilities = [
  {
    icon: Dog,
    title: "Vapor Wake Detection",
    description:
      "Patented technology born at Auburn University. Our VWDC teams detect explosive particles on moving targets by trailing the vapor plume — even up to two minutes after the carrier has left the area. Only 3 companies can use this technology — GA is one of them.",
  },
  {
    icon: Target,
    title: "Kinetic Body-Worn Detection",
    description:
      "Purpose-trained K-9 teams deployed in body-worn configurations to detect explosives and firearms carried by individuals in high-traffic areas. Unobtrusive teams that seamlessly integrate into any security environment without disrupting pedestrian flow.",
  },
  {
    icon: Crosshair,
    title: "Firearm Detection",
    description:
      "Our Gun Detection Dog Program identifies concealed firearms — both stationary and mobile — following scent trails to lead handlers directly to the source. Initiated and developed by our own Head Trainer, Pete Genovese.",
  },
  {
    icon: Eye,
    title: "Narcotic Interdiction",
    description:
      "Precision-trained detection teams identifying controlled substances across diverse concealment methods. Deployed at borders, cargo centers, shipping ports, weigh stations, and high-risk areas across the United States.",
  },
  {
    icon: Shield,
    title: "Executive Protection",
    description:
      "Armed security and integrated K-9 details for high-value personnel, deploying stateside and overseas. Our officers are extensively trained in risk assessment, threat prevention, and emergency response with K-9 force multipliers.",
  },
  {
    icon: Radio,
    title: "Critical Infrastructure",
    description:
      "Comprehensive security sweeps for government facilities, transit hubs, airports, energy installations, stadiums, convention centers, and other high-priority assets requiring advanced threat screening.",
  },
  {
    icon: Search,
    title: "Bedbug Detection",
    description:
      "Specially trained K-9 units that swiftly identify and address bedbug infestations in residential, commercial, and government-owned properties. Fast, accurate, and non-invasive detection services.",
  },
  {
    icon: Bug,
    title: "Cyber Intelligence K-9",
    description:
      "K-9s trained to detect TPPO — a chemical coating on electronic devices like flash drives and memory cards used in human trafficking. Combining advanced canine capabilities with technological expertise to combat a $150 billion criminal industry.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Certified teams ready to mobilize within 7–10 days of contract award. We deploy temporary teams to provide instant detection capability while recruiting, training, and certifying local handlers through our 12-week program.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-28 md:py-36 bg-background">
      <div className="absolute top-0 left-0 w-36 h-36 border-l-2 border-t-2 border-olive/20" />
      <div className="absolute bottom-0 right-0 w-36 h-36 border-r-2 border-b-2 border-olive/20" />

      <div className="max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-olive-bright" />
            <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-4">
            The Industry Leader<br />
            <span className="text-tan">In Detection Canines.</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mb-20">
            Gladiator Allegiance LLC is recognized as the industry leader in
            explosives, firearm, narcotics, sex trafficking, and bedbug detection
            canines, training, and services. Innovation, quality, and unparalleled
            client support — we are dedicated to consistently delivering the
            highest levels of service and return on investment.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="group relative bg-concrete border border-border-harsh p-7 hover:border-olive/40 transition-all h-full">
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-olive/50" />
                <div className="w-11 h-11 bg-olive/10 border border-olive/30 flex items-center justify-center mb-5">
                  <cap.icon size={20} className="text-olive-bright" />
                </div>
                <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide mb-2">
                  {cap.title}
                </h3>
                <p className="text-foreground-muted text-xs leading-relaxed">
                  {cap.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trusted agencies — high impact */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold uppercase tracking-wide">
                Trusted By <span className="text-tan">Federal, State &amp; Local Agencies</span>
              </h3>
              <div className="w-28 h-1 bg-olive mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { name: "TSA", full: "Transportation Security Administration" },
                { name: "NYPD", full: "New York City Police Department" },
                { name: "Capitol Police", full: "Washington D.C. Capitol Police" },
                { name: "AMTRAK", full: "National Rail Security" },
                { name: "DOD", full: "Department of Defense" },
                { name: "ATF", full: "Alcohol, Tobacco & Firearms" },
                { name: "CBP", full: "Customs & Border Protection" },
                { name: "FPS", full: "Federal Protective Service" },
                { name: "DOS", full: "Department of State" },
                { name: "Special Forces", full: "U.S. Special Operations" },
                { name: "USDA", full: "Dept. of Agriculture" },
                { name: "IRS", full: "Internal Revenue Service" },
                { name: "IDF", full: "Israeli Defense Force" },
              ].map((agency, i) => (
                <div
                  key={i}
                  className="bg-concrete border border-border-harsh p-4 text-center group hover:border-olive/40 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Shield size={12} className="text-olive-bright" />
                    <span className="font-[var(--font-display)] text-sm font-bold text-foreground uppercase tracking-wide">
                      {agency.name}
                    </span>
                  </div>
                  <span className="font-[var(--font-mono)] text-[8px] tracking-[0.1em] text-foreground-muted leading-tight block">
                    {agency.full}
                  </span>
                </div>
              ))}
            </div>

            {/* K-9 Operations photo — under Trusted By */}
            <div className="relative mt-10 overflow-hidden border border-border-harsh">
              <Image
                src="/k9-operations.png"
                alt="K-9 handler with detection dog deployed alongside Maryland State Police helicopter"
                width={1920}
                height={1080}
                className="w-full h-56 md:h-72 object-cover object-bottom"
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
              <div className="absolute bottom-4 left-5 z-20">
                <span className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-foreground/80 uppercase drop-shadow-lg">
                  K-9 Rapid Deployment Operations
                </span>
              </div>
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-olive/50 z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-olive/50 z-20" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
