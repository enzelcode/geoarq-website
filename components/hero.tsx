"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HEADLINES: { words: { text: string; highlight?: boolean }[] }[] = [
  {
    words: [
      { text: "Projetar", highlight: true },
      { text: "o" },
      { text: "espaço." },
    ],
  },
  {
    words: [
      { text: "Regularizar", highlight: true },
      { text: "o" },
      { text: "caminho." },
    ],
  },
];

const MARQUEE_ITEMS = [
  { label: "Regularização Imobiliária", href: "/servicos/regularizacao" },
  { label: "Aprovações & Alvarás", href: "/servicos/aprovacoes" },
  { label: "Estudos Técnicos & Viabilidade", href: "/servicos/estudos" },
  { label: "Vistorias & Documentação", href: "/servicos/vistorias" },
  { label: "Projetos & Paisagismo", href: "/servicos/projetos" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const safari =
      /^((?!chrome|android).)*safari/i.test(ua) &&
      !/(crios|fxios|edgios|opios)/i.test(ua);
    setIsSafari(safari);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: easing.expo },
        delay: 0.2,
      });

      tl.from(".hero-frame", {
        scale: 1.15,
        duration: 2,
        ease: "power2.out",
      })
        .from(
          ".hero-word",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: stagger.tight,
            skewY: 4,
          },
          "-=1.3"
        )
        .from(
          ".hero-sub",
          { y: 22, opacity: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.5"
        )
        .from(
          ".hero-marquee",
          { y: 18, opacity: 0, duration: 0.7 },
          "-=0.4"
        );

      gsap.to(".hero-frame", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -8,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(".hero-marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    },
    { scope: root }
  );

  return (
    <section
      id="inicio"
      ref={root}
      className="relative isolate flex w-full flex-col overflow-hidden bg-forest-deep min-h-[680px] sm:h-screen sm:min-h-[720px]"
    >
      <div className="hero-frame absolute inset-0">
        {isSafari ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/hero.webp"
            alt="Maquete arquitetônica sobre planta"
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/55 via-forest-deep/35 to-forest-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/65 via-forest-deep/15 to-transparent" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-6 pb-10 pt-32 sm:px-10 sm:pb-8 sm:pt-32 lg:px-16 lg:pt-36">
        <div className="max-w-5xl mt-10 sm:mt-0 sm:flex sm:flex-1 sm:min-h-0 sm:flex-col sm:justify-center">
          <h1 className="font-display text-cream tracking-tight">
            {HEADLINES.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.12em] text-[clamp(44px,7.4vw,108px)] leading-[1.04]"
              >
                {line.words.map((word, j) => (
                  <span
                    key={j}
                    className={
                      word.highlight
                        ? "hero-word inline-block italic font-light text-sage pr-[0.16em] [text-shadow:0_8px_40px_rgba(47,82,51,0.55),0_2px_18px_rgba(20,30,18,0.6)]"
                        : "hero-word inline-block pr-[0.16em]"
                    }
                  >
                    {word.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg">
            Da concepção à conformidade: arquitetura, urbanismo, paisagismo e
            regularização imobiliária com domínio técnico e olhar autoral.
          </p>

          <a
            href="#servicos"
            className="hero-cta group mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-cream/25 bg-cream/10 py-1.5 pl-6 pr-1.5 text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/45 hover:bg-cream/20 sm:mt-8"
          >
            <span className="text-sm font-medium tracking-tight">
              Conheça nossos serviços
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest-deep transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
        </div>

        <div className="hero-marquee mt-auto pt-12 sm:pt-6">
          <div className="overflow-hidden border-t border-cream/15 py-5">
            <div className="hero-marquee-track inline-flex w-max items-center gap-10 whitespace-nowrap">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.32em] text-cream/65 transition-colors duration-300 hover:text-cream"
                >
                  <span className="inline-block h-1 w-1 rounded-full bg-cream/35 transition-colors group-hover:bg-sage" />
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
