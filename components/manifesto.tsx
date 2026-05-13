"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PARTS: { text: string; highlight?: boolean }[] = [
  { text: "Cada" },
  { text: "terreno" },
  { text: "guarda" },
  { text: "um", highlight: true },
  { text: "caminho.", highlight: true },
  { text: "A" },
  { text: "gente" },
  { text: "desenha" },
  { text: "a" },
  { text: "forma", highlight: true },
  { text: "—" },
  { text: "e" },
  { text: "o" },
  { text: "caminho", highlight: true },
  { text: "legal", highlight: true },
  { text: "pra" },
  { text: "chegar" },
  { text: "nela." },
];

export function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".mf-eyebrow", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: easing.expo,
        scrollTrigger: {
          trigger: root.current,
          start: "top 82%",
        },
      });
      gsap.fromTo(
        ".mf-word",
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".mf-headline",
            start: "top 70%",
            end: "bottom 65%",
            scrub: 0.8,
          },
        }
      );

      gsap.fromTo(
        ".mf-tail > *",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".mf-tail",
            start: "top 95%",
            once: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      id="manifesto"
      ref={root}
      className="relative isolate overflow-hidden bg-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mf-eyebrow">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Manifesto
          </span>
        </div>

        <h2 className="mf-headline mt-10 max-w-4xl font-display text-[clamp(32px,5vw,72px)] leading-[1.15] tracking-[-0.015em] text-ink sm:mt-14">
          {PARTS.map((p, i) => (
            <span
              key={i}
              className={
                p.highlight
                  ? "mf-word italic font-light text-forest"
                  : "mf-word"
              }
            >
              {p.text}
              {i < PARTS.length - 1 && " "}
            </span>
          ))}
        </h2>

        <div className="mf-tail mt-14 flex flex-col gap-10 sm:mt-20 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <p className="max-w-md text-base leading-relaxed text-stone sm:text-lg">
            Um estúdio que une arquitetura, urbanismo, paisagismo e
            regularização imobiliária sob o mesmo olhar técnico — porque
            espaço bem desenhado anda lado a lado com o caminho legal pra
            existir.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream shadow-[0_14px_36px_-16px_rgba(30,53,34,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_22px_50px_-20px_rgba(30,53,34,0.6)]"
          >
            <span className="text-sm font-medium tracking-tight">
              Vamos conversar
            </span>
            <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-cream text-forest-deep">
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-8 group-hover:translate-x-8"
              />
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="absolute -translate-x-8 translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
