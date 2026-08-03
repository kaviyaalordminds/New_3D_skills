import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Hobby",
    price: "$0",
    cadence: "/month",
    description: "For trying Forge3D on personal projects.",
    features: [
      "10 generations / month",
      "glTF export",
      "Community license",
      "1 seat",
    ],
    cta: "Start free",
  },
  {
    name: "Studio",
    price: "$39",
    cadence: "/month",
    description: "For creators and small teams shipping regularly.",
    features: [
      "Unlimited generations",
      "All export formats (glTF, FBX, USDZ)",
      "Team workspace, 5 seats",
      "Priority render queue",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For studios with dedicated pipelines and support.",
    features: [
      "Dedicated GPU cluster",
      "SSO & audit logs",
      "Custom model fine-tuning",
      "Dedicated support",
    ],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple pricing that scales with your studio
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Start free, upgrade when you need unlimited generations and team
            features. Annual billing saves 20%.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                  : "border-border bg-muted/30"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">
                  {plan.price}
                </span>
                <span className="text-sm text-foreground/60">{plan.cadence}</span>
              </p>

              <a
                href="#cta"
                className={`mt-6 flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
