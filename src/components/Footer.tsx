import { Shield } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-concrete border-t border-border-harsh">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Gladiator Allegiance"
                width={36}
                height={36}
                className="logo-blend-sm"
              />
              <span className="font-[var(--font-display)] text-foreground text-lg font-semibold tracking-[0.15em] uppercase">
                Gladiator Allegiance
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Exceptional safety and security solutions through elite
              body-worn K-9 teams. Purpose-built for law enforcement
              agencies at every level.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Navigation
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Threat Assessment", href: "#threat" },
                { label: "Capabilities", href: "#solution" },
                { label: "Deployment Process", href: "#process" },
                { label: "Past Performance", href: "#proof" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#connect" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-[var(--font-mono)] text-xs tracking-[0.15em] text-foreground-muted hover:text-tan transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@gladiatorallegiance.com"
                className="block font-[var(--font-mono)] text-xs tracking-[0.1em] text-foreground-muted hover:text-tan transition-colors"
              >
                contact@gladiatorallegiance.com
              </a>
              <div className="flex items-center gap-2 mt-4">
                <Shield size={14} className="text-olive-bright" />
                <span className="font-[var(--font-mono)] text-[10px] tracking-[0.2em] text-foreground-muted uppercase">
                  Nationwide Deployment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border-harsh flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-foreground-muted uppercase">
            &copy; {new Date().getFullYear()} Gladiator Allegiance. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-foreground-muted hover:text-tan transition-colors uppercase"
            >
              Privacy Policy
            </a>
            <span className="text-foreground-muted text-[10px]">|</span>
            <a
              href="#"
              className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-foreground-muted hover:text-tan transition-colors uppercase"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
