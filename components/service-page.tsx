"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { WhatsappIcon } from "./brand-icons";
import { whatsappLink } from "@/lib/site";
import { getService, type Service } from "@/lib/services";
import { easing, stagger } from "@/lib/design";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ServicePage({ slug }: { slug: string }) {
  const root = useRef<HTMLElement>(null);
  const service = getService(slug) as Service;

  useGSAP(
    () => {
      gsap.from(".sp-hero > *", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: stagger.base,
        ease: easing.expo,
        delay: 0.1,
      });

      gsap.from(".sp-image", {
        scale: 1.06,
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.from(".sp-section-head > *", {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: stagger.base,
        ease: easing.expo,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
        },
      });

      gsap.fromTo(
        ".sp-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".sp-when",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".sp-step",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".sp-how",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".sp-faq-item",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: stagger.base,
          ease: easing.expo,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".sp-faq",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: root }
  );

  const Icon = service.icon;
  const relatedServices = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <section ref={root} className="relative">
      {/* HERO */}
      <div className="relative isolate overflow-hidden bg-cream px-6 pt-32 pb-16 sm:px-10 sm:pt-44 sm:pb-24 lg:px-16 lg:pt-48">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="sp-hero lg:col-span-7">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-stone transition-colors hover:text-forest"
            >
              ← Todos os serviços
            </Link>

            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft text-forest">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone">
                {service.tag} · {service.eyebrow}
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl font-display text-[clamp(32px,5vw,72px)] leading-[1.05] tracking-[-0.015em] text-ink">
              {service.title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
              {service.heroDescription}
            </p>

            <a
              href={whatsappLink(
                `Olá! Tenho interesse em ${service.title.toLowerCase()}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream shadow-[0_14px_36px_-16px_rgba(30,53,34,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
            >
              <span className="text-sm font-medium tracking-tight">
                Falar sobre {service.eyebrow.toLowerCase()}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest-deep transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="sp-image relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_70px_-30px_rgba(26,31,24,0.25)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* QUANDO VOCÊ PRECISA */}
      <div className="sp-when relative bg-cream-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
        />
        <div className="mx-auto max-w-6xl">
          <div className="sp-section-head">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Quando você precisa
            </span>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
              Situações que pedem{" "}
              <span className="italic font-light text-forest">essa frente</span>
              .
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2">
            {service.whenYouNeed.map((s, i) => (
              <article
                key={s.title}
                className="sp-card group rounded-[24px] border border-ink/8 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(26,31,24,0.15)] transition-all duration-500 hover:-translate-y-0.5 hover:border-forest/30 sm:p-8"
              >
                <span className="font-display text-xs text-stone-soft">
                  /0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight tracking-tight text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* O QUE ENTREGAMOS */}
      <div className="relative bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="sp-section-head grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                O que entregamos
              </span>
              <h2 className="mt-6 font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
                Itens dessa{" "}
                <span className="italic font-light text-forest">frente</span>.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone lg:col-span-5 lg:text-right">
              Cada projeto recebe o que faz sentido pro caso — sem pacote
              fechado, sem item supérfluo.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2">
            {service.items.map((item, i) => (
              <li
                key={item}
                className="group flex items-start gap-4 rounded-2xl border border-ink/8 bg-cream/30 p-5 transition-colors hover:border-forest/30 hover:bg-cream/60"
              >
                <span className="font-display text-xs text-forest">
                  /0{i + 1}
                </span>
                <span className="text-sm leading-snug text-ink sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className="sp-how relative bg-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="sp-section-head">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Como funciona
            </span>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
              Etapas dessa{" "}
              <span className="italic font-light text-forest">frente</span>.
            </h2>
          </div>

          <ol className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {service.howItWorks.map((s) => (
              <li
                key={s.step}
                className="sp-step relative overflow-hidden rounded-[24px] border border-ink/8 bg-white p-7"
              >
                <span className="font-display text-4xl text-forest">
                  {s.step}
                </span>
                <h3 className="mt-5 font-display text-xl leading-tight tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* FAQ */}
      <div className="sp-faq relative bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="sp-section-head grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                Dúvidas frequentes
              </span>
              <h2 className="mt-6 font-display text-[clamp(28px,3.6vw,52px)] leading-[1.08] tracking-tight text-ink">
                Perguntas que{" "}
                <span className="italic font-light text-forest">
                  chegam toda hora
                </span>
                .
              </h2>
            </div>

            <Accordion.Root
              type="single"
              collapsible
              defaultValue="0"
              className="lg:col-span-7"
            >
              {service.faq.map((q, i) => (
                <Accordion.Item
                  key={i}
                  value={String(i)}
                  className="sp-faq-item group border-b border-ink/10 last:border-b-0"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full cursor-pointer items-center gap-4 py-5 text-left transition-colors">
                      <span className="font-display text-xs text-stone">
                        /0{i + 1}
                      </span>
                      <span className="flex-1 font-display text-lg leading-tight tracking-tight text-ink sm:text-xl">
                        {q.question}
                      </span>
                      <Plus
                        size={18}
                        strokeWidth={1.6}
                        className="shrink-0 text-stone transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-forest"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-stone data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-5 pl-10 pr-4 leading-relaxed">
                      {q.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>

      {/* RELATED + CTA */}
      <div className="relative bg-forest-deep px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-moss/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-sand/12 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-cream/75 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                Próximo passo
              </span>
              <h2 className="mt-6 max-w-3xl font-display text-[clamp(32px,5vw,72px)] leading-[1.05] tracking-[-0.015em] text-cream">
                Conte sobre{" "}
                <span className="italic font-light text-sage">
                  seu caso
                </span>
                .
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
                Análise inicial sem compromisso — em uma conversa direta com
                a equipe técnica.
              </p>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-cream py-1.5 pl-6 pr-1.5 text-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-sm font-medium tracking-tight">
                    Entre em contato
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest-deep text-cream transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </Link>
                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse em ${service.title.toLowerCase()}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/5 py-1.5 pl-6 pr-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/15"
                >
                  <span className="text-sm font-medium tracking-tight">
                    WhatsApp
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-cream">
                    <WhatsappIcon className="h-[16px] w-[16px]" />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.32em] text-cream/55">
                Outras frentes
              </span>
              <ul className="mt-5 space-y-2">
                {relatedServices.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/servicos/${r.slug}`}
                      className={cn(
                        "group flex items-center justify-between gap-4 rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 transition-all hover:border-cream/35 hover:bg-cream/10"
                      )}
                    >
                      <span>
                        <span className="font-display text-xs text-cream/55">
                          /{r.tag}
                        </span>
                        <span className="ml-3 font-display text-base text-cream sm:text-lg">
                          {r.title}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                        className="shrink-0 text-cream/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sage"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
