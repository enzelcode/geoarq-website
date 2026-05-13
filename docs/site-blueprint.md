# GeoArq — Blueprint do Site Institucional

## Contexto estratégico

GeoArq é um escritório **novo**: ainda não tem portfólio publicado, depoimentos de clientes ou números de "X projetos entregues" pra exibir. Toda decisão de copy e design parte daí.

**O que substitui o que falta:**

| Falta | Substituímos por |
|---|---|
| Vitrine de cases | Profundidade do **processo** e clareza dos **entregáveis** |
| Depoimentos / testimonials | **Compromissos explícitos** ("Resposta em 48h", "Atendimento direto com os sócios") |
| Números de "projetos entregues" | **Frentes técnicas (5)**, área de atuação, tempo individual da equipe |
| Logos de clientes | **Credenciais** (CAU/CREA, registros profissionais), **órgãos onde atuamos** (Prefeitura, Bombeiros, VS) |
| Galeria fotográfica | **Diagramas autorais**, esquemas de processo, renders conceituais, planta como pano de fundo |

Tom: confiante, técnico, sem precisar fingir tamanho. Editorial > corporativo.

---

## Arquitetura de páginas

```
/                                Home
/servicos                        Hub das 5 frentes
/servicos/regularizacao          Regularização Imobiliária
/servicos/aprovacoes             Aprovações & Alvarás
/servicos/estudos                Estudos Técnicos & Viabilidade
/servicos/vistorias              Vistorias & Documentação
/servicos/projetos               Projetos & Paisagismo
/sobre                           Sobre + processo + valores
/contato                         Form + canais + FAQ comercial
```

---

## HOME (adaptada)

Ordem narrativa: **abrir → declarar → mostrar o que fazemos → como fazemos → quem somos → convidar.**

### 1. Hero
✅ Já existe — vídeo (animado WebP), título editorial, CTA "Conheça nossa história", marquee de serviços.

### 2. Manifesto
Frase grande editorial sobre fundo cream, **estilo página de revista**.
- Headline gigante (clamp 56–104px) em `font-display`
- Subheadline curto (1 frase)
- Sutil parallax do título no scroll

> **Proposta de copy:** *"Cada terreno guarda um caminho. A gente desenha a forma — e o caminho legal pra chegar nela."*

### 3. Serviços imersivos *(seção destaque, "fora do comum")*
**Não cards. Scroll horizontal pinned ou stack reveal.**

Opção A — **Scroll horizontal pinned** (recomendado):
- A seção fica "presa" enquanto o usuário scrolla
- 5 painéis full-screen passam horizontalmente, um pra cada frente
- Cada painel: número grande `01/05`, título da frente, 2-3 linhas descritivas, lista breve de entregáveis, CTA `Conhecer →` que leva pra `/servicos/[slug]`
- Background da painel: cor diferente (forest, sage-soft, ink, cream...) — varia a temperatura
- Asset visual: ícone grande linear OU diagrama autoral (sem precisar de foto)

Opção B — **Stack cards verticais 3D** (alternativa):
- Cards se empilham com scroll, último em cima ganha foco
- Cada card é um serviço

Pro escritório novo: opção A entrega "estúdio premium" sem depender de imagens reais.

### 4. Como trabalhamos *(processo — peso forte aqui)*
Substituto natural pro portfólio. Mostra que tem método.

**Layout:** timeline vertical com linha SVG dotted animada (desenha conforme scroll), 5–6 etapas, número grande em cada parada, texto curto à direita.

**Etapas sugeridas:**
1. **Escuta** — entender o contexto, terreno, programa, restrições legais
2. **Diagnóstico técnico** — viabilidade, levantamento documental, premissas
3. **Estudo / Projeto** — concepção e desenvolvimento
4. **Aprovações** — interlocução com órgãos competentes
5. **Documentação / Acompanhamento** — entrega técnica e suporte na execução
6. **Pós-entrega** — garantia de conformidade

### 5. Frentes de atuação *(antiga "expertise")*
Não como cards do menu — como **bloco texto-imagem editorial**, tipo página de portfólio onde mostra a profundidade técnica.
- Tipografia editorial, links discretos pras 5 páginas
- Pode ser um mosaico de tags técnicas: "EVTL", "Usucapião", "CLCB", "EIV", "Masterplan", "As Built"…

### 6. Compromissos *(substitui testimonials)*
Faixa de 3-4 cards/linhas com **promessas explícitas**, não opiniões de outros.

Exemplos:
- **Atendimento direto com os arquitetos titulares** — sem intermediário
- **Resposta em até 48h** úteis
- **Cobertura em São Paulo e região metropolitana** (ou onde for)
- **Visão integrada**: arquitetura, urbanismo, paisagismo e regularização sob o mesmo teto

### 7. Sobre teaser
- Split: blob/asset visual à esquerda, texto curto à direita
- Frase de filosofia + CTA `Conheça a GeoArq →` → leva pra `/sobre`

### 8. CTA final
Bloco escuro full-bleed, **frase grande**: "Tem um projeto, um terreno ou uma dúvida técnica? Vamos conversar." + WhatsApp + Instagram + email.

---

## /servicos *(hub)*

**Não é grid de cards.** É uma **lista editorial vertical** — cada item ocupa quase a viewport:

- Sticky em desktop: índice à esquerda (01/02/03/04/05) com hover destaque
- Cada bloco: número grande, título, parágrafo descritivo, lista de sub-itens, CTA `Conhecer detalhes →`
- Fundo de cada bloco varia (cream / sage-soft / ink dark) — temperatura editorial
- Mobile: acordeão clean

---

## /servicos/[slug] *(cada serviço)*

Layout repetível, cada um com seu conteúdo:

1. **Hero específico** — título grande + 1 frase + asset/diagrama
2. **"Quando você precisa"** — 3-4 situações concretas que disparam a contratação
   - Ex (regularização): *"Você comprou um imóvel sem matrícula atualizada"*, *"Há divergência entre o construído e o registrado"*…
3. **O que entregamos** — lista detalhada dos sub-itens com mini-explicação de cada
4. **Como funciona** — 3-4 passos específicos daquela frente
5. **FAQ técnico** — 4-6 perguntas comuns daquele serviço (accordion)
6. **CTA contextual** — "Solicitar análise de regularização" / "Conversar sobre aprovação" (linka WhatsApp com mensagem pré-preenchida)
7. **Outras frentes relacionadas** (links pras outras 4)

---

## /sobre

1. **Hero** — "Sobre a GeoArq"
2. **Manifesto / quem somos** — texto editorial longo, com profundidade
3. **Equipe** — fotos + papel + breve bio. Se não tiver fotos ainda, fica só nome + cargo + linhas de descrição
4. **Valores / princípios** — 3-4 cards bonitos com ícone + título + 2 linhas
5. **Processo completo** — versão expandida do que tem no teaser da home, com profundidade técnica
6. **Cobertura geográfica** — onde atua, mapa estilizado ou lista de regiões
7. **Credenciais** — CAU, CREA, qualquer registro relevante
8. **CTA final**

---

## /contato

1. **Hero curto** — "Vamos conversar"
2. **Form** em destaque + canais diretos (WhatsApp grande, IG, email, telefone)
3. **Endereço + horário** (se houver escritório físico)
4. **FAQ comercial** — 4-6 perguntas:
   - Como funciona o primeiro contato?
   - Como é feito o orçamento?
   - Quais regiões vocês atendem?
   - Qual o prazo médio para regularização?
   - Vocês acompanham a obra?
   - Atendem pessoa física e empresas?

---

## Onde mora cada conteúdo

| Conteúdo | Página principal | Aparece também |
|---|---|---|
| FAQ comercial (preço, prazo, atendimento) | `/contato` | — |
| FAQ técnico (por frente) | `/servicos/[slug]` | — |
| Processo de trabalho | `/sobre` (completo) | Home (timeline), cada serviço (versão curta) |
| Compromissos / promessas | Home | `/sobre` |
| Equipe | `/sobre` | — |
| Cobertura / atendimento | `/sobre` + `/contato` | Home (compromissos) |

---

## Ordem de implementação proposta

1. **Manifesto** (Home seção 2) — frase editorial impactante
2. **Serviços imersivos** (Home seção 3) — scroll horizontal pinned, o "wow"
3. **Como trabalhamos** (Home seção 4) — processo em timeline
4. **Compromissos + Sobre teaser + CTA final** (Home seções 6, 7, 8)
5. **`/servicos` hub** — lista editorial
6. **`/servicos/[slug]` modelo** — replica pras 5 frentes
7. **`/sobre`**
8. **`/contato`**

Footer e navbar já estão prontos e serão expandidos conforme as páginas surgirem.

---

## Princípios de copy

- **Concreto > genérico**: "Aprovamos seu projeto na Prefeitura e nos órgãos competentes" > "Cuidamos da burocracia pra você"
- **Direto > publicitário**: GeoArq é técnico. Cliente confia em precisão, não em marketing
- **Mostra domínio**: usa o jargão certo (matrícula, averbação, CLCB, EVTL) — quem busca isso conhece e quer ver competência
- **Promete o que cumpre**: cada compromisso na home tem que ser verdade hoje, não no futuro
