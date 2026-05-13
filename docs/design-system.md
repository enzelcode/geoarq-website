# GeoArq — Design System

Sistema visual e de movimento do site institucional. Baseado em referências de estúdios premiados (Awwwards, Siiimple) adaptado pra identidade de arquitetura/urbanismo da GeoArq.

## Princípios

1. **Editorial, não corporativo** — hierarquia tipográfica como narrativa; espaços brancos generosos.
2. **Movimento com propósito** — toda animação serve o conteúdo (revelar, hierarquizar, conduzir). Easing `expo.out` como assinatura.
3. **Cinematografia no hero** — vídeo silencioso em loop como abertura imersiva.
4. **Materialidade verde** — paleta derivada da logo; verde profundo + creme + clay como acento quente.
5. **Microinteração silenciosa** — hovers sutis, magnetic feel, scroll smooth via Lenis.

## Cores (tokens em `globals.css`)

| Token | Hex | Uso |
|---|---|---|
| `forest` | `#2F5233` | Primário (logo, links, ícones) |
| `forest-deep` | `#1E3522` | Backgrounds escuros, hover |
| `moss` | `#738D5C` | Médio, accents |
| `sage` | `#B5C5A1` | Soft, hover de itálicos |
| `sage-soft` | `#E3EAD6` | Backgrounds suaves |
| `cream` | `#FAF7F0` | Fundo principal |
| `sand` | `#D4B896` | Decor sutil |
| `clay` | `#B5734A` | CTA quente (raro) |
| `ink` | `#1A1F18` | Texto principal |
| `stone` | `#6B7064` | Texto secundário |

## Tipografia

- **Display** — `Fraunces` (variable). Serifa contemporânea com `opsz` ajustado. Tracking tight (-0.02em).
- **Sans** — `Inter`. Pesos 400/500/600 para body, eyebrow e UI.
- **Escala display** (clamp recomendado): `text-5xl` (mobile) → `text-[88px]` (desktop). Leading `0.95`.
- **Eyebrow** — uppercase, `text-[11px]`, tracking `0.32em`, cor `stone`.

## Motion (tokens em `lib/design.ts`)

```ts
duration = { micro 0.25, fast 0.45, base 0.7, slow 1.1, epic 1.6 }
easing   = { out: power3.out, expo: expo.out, back: back.out(1.6) }
stagger  = { tight 0.04, base 0.08, loose 0.14 }
```

Regras:
- Entry de seção: `from y:60, opacity:0`, dur `slow`, ease `expo`, stagger `base`.
- Hover: dur `micro–fast`, transição em CSS quando possível.
- Hero reveal: timeline única (eyebrow → headlines linha-a-linha → sub → CTAs → meta).
- Scroll trigger: `start: "top 75%"` por padrão.

## Componentes

- `Button` (`components/ui/button.tsx`) — variantes `primary` (forest), `clay`, `outline`, `ghost`, `white`. Sizes `sm/default/lg/icon`. Sempre `rounded-full`.
- `Logo` — `<Image>` real, prop `height` (default 36), `variant: "default"|"light"` para fundo escuro.
- `Navbar` — comportamento morph: clean ampla → compacta verde ao scroll.
- `brand-icons` — SVGs oficiais Instagram / WhatsApp.

## Movimento global

- **Lenis** smooth scroll (`components/smooth-scroll.tsx`), `lerp 0.1`.
- **GSAP** com `useGSAP({ scope })` para cleanup auto.
- **ScrollTrigger** registrado por componente que consome.
- Preferência: animação em `transform` e `opacity` (60fps garantido).

## Referências

- [Made With GSAP](https://madewithgsap.com/) — coleção curada de GSAP-powered sites.
- [Awwwards GSAP](https://www.awwwards.com/websites/gsap/) — sites premiados.
- [Siiimple — architecture](https://siiimple.com/category/architecture/) — minimalismo editorial.
