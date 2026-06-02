import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Kganya Labs" },
      { name: "description", content: "Meet the founders of Kganya Labs." },
      { property: "og:title", content: "Team — Kganya Labs" },
      { property: "og:description", content: "Three innovators. One mission." },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const team = [
  {
    name: "Rubinah Solomon",
    role: "Co-Founder & Data Analytics Lead",
    initials: "RS",
    expertise: ["Data Analytics", "Power BI", "Business Intelligence", "Research", "Artificial Intelligence"],
  },
  {
    name: "Mpho",
    role: "Co-Founder & Technology Lead",
    initials: "M",
    expertise: ["Software Engineering", "Web Development", "Cloud Solutions", "Systems Architecture"],
  },
  {
    name: "Nyasha",
    role: "Co-Founder & Innovation Lead",
    initials: "N",
    expertise: ["Innovation Management", "Product Development", "Strategy", "Project Management"],
  },
];

function Team() {
  return (
    <div>
      <PageHero
        eyebrow="The Team"
        title="Three founders. One purpose: illuminating possibilities."
        description="Meet the people behind Kganya Labs."
      />

      <section className="container-px py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <div className="relative grid h-56 place-items-center bg-gradient-to-br from-navy-deep to-navy text-white">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <span className="relative font-display text-6xl font-bold text-gold">{m.initials}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{m.role}</p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expertise</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.expertise.map((e) => (
                      <span key={e} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{e}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3 border-t border-border pt-5">
                  <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-muted transition hover:bg-gold hover:text-navy-deep"><Linkedin className="h-4 w-4" /></a>
                  <a href="#" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full bg-muted transition hover:bg-gold hover:text-navy-deep"><Mail className="h-4 w-4" /></a>
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
