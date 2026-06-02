import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BarChart3, Globe, Code2, Brain, Lightbulb, FlaskConical, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kganya Labs" },
      { name: "description", content: "Data analytics, web development, custom software, AI, digital transformation and research services." },
      { property: "og:title", content: "Services — Kganya Labs" },
      { property: "og:description", content: "Six service lines designed to transform organizations." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description: "Transform complex data into actionable insights that improve decision-making and organizational performance.",
    offerings: ["Power BI Dashboards", "Executive Dashboards", "Business Intelligence Systems", "KPI Tracking", "Automated Reporting", "Data Visualization", "Data Cleaning", "Predictive Analytics", "Statistical Analysis"],
    benefits: ["Better decisions", "Reduced reporting time", "Improved performance monitoring", "Data-driven growth"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "High-performing, beautifully designed websites that turn visitors into customers.",
    offerings: ["Corporate Websites", "Startup Websites", "Portfolio Websites", "E-Commerce Platforms", "Custom Web Applications", "Website Maintenance", "SEO Optimization", "Performance Optimization"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored business systems engineered to streamline operations and unlock productivity.",
    offerings: ["Management Systems", "Inventory Systems", "Customer Portals", "Workflow Automation", "Internal Business Tools", "Enterprise Applications", "Database Systems"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    description: "Practical AI that automates, augments, and accelerates your operations.",
    offerings: ["AI Chatbots", "Virtual Assistants", "Document Processing", "Machine Learning Models", "AI Automation", "Predictive Systems", "AI-Powered Reporting"],
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation Consulting",
    description: "Strategy and execution to modernize how your organization works.",
    offerings: ["Digital Strategy", "Technology Assessments", "Process Automation", "Innovation Workshops", "Technology Roadmaps", "Business Process Improvement"],
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description: "From idea to prototype, we turn emerging technology into tangible value.",
    offerings: ["Technology Research", "Innovation Programs", "Hackathons", "Prototype Development", "Product Design", "Emerging Technology Exploration"],
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Six disciplines. One purpose: your impact."
        description="From data analytics to AI, every engagement is engineered for measurable outcomes."
      />

      <section className="container-px py-20">
        <div className="space-y-10">
          {services.map((s, i) => (
            <div key={s.title} className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-elegant lg:grid-cols-[1fr_2fr] lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.description}</p>
                {s.benefits && (
                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">Benefits</p>
                    {s.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-gold" />{b}</div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Offerings</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.offerings.map((o) => (
                    <div key={o} className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium transition hover:border-gold/50 hover:bg-gold/5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
