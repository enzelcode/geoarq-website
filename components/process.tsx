"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Ear,
  FileSearch,
  PenTool,
  Stamp,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    icon: Ear,
    tag: "01",
    title: "Escuta",
    description:
      "Entender o contexto do terreno, o programa, as expectativas e as restrições legais. Cada projeto começa por aqui — antes de qualquer traço.",
  },
  {
    icon: FileSearch,
    tag: "02",
    title: "Diagnóstico técnico",
    description:
      "Análise de viabilidade, levantamento documental e definição das premissas que vão guiar as decisões seguintes. O ponto onde técnica encontra estratégia.",
  },
  {
    icon: PenTool,
    tag: "03",
    title: "Concepção & projeto",
    description:
      "Desenvolvimento do desenho, dos detalhes técnicos e da documentação executiva. A ideia ganha forma com precisão construtiva.",
  },
  {
    icon: Stamp,
    tag: "04",
    title: "Aprovações & licenças",
    description:
      "Interlocução com Prefeitura, Bombeiros, Vigilância e demais órgãos. Deixar tudo em ordem pra obra começar sem volta atrás.",
  },
  {
    icon: HandHeart,
    tag: "05",
    title: "Acompanhamento",
    description:
      "Suporte técnico durante a execução, ajustes em obra e entrega da documentação final. Garantia de que o desenhado vira realidade fiel.",
  },
];

export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".pr-head > *", {
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

      gsap.from(".pr-step", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: stagger.base,
        ease: easing.expo,
        scrollTrigger: {
          trigger: ".pr-timeline",
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".pr-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".pr-timeline",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        ".pr-cta > *",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".pr-cta",
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".pr-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0.4, backgroundColor: "rgba(26,31,24,0.15)" },
          {
            scale: 1,
            backgroundColor: "#2F5233",
            duration: 0.4,
            ease: easing.expo,
            scrollTrigger: {
              trigger: dot,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section
      id="processo"
      ref={root}
      className="relative isolate overflow-clip bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        <div className="pr-head flex flex-wrap items-end justify-between gap-6 lg:items-baseline">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Como trabalhamos
            </span>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
              Cinco etapas,{" "}
              <span className="italic font-light text-forest">
                um método
              </span>{" "}
              que cabe no seu projeto.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stone lg:text-right">
            Da primeira conversa à última assinatura — sem etapas pulando,
            sem retrabalho.
          </p>
        </div>

        <ol className="pr-timeline relative mt-16 sm:mt-20">
          <div
            aria-hidden
            className="absolute left-[22px] top-2 bottom-2 w-px bg-ink/8 sm:left-[34px]"
          />
          <div
            aria-hidden
            className="pr-line-fill absolute left-[22px] top-2 bottom-2 w-px bg-forest sm:left-[34px]"
          />

          {STEPS.map((step) => (
            <li
              key={step.tag}
              className="pr-step relative grid grid-cols-12 gap-5 pb-12 last:pb-0 sm:gap-8 lg:gap-12"
            >
              <div className="col-span-2 flex flex-col items-start sm:col-span-3">
                <span
                  className="pr-dot relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full text-cream shadow-[0_8px_22px_-12px_rgba(47,82,51,0.5)] sm:h-[68px] sm:w-[68px]"
                  style={{ backgroundColor: "rgba(26,31,24,0.15)" }}
                >
                  <step.icon
                    size={18}
                    strokeWidth={1.6}
                    className="sm:hidden"
                  />
                  <step.icon
                    size={26}
                    strokeWidth={1.5}
                    className="hidden sm:inline-block"
                  />
                </span>
                <span className="mt-3 font-display text-sm tracking-tight text-stone sm:mt-4 sm:text-base">
                  / {step.tag}
                </span>
              </div>

              <div className="col-span-10 pt-1 sm:col-span-9 sm:pt-3">
                <h3 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl lg:text-[34px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone sm:mt-4 sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pr-cta mt-14 flex flex-col gap-6 border-t border-ink/10 pt-10 sm:mt-20 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pt-12">
          <p className="max-w-md font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
            Pronto pra começar pela{" "}
            <span className="italic font-light text-forest">primeira etapa</span>
            ?
          </p>

          <a
            href="/contato"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream shadow-[0_14px_36px_-16px_rgba(30,53,34,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_22px_50px_-20px_rgba(30,53,34,0.6)]"
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
      </div>
    </section>
  );
}
