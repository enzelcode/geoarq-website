import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { InstagramIcon, WhatsappIcon } from "./brand-icons";
import { SITE, whatsappLink } from "@/lib/site";

const NAV = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como trabalhamos", href: "/#processo" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink px-6 pt-20 pb-8 text-cream sm:px-10 sm:pt-28 sm:pb-10 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-forest/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-sand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo variant="light" height={56} compact />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              Arquitetura, urbanismo, paisagismo e regularização imobiliária
              — sob o mesmo olhar técnico.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.32em] text-cream/45">
              Navegação
            </div>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/85 transition-colors hover:text-sage"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.32em] text-cream/45">
              Contato
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-sage"
                >
                  <WhatsappIcon className="h-[14px] w-[14px]" />
                  {SITE.phoneDisplay}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-sage"
                >
                  <InstagramIcon className="h-[14px] w-[14px]" />@
                  {SITE.instagramHandle}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-sage"
                >
                  {SITE.email}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.28em] text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>© {new Date().getFullYear()} GeoArq</p>

          <a
            href="/politica-de-privacidade"
            className="transition-colors hover:text-cream"
          >
            Política de privacidade
          </a>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://enzelcode.com"
              target="_blank"
              rel="noreferrer"
              className="text-cream/80 transition-colors hover:text-sage"
            >
              enzelcode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
