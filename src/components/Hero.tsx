"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import CanvasErrorBoundary from "@/components/three/CanvasErrorBoundary";
import type { AssetVariant } from "@/components/three/AssetPreviewScene";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});
const AssetPreviewScene = dynamic(
  () => import("@/components/three/AssetPreviewScene"),
  { ssr: false }
);

const previewAssets: { label: string; variant: AssetVariant }[] = [
  { label: "Blade Runner Alley", variant: "alley" },
  { label: "Stylized Oak", variant: "oak" },
  { label: "Sci-Fi Drone", variant: "drone" },
  { label: "Fantasy Sword", variant: "sword" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center"
      >
        <div className="h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-foreground/80">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          Now generating textured meshes in under 20 seconds
        </div>

        <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Turn ideas into{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            game-ready 3D assets
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
          Forge3D is an AI-assisted modeling studio for creators and game
          developers. Describe an asset, refine it live, and export
          production-ready meshes in minutes — not weeks.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
          >
            Start creating free
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#how-it-works"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-7 text-base font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch demo
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required · 10 free generations every month
        </p>
      </div>

      <div
        className="relative mx-auto mt-12 h-72 max-w-3xl sm:h-96"
        aria-label="Interactive 3D preview of an AI-generated asset"
        role="img"
      >
        <CanvasErrorBoundary
          fallback={
            <div className="h-full w-full rounded-3xl bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/25" />
          }
        >
          <HeroScene />
        </CanvasErrorBoundary>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-border bg-muted/60 p-3 sm:grid-cols-4">
          {previewAssets.map(({ label, variant }) => (
            <div
              key={label}
              className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/25"
            >
              <div className="pointer-events-none absolute inset-0">
                <CanvasErrorBoundary fallback={<div className="h-full w-full" />}>
                  <AssetPreviewScene variant={variant} />
                </CanvasErrorBoundary>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-8">
                <span className="font-display text-sm font-medium text-white">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
