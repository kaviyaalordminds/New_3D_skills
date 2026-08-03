import {
  Wand2,
  Network,
  Download,
  Palette,
  History,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Wand2,
    title: "Text-to-3D generation",
    description:
      "Describe an object or character in plain language and get a textured mesh in seconds, ready to refine.",
  },
  {
    icon: Network,
    title: "Smart retopology",
    description:
      "Auto-optimized topology built for real-time engines — no manual cleanup or decimation passes.",
  },
  {
    icon: Download,
    title: "One-click export",
    description:
      "Send assets straight to Unity, Unreal, or Blender, or export standard glTF, FBX, and USDZ files.",
  },
  {
    icon: Palette,
    title: "Material & texture AI",
    description:
      "Generate PBR textures that match your art direction automatically, from stylized to photoreal.",
  },
  {
    icon: History,
    title: "Version history",
    description:
      "Every iteration is saved automatically. Branch, compare, and roll back to any variant instantly.",
  },
  {
    icon: Users,
    title: "Team workspaces",
    description:
      "Share libraries, leave comments on assets, and keep your whole studio working from one source of truth.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to ship 3D faster
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            From first prompt to final export, Forge3D handles the tedious
            parts of asset production so your team can focus on the art.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.08}>
              <div className="rounded-2xl border border-border bg-muted/40 p-6 transition-colors hover:bg-muted">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
