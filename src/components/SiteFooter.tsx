import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-px relative z-10 grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-gold">
              <Sparkles className="h-4 w-4" />
            </span>
            Kganya<span className="text-gradient-gold">Labs</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Illuminating Possibilities Through Technology. A Botswana-based innovation lab transforming
            ideas into measurable impact through data, AI and software.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590824961510", label: "Facebook" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/kganyalabs-kl-05b227414", label: "LinkedIn" },
              { Icon: Twitter, href: "https://x.com/home", label: "X" },
              { Icon: Instagram, href: "https://www.instagram.com/kganyalabs/", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition hover:bg-gold hover:text-navy-deep">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/innovation-lab" className="hover:text-gold">Innovation Lab</Link></li>
            <li><Link to="/team" className="hover:text-gold">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@kganyalabs.co.bw</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +267 XXX XXX XX</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Gaborone, Botswana</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Kganya Labs (Pty) Ltd. All rights reserved.</p>
          <p className="italic text-gold/80">Illuminating Possibilities Through Technology.</p>
        </div>
      </div>
    </footer>
  );
}
