"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PARTS: { text: string; highlight?: boolean; breakBefore?: boolean }[] = [
  { text: "Conte" },
  { text: "sobre" },
  { text: "seu", highlight: true },
  { text: "projeto.", highlight: true },
  { text: "A", breakBefore: true },
  { text: "gente" },
  { text: "escuta", highlight: true },
  { text: "primeiro.", highlight: true },
];

export function CtaFinal() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-eyebrow", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: easing.expo,
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });

      gsap.fromTo(
        ".cta-word",
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".cta-headline",
            start: "top 70%",
            end: "bottom 65%",
            scrub: 0.8,
          },
        }
      );

      gsap.fromTo(
        ".cta-button",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".cta-button",
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
      id="contato"
      ref={root}
      className="relative isolate overflow-hidden bg-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="cta-eyebrow">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Próximo passo
          </span>
        </div>

        <h2 className="cta-headline mt-10 max-w-4xl font-display text-[clamp(32px,5vw,72px)] leading-[1.15] tracking-[-0.015em] text-ink sm:mt-14">
          {PARTS.map((p, i) => (
            <span key={i}>
              {p.breakBefore && <br />}
              <span
                className={
                  p.highlight
                    ? "cta-word italic font-light text-forest"
                    : "cta-word"
                }
              >
                {p.text}
              </span>
              {i < PARTS.length - 1 && " "}
            </span>
          ))}
        </h2>

        <a
          href="/contato"
          className="cta-button group mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream shadow-[0_14px_36px_-16px_rgba(30,53,34,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_22px_50px_-20px_rgba(30,53,34,0.6)] sm:mt-14"
        >
          <span className="text-sm font-medium tracking-tight">
            Entre em contato
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
    </section>
  );
}
