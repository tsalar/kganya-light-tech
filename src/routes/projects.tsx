import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight, Droplets, BarChart3, FileText, Rocket } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Kganya Labs" },
      { name: "description", content: "Featured projects spanning water monitoring, SME analytics, AI reporting and innovation platforms." },
      { property: "og:title", content: "Projects — Kganya Labs" },
      { property: "og:description", content: "Real-world impact delivered through technology." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    icon: Droplets,
    tag: "Water & Utilities",
    title: "National Water Quality Monitoring Platform",
    desc: "A smart monitoring solution combining sensors, analytics, dashboards and reporting systems to improve water resource management.",
  },
  {
    icon: BarChart3,
    tag: "SME Growth",
    title: "SME Business Analytics Dashboard",
    desc: "A Power BI solution helping small businesses track growth, performance and profitability in real time.",
  },
  {
    icon: FileText,
    tag: "Artificial Intelligence",
    title: "AI Report Generator",
    desc: "An AI-powered platform that automatically generates management reports, executive summaries and actionable insights.",
  },
  {
    icon: Rocket,
    tag: "Innovation",
    title: "Digital Startup Accelerator Platform",
    desc: "A web-based platform supporting entrepreneurs, mentors and innovation ecosystems across Botswana.",
  },
];

function Projects() {
  return (
    <div>
      <PageHero
        eyebrow="Projects & Case Studies"
        title="Solutions in the wild. Impact you can measure."
        description="A snapshot of the work we are most proud of — and the partners we are proud to serve."
      />

      <section className="container-px py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elegant transition hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 transition group-hover:from-gold/10 group-hover:to-transparent" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold">
                  <p.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-gold" />
              </div>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-widest text-gold">{p.tag}</p>
              <h3 className="relative mt-2 font-display text-2xl font-bold leading-tight md:text-3xl">{p.title}</h3>
              <p className="relative mt-3 text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-muted/40 p-10 text-center">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Have a project in mind?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">We'd love to hear your challenge and explore how technology can solve it.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:scale-[1.03] transition">
            Start a conversation
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
