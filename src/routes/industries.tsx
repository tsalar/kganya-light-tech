import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Sprout, Droplets, HeartPulse, GraduationCap, ShieldCheck, Landmark, Building2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Kganya Labs" },
      { name: "description", content: "Solutions for agriculture, water, healthcare, education, insurance, finance and government." },
      { property: "og:title", content: "Industries — Kganya Labs" },
      { property: "og:description", content: "Deep expertise across seven priority sectors." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const industries = [
  { icon: Sprout, name: "Agriculture", examples: ["Farm Analytics", "Smart Irrigation", "Yield Monitoring"] },
  { icon: Droplets, name: "Water & Utilities", examples: ["Water Quality Monitoring", "Environmental Monitoring", "IoT Solutions"] },
  { icon: HeartPulse, name: "Healthcare", examples: ["Health Information Systems", "Analytics Dashboards"] },
  { icon: GraduationCap, name: "Education", examples: ["Learning Platforms", "Student Analytics"] },
  { icon: ShieldCheck, name: "Insurance", examples: ["Claims Analytics", "Customer Dashboards"] },
  { icon: Building2, name: "Finance", examples: ["Risk Analytics", "Financial Reporting"] },
  { icon: Landmark, name: "Government", examples: ["Public Service Dashboards", "Monitoring & Evaluation Systems"] },
];

function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title="Built for the sectors shaping Africa's future."
        description="We bring domain expertise and proven playbooks to every engagement."
      />

      <section className="container-px py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition group-hover:bg-gold/30" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-gold">
                <ind.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold">{ind.name}</h3>
              <ul className="relative mt-4 space-y-2">
                {ind.examples.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />{e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
