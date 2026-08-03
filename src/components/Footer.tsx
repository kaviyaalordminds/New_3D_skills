import { Boxes } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.379.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.582 7.203a2.51 2.51 0 0 0-1.766-1.778C18.254 5 12 5 12 5s-6.254 0-7.816.425A2.51 2.51 0 0 0 2.418 7.203 26.14 26.14 0 0 0 2 12a26.14 26.14 0 0 0 .418 4.797 2.51 2.51 0 0 0 1.766 1.778C5.746 19 12 19 12 19s6.254 0 7.816-.425a2.51 2.51 0 0 0 1.766-1.778A26.14 26.14 0 0 0 22 12a26.14 26.14 0 0 0-.418-4.797ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Asset library", "Community", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
              <Boxes className="h-6 w-6 text-primary" aria-hidden="true" />
              Forge3D
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-foreground/70">
              AI-assisted 3D asset creation for creators and game developers.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com"
                aria-label="Forge3D on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <GithubIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Forge3D on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="Forge3D on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <YoutubeIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Forge3D. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
