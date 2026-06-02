import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-px py-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-16 text-center text-white shadow-elegant md:px-16 md:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/30 blur-3xl animate-glow-pulse" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Let's Build <span className="text-gradient-gold">Botswana's Digital Future</span> Together
          </h2>
          <p className="mt-5 text-white/75 md:text-lg">
            Whether you're a startup looking to launch, a business seeking data-driven insights, or an
            organization aiming to transform operations through technology, Kganya Labs is your trusted
            innovation partner.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep transition hover:scale-[1.03] hover:shadow-glow">
            Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
