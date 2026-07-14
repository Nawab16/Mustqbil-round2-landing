import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Compass,
  Layout,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const features = [
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Calm, focused planning",
    description: "Turn scattered ideas into a clear roadmap your team actually wants to use.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Work that feels effortless",
    description: "Automate updates, centralize decisions, and keep momentum without extra admin.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Built for real collaboration",
    description: "Assign ownership, share context, and keep every conversation tied to the work.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Live visibility",
    description: "Spot blockers early and keep stakeholders informed with elegant progress snapshots.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Secure by default",
    description: "Protect client work with enterprise-grade controls and private-by-default sharing.",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Launch-ready workflows",
    description: "Go from kickoff to launch faster with templates made for modern product teams.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your workspace",
    description: "Set up a shared home for your team in minutes and invite everyone with one link.",
  },
  {
    step: "02",
    title: "Shape the plan",
    description: "Break projects into milestones, assign owners, and keep priorities visible every day.",
  },
  {
    step: "03",
    title: "Ship with confidence",
    description: "Track progress, clear blockers, and celebrate launches without draining your team.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "For founders and solo operators building momentum.",
    features: ["Up to 3 active projects", "2 teammates", "Simple board-based planning"],
    cta: "Get started free",
    variant: "outline" as const,
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/month",
    description: "For high-performing teams that need clarity at speed.",
    features: [
      "Unlimited projects",
      "Unlimited teammates",
      "Advanced progress tracking",
      "Priority support",
    ],
    cta: "Start free trial",
    variant: "highlight" as const,
  },
  {
    name: "Business",
    price: "$29",
    period: "/user/month",
    description: "For organizations that need governance and control.",
    features: ["Everything in Team", "SSO and audit logs", "Custom workflows", "Dedicated success lead"],
    cta: "Contact sales",
    variant: "outline" as const,
  },
];

const faqs = [
  {
    value: "trial",
    question: "Is there a free trial?",
    answer:
      "Yes. Every paid plan starts with a 14-day free trial, and the Starter plan is free forever.",
  },
  {
    value: "change-plan",
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade at any time, and changes take effect on the next billing cycle.",
  },
  {
    value: "cancel",
    question: "How do I cancel?",
    answer: "You can cancel from your workspace settings at any time with no cancellation fees.",
  },
  {
    value: "data",
    question: "Where is my data stored?",
    answer: "Your data is stored in secure, SOC 2-compliant data centers with encryption in transit and at rest.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Clarity — Calm project operations for modern teams" },
      {
        name: "description",
        content:
          "Clarity helps modern teams plan, align, and ship work with a calm, flexible workspace built for momentum.",
      },
      {
        property: "og:title",
        content: "Clarity — Calm project operations for modern teams",
      },
      {
        property: "og:description",
        content:
          "Clarity helps modern teams plan, align, and ship work with a calm, flexible workspace built for momentum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Layout className="h-4 w-4" />
            </div>
            Clarity
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-foreground">
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-foreground">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Start free trial</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <hr className="border-border" />
              <a href="#" className="text-foreground">
                Log in
              </a>
              <a href="#" className="text-foreground">
                Start free trial
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.16),transparent_30%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <Badge className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Rocket className="mr-2 h-4 w-4" />
                Launch brighter with less friction
              </Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Bring calm, measurable momentum to your next big launch.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Clarity gives modern teams a focused workspace to plan projects, align work, and keep
                momentum steady from kickoff to delivery.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-background/70 p-2 shadow-sm sm:w-auto">
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0"
                    aria-label="Work email"
                  />
                  <Button size="sm" className="rounded-full">
                    Get started
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  No credit card required
                </span>
              </div>
            </div>

            <Card className="border-primary/20 bg-background/80 shadow-2xl shadow-primary/5 backdrop-blur">
              <CardContent className="p-0">
                <div className="rounded-t-2xl border-b border-border bg-muted/40 p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">Launch planning board</p>
                      <Badge variant="secondary">On track</Badge>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3 text-sm">
                        <span className="text-foreground">Prototype review</span>
                        <span className="text-muted-foreground">Today</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3 text-sm">
                        <span className="text-foreground">Client onboarding</span>
                        <span className="text-muted-foreground">Tomorrow</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-border bg-background p-4">
                      <p className="text-2xl font-semibold text-foreground">94%</p>
                      <p className="mt-1 text-sm text-muted-foreground">Stakeholder alignment</p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-4">
                      <p className="text-2xl font-semibold text-foreground">12 hrs</p>
                      <p className="mt-1 text-sm text-muted-foreground">Saved per week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="features" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Designed to simplify the work that matters most.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Keep your team aligned with a workspace that feels lighter, clearer, and faster to use.
                </p>
              </div>
              <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Explore plans <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A modern workflow that feels effortless from day one.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From kickoff to launch, your team gets the clarity it needs without the clutter.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <blockquote className="text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
              “Clarity replaced three different tools for us. It finally gave our team one place to
              think, plan, and act without friction.”
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-foreground">Mina Alvarez</p>
              <p className="text-sm text-muted-foreground">Head of Delivery, Northstar Labs</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Flexible plans for teams at every stage.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start simple and scale your operations as your team grows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                variant={plan.variant}
              />
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-3xl font-semibold tracking-tight text-card-foreground sm:text-4xl">
              Ready to make work feel lighter?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join teams that are shipping smarter with a calmer, more focused operating rhythm.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg">Start your free trial</Button>
              <Button size="lg" variant="outline">
                Talk to sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="/" className="flex items-center gap-2 font-semibold text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Layout className="h-4 w-4" />
              </div>
              Clarity
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition hover:text-foreground">
                Terms
              </a>
              <a href="#" className="transition hover:text-foreground">
                Security
              </a>
              <a href="#" className="transition hover:text-foreground">
                Contact
              </a>
            </nav>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Clarity, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-border bg-background/80">
      <CardContent className="p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-background p-6 shadow-sm">
      <span className="text-sm font-semibold text-muted-foreground">{step}</span>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  variant,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  variant: "outline" | "highlight";
}) {
  const isHighlight = variant === "highlight";

  return (
    <Card
      className={`flex flex-col border-border ${isHighlight ? "border-2 border-primary bg-background shadow-lg shadow-primary/10" : "bg-background"}`}
    >
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-semibold tracking-tight text-foreground">{price}</span>
          {period && <span className="ml-1 text-sm text-muted-foreground">{period}</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <ul className="mt-6 flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="mt-8 w-full" variant={isHighlight ? "default" : "outline"}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
