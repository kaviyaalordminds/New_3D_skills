import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-10 text-center sm:p-16">
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start shipping 3D assets today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/85">
          Join thousands of creators and game studios using Forge3D to move
          from concept to game-ready asset in minutes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#top"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Start creating free
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="mailto:sales@forge3d.app"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
