import { MessageSquareText, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Describe your asset",
    description:
      "Type a prompt or upload a reference sketch or photo. Set style, scale, and target engine.",
  },
  {
    icon: Sparkles,
    title: "Generate & refine",
    description:
      "Forge3D produces multiple variations. Tweak shape, texture, and detail live until it fits.",
  },
  {
    icon: PackageCheck,
    title: "Export & ship",
    description:
      "Download game-ready files or push straight into your engine with the Forge3D plugin.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/40 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            From prompt to production in three steps
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            No sculpting experience required — Forge3D handles topology,
            UVs, and texturing behind the scenes.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl bg-background p-6">
              <span className="font-display text-sm font-semibold text-primary">
                Step {index + 1}
              </span>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
