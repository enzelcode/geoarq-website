"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, type Service } from "@/lib/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ServicesPinned() {
  const root = useRef<HTMLElement>(null);
  const pinTarget = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useGSAP(
    () => {
      const isLg =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 1024px)").matches;
      if (!isLg) return;

      const total = SERVICES.length;
      const trigger = ScrollTrigger.create({
        trigger: pinTarget.current,
        pin: true,
        pinSpacing: true,
        start: "top top+=140",
        end: () => `+=${(total - 1) * window.innerHeight}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(
            total - 1,
            Math.floor(self.progress * total * 0.9999)
          );
          if (idx !== activeRef.current) {
            activeRef.current = idx;
            setActive(idx);
          }
        },
      });

      gsap.from(".srv-eyebrow > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: root }
  );

  return (
    <section
      id="servicos"
      ref={root}
      className="relative isolate overflow-clip bg-cream-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />

      <div className="w-full">
        <div className="mx-auto w-full max-w-6xl">
          <div className="srv-eyebrow flex flex-wrap items-end justify-between gap-6 lg:items-baseline">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                Serviços
              </span>
              <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
                Um único cuidado técnico,{" "}
                <span className="italic font-light text-forest">
                  cinco frentes
                </span>{" "}
                complementares.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-stone lg:text-right">
              Da viabilidade à conformidade, da regularização ao projeto.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-5 lg:hidden">
            {SERVICES.map((s, i) => (
              <MobileCard
                key={s.slug}
                service={s}
                index={i}
                total={SERVICES.length}
              />
            ))}
          </div>

          <div
            ref={pinTarget}
            className="mt-16 hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:bg-cream-dark"
          >
            <ul className="flex flex-col lg:col-span-5">
              {SERVICES.map((s, i) => (
                <li key={s.slug}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full cursor-pointer items-center gap-5 border-b border-ink/10 py-4 text-left transition-colors duration-300 last:border-b-0 hover:[&_.srv-tab-num]:text-forest hover:[&_.srv-tab-title]:text-ink hover:[&_.srv-tab-arrow]:translate-x-0 hover:[&_.srv-tab-arrow]:opacity-100 hover:[&_.srv-tab-arrow]:text-forest"
                  >
                    <span
                      className={cn(
                        "srv-tab-num font-display text-sm tracking-tight transition-colors duration-500",
                        active === i ? "text-forest" : "text-ink/30"
                      )}
                    >
                      {s.tag}
                    </span>
                    <span
                      className={cn(
                        "srv-tab-title flex-1 font-display text-lg leading-tight tracking-tight transition-colors duration-500 sm:text-xl",
                        active === i ? "text-ink" : "text-ink/30"
                      )}
                    >
                      {s.title}
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className={cn(
                        "srv-tab-arrow shrink-0 transition-all duration-500",
                        active === i
                          ? "text-forest opacity-100 translate-x-0"
                          : "text-ink/20 opacity-0 -translate-x-2"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="relative lg:col-span-7 lg:min-h-[520px]">
              {SERVICES.map((s, i) => (
                <Card
                  key={s.slug}
                  service={s}
                  index={i}
                  active={active}
                  total={SERVICES.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCard({
  service,
  total,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  const Icon = service.icon;
  return (
    <article className="overflow-hidden rounded-[24px] border border-ink/8 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(26,31,24,0.18)] sm:p-9">
      <div className="flex items-start justify-between gap-6">
        <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-sage-soft text-forest">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <span className="font-display text-xs text-stone-soft">
          /{service.tag} — {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-7">
        <span className="text-[11px] uppercase tracking-[0.32em] text-stone">
          {service.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          {service.description}
        </p>
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-2">
        {service.items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2 text-[13px] text-stone"
          >
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-forest" />
            {it}
          </li>
        ))}
      </ul>

      <Link
        href={`/servicos/${service.slug}`}
        className="group mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-forest-deep py-1.5 pl-5 pr-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
      >
        <span className="text-sm font-medium tracking-tight">
          Conhecer detalhes
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest-deep">
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </span>
      </Link>
    </article>
  );
}

function Card({
  service,
  index,
  active,
  total,
}: {
  service: Service;
  index: number;
  active: number;
  total: number;
}) {
  const Icon = service.icon;
  const delta = index - active;

  let style: React.CSSProperties;
  if (delta === 0) {
    style = { opacity: 1, transform: "translate(0, 0) scale(1)", zIndex: 30 };
  } else if (delta === 1) {
    style = {
      opacity: 0.5,
      transform: "translate(18px, 14px) scale(0.97)",
      zIndex: 20,
    };
  } else if (delta === 2) {
    style = {
      opacity: 0.22,
      transform: "translate(36px, 28px) scale(0.94)",
      zIndex: 10,
    };
  } else if (delta < 0) {
    style = {
      opacity: 0,
      transform: "translate(-32px, -20px) scale(1.02)",
      zIndex: 0,
      pointerEvents: "none",
    };
  } else {
    style = {
      opacity: 0,
      transform: "translate(50px, 50px) scale(0.9)",
      zIndex: 0,
      pointerEvents: "none",
    };
  }

  return (
    <article
      className="absolute inset-0 flex flex-col overflow-hidden rounded-[24px] border border-ink/8 bg-white px-7 pb-9 pt-7 shadow-[0_24px_60px_-30px_rgba(26,31,24,0.18)] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:pb-11 sm:pt-9"
      style={style}
      aria-hidden={index !== active}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft text-forest">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <span className="font-display text-xs text-stone-soft">
          /{service.tag} — {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-8">
        <span className="text-[11px] uppercase tracking-[0.32em] text-stone">
          {service.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl leading-[1.1] tracking-tight text-ink sm:text-[28px]">
          {service.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
          {service.description}
        </p>
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {service.items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2 text-[13px] text-stone"
          >
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-forest" />
            {it}
          </li>
        ))}
      </ul>

      <Link
        href={`/servicos/${service.slug}`}
        className="group mt-7 inline-flex w-fit items-center gap-3 self-start rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
      >
        <span className="text-sm font-medium tracking-tight">
          Conhecer detalhes
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
      </Link>
    </article>
  );
}
