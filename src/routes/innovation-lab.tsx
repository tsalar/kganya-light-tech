import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/innovation-lab")({
  head: () => ({
    meta: [
      { title: "Innovation Lab — Kganya Labs" },
      { name: "description", content: "Building technology aligned with the United Nations Sustainable Development Goals." },
      { property: "og:title", content: "Innovation Lab — Kganya Labs" },
      { property: "og:description", content: "Technology for the SDGs." },
    ],
    links: [{ rel: "canonical", href: "/innovation-lab" }],
  }),
  component: InnovationLab,
});

const sdgs = [
  { num: 3, name: "Good Health & Well-being", color: "#4C9F38", desc: "Health information systems and analytics that improve outcomes." },
  { num: 4, name: "Quality Education", color: "#C5192D", desc: "Learning platforms and student analytics for better learning outcomes." },
  { num: 6, name: "Clean Water & Sanitation", color: "#26BDE2", desc: "IoT and analytics for water quality and resource management." },
  { num: 8, name: "Decent Work & Economic Growth", color: "#A21942", desc: "Digital tools that grow SMEs and create economic opportunity." },
  { num: 9, name: "Industry, Innovation & Infrastructure", color: "#FD6925", desc: "AI, software and research that modernize core industries." },
  { num: 11, name: "Sustainable Cities & Communities", color: "#FD9D24", desc: "Smart city dashboards and civic technology platforms." },
  { num: 13, name: "Climate Action", color: "#3F7E44", desc: "Environmental monitoring and climate-aware decision systems." },
];

function InnovationLab() {
  return (
    <div>
      <PageHero
        eyebrow="Innovation Lab"
        title="Technology aligned with the Sustainable Development Goals."
        description="We build solutions that move the needle on the challenges that matter most for Botswana, Africa and the planet."
      />

      <section className="container-px py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg) => (
            <div key={sdg.num} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-center gap-4">
                <div
                  className="grid h-16 w-16 place-items-center rounded-xl font-display text-2xl font-bold text-white shadow-glow"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.num}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">SDG {sdg.num}</p>
                  <h3 className="font-display text-lg font-bold leading-tight">{sdg.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{sdg.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep to-navy p-10 text-white shadow-elegant md:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">How we work</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">From challenge to deployed solution.</h2>
            </div>
            <ol className="space-y-5">
              {[
                ["Discover", "Listen, research and identify the real problem worth solving."],
                ["Design", "Prototype, validate and shape a solution with stakeholders."],
                ["Deliver", "Engineer, deploy and integrate using best-in-class technology."],
                ["Measure", "Track impact through data — and iterate relentlessly."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-display font-bold text-navy-deep">{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-bold">{t}</p>
                    <p className="text-sm text-white/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
