"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Layers, Compass, ShieldCheck } from "lucide-react";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ITEMS = [
  {
    icon: Users,
    title: "Atendimento autoral",
    description:
      "Você fala direto com os arquitetos titulares em todas as fases. Sem intermediário, sem briefing repetido.",
  },
  {
    icon: Layers,
    title: "Visão integrada",
    description:
      "Arquitetura, urbanismo, paisagismo e regularização sob o mesmo olhar técnico — uma só conversa, todos os campos.",
  },
  {
    icon: Compass,
    title: "Profundidade técnica",
    description:
      "Domínio dos processos legais, normativos e construtivos — o desenho nasce já compatível com a aprovação.",
  },
  {
    icon: ShieldCheck,
    title: "Documentação completa",
    description:
      "Cada entrega vem com toda a documentação técnica organizada. Segurança jurídica pro próximo passo.",
  },
];

export function Commitments() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cm-head > *", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: stagger.base,
        ease: easing.expo,
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".cm-card",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".cm-grid",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      id="diferenciais"
      ref={root}
      className="relative isolate overflow-clip bg-forest-deep px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-moss/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-sand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="cm-head flex flex-wrap items-end justify-between gap-6 lg:items-baseline">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-cream/75 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Diferenciais
            </span>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-cream">
              O que muda quando o{" "}
              <span className="italic font-light text-sage">mesmo time</span>{" "}
              cuida de tudo.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/70 lg:text-right">
            Quatro pontos que se veem no resultado — não só no contrato.
          </p>
        </div>

        <div className="cm-grid mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="cm-card group relative overflow-hidden rounded-[24px] border border-cream/12 bg-cream/[0.04] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-cream/25 hover:bg-cream/[0.07] sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 text-sage">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-display text-xs text-cream/40">
                  /0{i + 1}
                </span>
              </div>

              <h3 className="mt-10 font-display text-2xl leading-tight tracking-tight sm:text-[26px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
