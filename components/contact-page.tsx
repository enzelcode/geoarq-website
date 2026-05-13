"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, X } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "./brand-icons";
import { SITE, whatsappLink } from "@/lib/site";
import { easing, stagger } from "@/lib/design";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PROJECT_TYPES = [
  "Regularização imobiliária",
  "Aprovações & alvarás",
  "Estudos técnicos / Viabilidade",
  "Vistorias & documentação",
  "Projetos & paisagismo",
  "Outro",
];

export function ContactPage() {
  const root = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: PROJECT_TYPES[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      gsap.from(".ct-head > *", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: stagger.base,
        ease: easing.expo,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });

      gsap.from(".ct-card", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: easing.expo,
        scrollTrigger: {
          trigger: ".ct-grid",
          start: "top 85%",
        },
      });
      gsap.from(".ct-side > *", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: stagger.base,
        ease: easing.expo,
        scrollTrigger: {
          trigger: ".ct-grid",
          start: "top 80%",
        },
      });
    },
    { scope: root }
  );

  function buildWhatsappMessage() {
    const parts = [
      "Olá! Vim pelo site da GeoArq.",
      form.name && `Nome: ${form.name}`,
      form.email && `E-mail: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      form.type && `Frente de interesse: ${form.type}`,
      form.message && `Mensagem: ${form.message}`,
    ].filter(Boolean);
    return parts.join("\n");
  }

  function buildMailto() {
    const subject = encodeURIComponent(
      `Contato pelo site — ${form.type || "interesse geral"}`
    );
    const body = encodeURIComponent(buildWhatsappMessage());
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: trocar mailto por chamada à rota /api/contato quando o serviço
    // de envio (Resend) estiver configurado.
    window.location.href = buildMailto();
    setSent(true);
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      phone: "",
      type: PROJECT_TYPES[0],
      message: "",
    });
    setSent(false);
  }

  return (
    <section
      id="contato"
      ref={root}
      className="relative isolate overflow-hidden bg-cream px-6 pt-32 pb-20 sm:px-10 sm:pt-44 sm:pb-28 lg:px-16 lg:pt-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[460px] w-[460px] rounded-full bg-sage/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-sand/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="ct-head">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Contato
          </span>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(32px,5vw,72px)] leading-[1.12] tracking-[-0.015em] text-ink sm:mt-10">
            Conte sobre{" "}
            <span className="italic font-light text-forest">seu projeto</span>.
            <br />A gente{" "}
            <span className="italic font-light text-forest">escuta primeiro</span>
            .
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            Pode ser uma dúvida rápida, um terreno em análise ou um projeto
            inteiro. Toda conversa começa por aqui — sem briefing complicado,
            sem compromisso na primeira troca.
          </p>
        </div>

        <div className="ct-grid mt-14 grid gap-10 sm:mt-20 lg:grid-cols-12 lg:gap-12">
          <form
            onSubmit={onSubmit}
            className="ct-card lg:col-span-7 rounded-[28px] border border-ink/8 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(26,31,24,0.15)] sm:p-10"
          >
            <div className="text-[11px] uppercase tracking-[0.32em] text-stone">
              Formulário
            </div>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
              Escreva pra gente
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field
                label="Nome"
                name="name"
                value={form.name}
                onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                required
                placeholder="Como devemos te chamar?"
              />
              <Field
                label="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                required
                placeholder="voce@email.com"
              />
              <Field
                label="Telefone"
                name="phone"
                value={form.phone}
                onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                placeholder="(11) 9 0000-0000"
              />
              <SelectField
                label="Frente de interesse"
                name="type"
                value={form.type}
                onChange={(v) => setForm((s) => ({ ...s, type: v }))}
                options={PROJECT_TYPES}
              />
            </div>

            <TextareaField
              label="Sobre o projeto"
              name="message"
              value={form.message}
              onChange={(v) => setForm((s) => ({ ...s, message: v }))}
              placeholder="Localização, área aproximada, prazo, referências…"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-forest-deep py-1.5 pl-6 pr-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest sm:w-auto"
              >
                <span className="text-sm font-medium tracking-tight">
                  Enviar mensagem
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest-deep transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>
              </button>

              <a
                href={whatsappLink(buildWhatsappMessage())}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-ink/10 bg-cream/40 py-1.5 pl-6 pr-1.5 text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:bg-cream/70 sm:w-auto"
              >
                <span className="text-sm font-medium tracking-tight">
                  Ou pelo WhatsApp
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream transition-transform duration-300 group-hover:scale-105">
                  <WhatsappIcon className="h-[16px] w-[16px]" />
                </span>
              </a>
            </div>

            <p className="mt-5 text-xs text-stone">
              Suas informações ficam só com a equipe da GeoArq. Sem spam,
              sem mailing.
            </p>
          </form>

          <aside className="ct-side flex flex-col gap-5 lg:col-span-5">
            <div className="relative h-64 overflow-hidden rounded-[28px] sm:h-72 lg:h-80">
              <Image
                src="/contact-house.webp"
                alt="Casa de arquitetura moderna em madeira e pedra"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
              <div className="absolute inset-x-6 bottom-6 text-cream [text-shadow:0_2px_18px_rgba(0,0,0,0.4)]">
                <div className="text-[11px] uppercase tracking-[0.32em] text-cream/85">
                  Projetar · Regularizar
                </div>
                <p className="mt-2 font-display text-xl leading-tight sm:text-2xl">
                  O caminho começa por uma conversa.
                </p>
              </div>
            </div>

            <Card>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone">
                Canais diretos
              </span>
              <ul className="mt-5 space-y-4 text-sm">
                <ContactRow
                  icon={<WhatsappIcon className="h-[15px] w-[15px]" />}
                  label="WhatsApp"
                  value={SITE.phoneDisplay}
                  href={whatsappLink()}
                />
                <ContactRow
                  icon={<InstagramIcon className="h-[15px] w-[15px]" />}
                  label="Instagram"
                  value={`@${SITE.instagramHandle}`}
                  href={SITE.instagramUrl}
                />
                <ContactRow
                  icon={<Mail size={15} strokeWidth={1.7} />}
                  label="E-mail"
                  value={SITE.email}
                  href={`mailto:${SITE.email}`}
                />
              </ul>
            </Card>

            <Card>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone">
                Atendimento
              </span>
              <div className="mt-4 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-soft text-forest">
                  <MapPin size={14} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="font-display text-base leading-tight text-ink">
                    São Paulo e região
                  </p>
                  <p className="mt-1 text-sm text-stone">
                    Atendimento presencial e remoto.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>

      <Dialog.Root open={sent} onOpenChange={setSent}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/55 backdrop-blur-md duration-400 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] w-[calc(100vw-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-ink/8 bg-cream p-7 text-ink shadow-[0_40px_100px_-30px_rgba(26,31,24,0.35)] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-bottom-4 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom-4 sm:p-10">
            <Dialog.Close asChild>
              <button
                aria-label="Fechar"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X size={16} strokeWidth={1.6} />
              </button>
            </Dialog.Close>

            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft text-forest">
              <CheckCircle2 size={26} strokeWidth={1.6} />
            </div>

            <Dialog.Title className="mt-6 font-display text-2xl leading-tight tracking-tight text-ink sm:text-[28px]">
              Obrigado pelo contato.
            </Dialog.Title>
            <Dialog.Description asChild>
              <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
                Recebemos sua mensagem e em breve a gente retorna. Se for
                algo urgente, pode falar com a gente pelo WhatsApp.
              </p>
            </Dialog.Description>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(buildWhatsappMessage())}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-1 items-center justify-between gap-3 rounded-full bg-forest-deep py-1.5 pl-5 pr-1.5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
              >
                <span className="text-sm font-medium tracking-tight">
                  Continuar pelo WhatsApp
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest-deep">
                  <WhatsappIcon className="h-[15px] w-[15px]" />
                </span>
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="cursor-pointer rounded-full border border-ink/10 px-5 py-3 text-sm font-medium text-ink/80 transition-colors hover:border-ink/25 hover:text-ink"
              >
                Fechar
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-ink/8 bg-white/85 p-6 shadow-[0_18px_50px_-30px_rgba(26,31,24,0.15)] backdrop-blur sm:p-7">
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center gap-3"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream transition-transform group-hover:scale-105">
          {icon}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.28em] text-stone">
            {label}
          </span>
          <span className="text-sm font-medium text-ink transition-colors group-hover:text-forest">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}

const FIELD_BASE =
  "block w-full rounded-2xl border border-ink/10 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-stone-soft transition-colors focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/20";

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.28em] text-stone">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`mt-2 ${FIELD_BASE}`}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.28em] text-stone">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22 fill=%22none%22 stroke=%22%231a1f18%22 stroke-width=%221.5%22><path d=%22M2 4 l4 4 l4 -4%22/></svg>')] bg-[length:12px_12px] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${FIELD_BASE}`}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="mt-5 block">
      <span className="text-[10px] uppercase tracking-[0.28em] text-stone">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 resize-none ${FIELD_BASE}`}
      />
    </label>
  );
}
