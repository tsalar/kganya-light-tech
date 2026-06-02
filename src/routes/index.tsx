import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Code2, Brain, Lightbulb, Globe, FlaskConical, Sparkles, ShieldCheck, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kganya Labs — Turning Data Into Decisions" },
      { name: "description", content: "We help businesses, governments, and organizations unlock the power of technology, data analytics, software and AI." },
      { property: "og:title", content: "Kganya Labs — Turning Data Into Decisions" },
      { property: "og:description", content: "Botswana's innovation lab for data, AI and digital transformation." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const metrics = [
  { value: "50+", label: "Dashboards Developed" },
  { value: "20+", label: "Digital Solutions Created" },
  { value: "10+", label: "Innovation Projects" },
  { value: "100%", label: "Client-Focused" },
];

const services = [
  { icon: BarChart3, title: "Data Analytics & BI", desc: "Power BI dashboards, executive reporting, and predictive analytics that drive smarter decisions." },
  { icon: Globe, title: "Web Design & Development", desc: "Corporate, e-commerce and custom web applications engineered for performance." },
  { icon: Code2, title: "Custom Software", desc: "Management systems, workflow automation and enterprise applications tailored to you." },
  { icon: Brain, title: "Artificial Intelligence", desc: "AI chatbots, document processing, ML models and intelligent automation." },
  { icon: Lightbulb, title: "Digital Transformation", desc: "Strategy, assessments and roadmaps that modernize how your organization works." },
  { icon: FlaskConical, title: "Research & Innovation", desc: "Prototypes, hackathons and emerging tech exploration with measurable outcomes." },
];

const values = [
  { icon: Sparkles, label: "Innovation" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: TrendingUp, label: "Impact" },
  { icon: Users, label: "Collaboration" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" width={1920} height={1280} className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/85 to-background" />
        </div>
        <div className="container-px relative z-10 grid min-h-[88vh] items-center py-24 text-white">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
              Innovation Lab · Gaborone, Botswana
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Turning Data Into Decisions.<br />
              Turning Ideas Into <span className="text-gradient-gold">Impact.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              We help businesses, governments, and organizations unlock the power of technology,
              data analytics, software development and artificial intelligence to solve complex
              challenges and drive measurable growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep transition hover:scale-[1.03] hover:shadow-glow">
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Metrics */}
        <div className="container-px relative z-10 -mb-16 translate-y-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-elegant md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card p-6 text-center md:p-8">
                <div className="font-display text-3xl font-bold text-navy md:text-4xl">{m.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" />

      {/* Services */}
      <section className="container-px py-20">
        <SectionHeader
          eyebrow="What We Do"
          title="Technology that solves real problems"
          description="From analytics dashboards to AI-driven automation, we deliver solutions engineered for measurable impact."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition group-hover:bg-gold/30" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-muted/40 py-24">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              About Kganya Labs
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              An innovation lab built on <span className="text-gradient-gold">light, data and purpose.</span>
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              "Kganya" means <em>light</em> in Setswana. Founded by three young innovators, we operate at
              the intersection of data analytics, artificial intelligence, software development and
              sustainable development to illuminate what's possible for Africa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {values.map((v) => (
                <div key={v.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center">
                  <v.icon className="h-5 w-5 text-gold" />
                  <span className="mt-2 text-xs font-semibold">{v.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              Discover our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-10 text-white shadow-elegant">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our Mission</p>
                <p className="mt-3 font-display text-2xl leading-snug">
                  To empower organizations and communities through innovative technology, actionable
                  insights and digital transformation that drives sustainable growth.
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our Vision</p>
                  <p className="mt-3 font-display text-xl leading-snug">
                    To become Africa's leading innovation and technology solutions company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
