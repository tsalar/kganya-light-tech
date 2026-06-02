import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kganya Labs" },
      { name: "description", content: "Kganya Labs is a Botswana-based innovation lab built on data, AI and purpose." },
      { property: "og:title", content: "About Kganya Labs" },
      { property: "og:description", content: "An innovation lab transforming ideas into impact." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  "Innovation", "Excellence", "Integrity", "Collaboration",
  "Impact", "Sustainability", "Continuous Learning", "Customer Success",
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="An innovation lab born in Botswana, built for Africa."
        description='"Kganya" means light in Setswana — and that is exactly what we bring to organizations through technology, data and AI.'
      />

      <section className="container-px py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { icon: Target, title: "Mission", body: "To empower organizations and communities through innovative technology solutions, actionable data insights, and digital transformation initiatives that drive sustainable growth." },
            { icon: Eye, title: "Vision", body: "To become Africa's leading innovation and technology solutions company, recognized for transforming industries through data, AI and sustainable digital innovation." },
            { icon: Heart, title: "Promise", body: "Practical, scalable, impactful technology — designed for real-world problems and measurable outcomes." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-px">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Our Core Values</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">The principles that guide every engagement, every line of code, every decision.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Not just a software company.</h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Kganya Labs is an innovation lab — a place where data analytics, AI, software engineering
              and design thinking converge to create technology that delivers measurable social and
              economic impact across Botswana and Africa.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We serve startups, SMEs, NGOs, government departments and large corporations with the
              same commitment to excellence and partnership.
            </p>
            <Link to="/services" className="mt-8 inline-flex rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:scale-[1.03] transition">
              Explore our services
            </Link>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-navy-deep to-navy p-10 text-white shadow-elegant">
            <p className="font-display text-3xl leading-snug">
              "We don't deliver software. We deliver <span className="text-gradient-gold">light</span> —
              the clarity that turns data into decisions and ideas into impact."
            </p>
            <p className="mt-6 text-sm text-white/60">— The Founders</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
