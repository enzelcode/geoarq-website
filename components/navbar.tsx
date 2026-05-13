"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

function BurgerIcon() {
  return (
    <span aria-hidden className="flex flex-col items-center justify-center gap-[5px]">
      <span className="block h-px w-5 bg-current" />
      <span className="block h-px w-3.5 bg-current" />
    </span>
  );
}
import { Logo } from "./logo";
import { InstagramIcon, WhatsappIcon } from "./brand-icons";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { easing } from "@/lib/design";

gsap.registerPlugin(useGSAP);

const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const compact = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useGSAP(
    () => {
      gsap.from(wrapRef.current, {
        y: -28,
        opacity: 0,
        duration: 0.9,
        ease: easing.expo,
        delay: 0.15,
      });
    },
    { scope: wrapRef }
  );

  useEffect(() => {
    if (!open) return;
    const ctx = gsap.context(() => {
      gsap.from(".drawer-row", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: easing.expo,
        delay: 0.15,
      });
      gsap.from(".drawer-cta", {
        y: 14,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: easing.expo,
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, [open]);

  return (
    <header
      ref={wrapRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-700 ease-out px-4 sm:px-10 lg:px-16",
        compact ? "pt-3 sm:pt-4" : "pt-5 sm:pt-6"
      )}
    >
      <div
        ref={navRef}
        className={cn(
          "mx-auto flex items-center justify-between text-cream transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "max-w-6xl",
          compact
            ? "h-[68px] rounded-full border border-cream/15 bg-forest-deep/90 px-4 pl-5 shadow-[0_18px_50px_-25px_rgba(30,53,34,0.55)] backdrop-blur-2xl backdrop-saturate-150"
            : "h-[80px] sm:h-[96px]"
        )}
      >
        <div
          className={cn(
            "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            compact ? "origin-left scale-[0.78]" : "scale-100"
          )}
          style={{ transformOrigin: "left center" }}
        >
          <Logo height={48} priority variant="light" compact />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-3.5 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-sage transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${SITE.phoneDisplay}`}
            title={`WhatsApp ${SITE.phoneDisplay}`}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-all duration-300 hover:scale-105",
              compact
                ? "border border-cream/15 bg-cream/10 hover:bg-cream/20"
                : "hover:bg-cream/12"
            )}
          >
            <WhatsappIcon className="h-[18px] w-[18px]" />
          </a>

          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Instagram @${SITE.instagramHandle}`}
            title={`@${SITE.instagramHandle}`}
            className={cn(
              "hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-all duration-300 hover:scale-105",
              compact
                ? "border border-cream/15 bg-cream/10 hover:bg-cream/20"
                : "hover:bg-cream/12"
            )}
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Abrir menu"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/15"
              >
                <BurgerIcon />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/55 backdrop-blur-md duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
              <Dialog.Content className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-forest-deep text-cream duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-8 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-moss/25 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-sand/15 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                  }}
                />

                <div className="relative flex items-center justify-between px-5 pt-5">
                  <Logo height={44} variant="light" compact />
                  <Dialog.Close asChild>
                    <button
                      aria-label="Fechar menu"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:bg-cream/10"
                    >
                      <X size={20} strokeWidth={1.6} />
                    </button>
                  </Dialog.Close>
                </div>

                <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>

                <nav className="relative flex flex-1 flex-col justify-center px-5">
                  <ol className="flex flex-col gap-1">
                    {NAV_LINKS.map((l, i) => (
                      <li key={l.href} className="drawer-row">
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline gap-4 py-2 transition-colors"
                        >
                          <span className="font-display text-[11px] uppercase tracking-[0.32em] text-cream/45">
                            0{i + 1}
                          </span>
                          <span className="font-display text-[44px] leading-[1.05] tracking-tight text-cream transition-colors group-hover:text-sage">
                            {l.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="relative grid grid-cols-2 gap-3 px-5 pb-7 pt-4">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="drawer-cta group inline-flex h-14 items-center gap-3 rounded-full border border-cream/20 bg-cream/8 pl-2 pr-4 text-cream transition-all hover:bg-cream/15"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest-deep transition-transform group-hover:scale-105">
                      <WhatsappIcon className="h-[17px] w-[17px]" />
                    </span>
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="drawer-cta group inline-flex h-14 items-center gap-3 rounded-full border border-cream/20 bg-cream/8 pl-2 pr-4 text-cream transition-all hover:bg-cream/15"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest-deep transition-transform group-hover:scale-105">
                      <InstagramIcon className="h-[17px] w-[17px]" />
                    </span>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
