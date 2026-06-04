import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kganya Labs" },
      { name: "description", content: "Get in touch with Kganya Labs for consultations, projects and partnerships." },
      { property: "og:title", content: "Contact — Kganya Labs" },
      { property: "og:description", content: "Let's build something meaningful together." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = `New enquiry from ${data.name}`;
    const body = [
      `Name: ${data.name}`,
      `Organization: ${data.organization || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Service: ${data.service || "-"}`,
      `Budget: ${data.budget || "-"}`,
      "",
      "Message:",
      data.message,
    ].join("\n");
    window.location.href = `mailto:flowguardltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const info = [
    { icon: Mail, label: "Email", value: "flowguardltd@gmail.com" },
    { icon: Phone, label: "Phone", value: "+267 72 340 388" },
    { icon: MapPin, label: "Location", value: "Gaborone, Botswana" },
    { icon: Clock, label: "Hours", value: "Mon–Fri · 08:00–17:00" },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your challenge."
        description="Tell us what you're trying to solve — we'll get back within one business day."
      />

      <section className="container-px py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-10">
            {submitted ? (
              <div className="grid place-items-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">We've received your message and will reach out soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name *" name="name" error={errors.name} />
                  <Field label="Organization" name="organization" error={errors.organization} />
                  <Field label="Email *" name="email" type="email" error={errors.email} />
                  <Field label="Phone" name="phone" error={errors.phone} />
                  <SelectField label="Service Needed" name="service" options={["Data Analytics & BI", "Web Development", "Custom Software", "AI Solutions", "Digital Transformation", "Research & Innovation"]} />
                  <SelectField label="Project Budget" name="budget" options={["< BWP 25k", "BWP 25k – 100k", "BWP 100k – 500k", "BWP 500k+"]} />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-semibold">Message *</label>
                  <textarea name="message" rows={5} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="Tell us about your project, goals and timeline…" />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-6 py-3.5 text-sm font-bold text-white transition hover:scale-[1.02] hover:shadow-glow">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-gradient-to-br from-navy-deep to-navy p-8 text-white shadow-elegant">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Reach us directly</p>
              <ul className="mt-6 space-y-5">
                {info.map((i) => (
                  <li key={i.label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold"><i.icon className="h-5 w-5" /></span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">{i.label}</p>
                      <p className="font-semibold">{i.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-lg font-bold">Prefer a quick call?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Book a free 30-minute consultation and we'll explore your challenge together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-semibold">{label}</label>
      <input name={name} type={type} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-semibold">{label}</label>
      <select name={name} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
