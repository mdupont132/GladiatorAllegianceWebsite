"use client";

import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden industrial-grid">
      {/* Harsh geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-olive/5 -skew-x-12 origin-top-right" />
        <div className="absolute top-0 left-0 w-28 h-28 border-l-4 border-t-4 border-olive/30" />
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-4 border-b-4 border-olive/30" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-border-harsh" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-border-harsh" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-12 h-px bg-olive-bright" />
              <span className="font-[var(--font-mono)] text-xs tracking-[0.3em] text-olive-bright uppercase">
                Vapor Wake &bull; Body-Worn K-9 &bull; Detection Teams
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-6"
            >
              <span className="block text-foreground">The Threat</span>
              <span className="block text-foreground">Is Mobile.</span>
              <span className="block text-tan">So Are We.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
            >
              Gladiator Allegiance is the industry leader in Vapor Wake, explosive,
              firearm, and narcotics detection canines. Our body-worn K-9 teams
              screen hundreds of people without disrupting the flow of traffic —
              detecting threats up to two minutes after materials pass.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#connect"
                className="bg-olive hover:bg-olive-bright text-foreground font-[var(--font-display)] text-base font-semibold tracking-[0.15em] uppercase px-8 py-4 transition-colors inline-flex items-center justify-center gap-3"
              >
                <Shield size={18} />
                LET&apos;S CONNECT
              </a>
              <a
                href="#solution"
                className="border-2 border-foreground/20 hover:border-tan/50 text-foreground font-[var(--font-display)] text-base font-semibold tracking-[0.15em] uppercase px-8 py-4 transition-colors inline-flex items-center justify-center"
              >
                SEE CAPABILITIES
              </a>
            </motion.div>
          </div>

          {/* Right — Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-olive/6 rounded-full blur-3xl scale-125" />
              <div className="relative z-10 w-full h-full logo-blend">
                <Image
                  src="/logo.png"
                  alt="Gladiator Allegiance Security"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — real data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-harsh"
        >
          {[
            { value: "53+", label: "Years Combined Trainer Experience" },
            { value: "8", label: "Combat Deployments — CEO" },
            { value: "24/7", label: "Operational Readiness" },
            { value: "TS", label: "Top Secret Cleared Staff" },
          ].map((stat, i) => (
            <div key={i} className="bg-background px-8 py-8 text-center">
              <div className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-tan">
                {stat.value}
              </div>
              <div className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-foreground-muted mt-2 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
