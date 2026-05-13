import type { LucideIcon } from "lucide-react";
import {
  Signature,
  Stamp,
  ChartCandlestick,
  ClipboardCheck,
  Compass,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  tag: string;
  eyebrow: string;
  title: string;
  description: string;
  heroDescription: string;
  items: string[];
  image: string;
  whenYouNeed: { title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "regularizacao",
    icon: Signature,
    tag: "01",
    eyebrow: "Documentos & matrícula",
    title: "Regularização e Documentação Imobiliária",
    description:
      "Da retificação à instituição de condomínio — sua propriedade em conformidade plena, com matrícula em ordem e respaldo legal pra qualquer próximo passo.",
    heroDescription:
      "Resolver o que está fora do papel: matrícula desatualizada, divergência entre construído e registrado, posse sem título. A GeoArq cuida da regularização ponta a ponta, com método técnico e interlocução direta com cartórios e órgãos municipais.",
    items: [
      "Regularização de imóveis",
      "Averbação e retificação de matrícula",
      "Usucapião",
      "Desdobro e unificação de lotes",
      "Instituição de condomínio",
    ],
    image: "/services/regularizacao.webp",
    whenYouNeed: [
      {
        title: "Comprou um imóvel sem matrícula atualizada",
        description:
          "A matrícula é a identidade legal do imóvel. Sem ela em dia, qualquer venda, financiamento ou herança fica travada.",
      },
      {
        title: "Há divergência entre o construído e o registrado",
        description:
          "Reforma sem averbação, ampliação não declarada, área que o registro não acompanha — tudo isso precisa ser regularizado pra valer.",
      },
      {
        title: "Você ocupa um imóvel há anos sem título",
        description:
          "Usucapião dá segurança jurídica a quem tem a posse mansa e pacífica e quer transformar isso em propriedade reconhecida.",
      },
      {
        title: "Quer instituir um condomínio",
        description:
          "Edificações multifamiliares e empreendimentos precisam de instituição formal de condomínio pra individualizar unidades e funcionar legalmente.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Diagnóstico documental",
        description:
          "Levantamos toda a documentação existente — matrícula, IPTU, plantas, certidões — e identificamos exatamente o que falta pra regularizar.",
      },
      {
        step: "02",
        title: "Plano técnico-legal",
        description:
          "Definimos a rota: retificação, averbação, usucapião administrativa, desdobro. Cada caso tem o caminho mais curto e seguro.",
      },
      {
        step: "03",
        title: "Execução com órgãos",
        description:
          "Acompanhamos pessoalmente cartório, Prefeitura e demais órgãos. Você recebe atualizações sem precisar correr atrás.",
      },
      {
        step: "04",
        title: "Entrega da documentação",
        description:
          "Matrícula regular, certidões em dia e dossiê técnico completo entregue pra você — pronto pra qualquer próximo passo.",
      },
    ],
    faq: [
      {
        question: "Quanto tempo demora uma regularização?",
        answer:
          "Depende muito do caso. Averbações simples saem em semanas; usucapião extrajudicial em alguns meses; processos judiciais podem levar mais. Na primeira análise damos uma estimativa realista.",
      },
      {
        question: "Preciso de habite-se pra fazer usucapião?",
        answer:
          "Não. Usucapião regulariza a posse independente do habite-se. Mas, dependendo do objetivo final, pode fazer sentido tratar das duas frentes em paralelo.",
      },
      {
        question: "Vocês resolvem casos com inventário pendente?",
        answer:
          "Sim, integrados com a parte jurídica do cliente. Muitas regularizações esbarram em inventários ou herança não partilhada — a gente mapeia o que precisa ser destravado antes.",
      },
      {
        question: "Trabalham com imóveis comerciais e rurais também?",
        answer:
          "Sim. Cada tipologia tem suas particularidades — comercial costuma envolver alvará, rural envolve CCIR/CAR. A análise inicial te diz exatamente o que precisa.",
      },
    ],
    related: ["aprovacoes", "vistorias"],
  },

  {
    slug: "aprovacoes",
    icon: Stamp,
    tag: "02",
    eyebrow: "Órgãos & licenças",
    title: "Aprovações, Licenças e Alvarás",
    description:
      "Interlocução técnica com Prefeitura, Bombeiros e Vigilância Sanitária — projetos aprovados, alvarás emitidos e certificados em ordem sem retrabalho.",
    heroDescription:
      "Tirar o projeto do papel exige caminho legal. Cuidamos da aprovação na Prefeitura, do alvará de construção ao habite-se, passando por CLCB do Corpo de Bombeiros e LTA da Vigilância Sanitária — com o desenho já compatível com a norma.",
    items: [
      "Aprovação de projetos",
      "Emissão de alvarás",
      "Licenças junto aos órgãos competentes",
      "CLCB (Certificado de Licença do Corpo de Bombeiros)",
      "Vigilância Sanitária (LTA)",
    ],
    image: "/services/aprovacoes.webp",
    whenYouNeed: [
      {
        title: "Vai construir, reformar ou ampliar",
        description:
          "Toda obra que altera área, uso ou estrutura precisa de aprovação prévia da Prefeitura. Começar sem alvará gera embargo e multa.",
      },
      {
        title: "Vai operar um estabelecimento",
        description:
          "Restaurantes, clínicas, comércios — cada atividade tem licença obrigatória (CLCB, LTA, alvará de funcionamento). A gente cuida de tudo.",
      },
      {
        title: "Precisa do habite-se",
        description:
          "Sem habite-se, financiamento, venda e cadastro IPTU travam. A gente conduz a vistoria final e a emissão do auto de conclusão.",
      },
      {
        title: "Foi notificado por algum órgão",
        description:
          "Auto de infração, embargo, irregularidade no Corpo de Bombeiros — resolvemos o passivo com a abordagem técnica certa pra cada situação.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Análise normativa",
        description:
          "Lemos zoneamento, código de obras, normas dos Bombeiros e da Vigilância. Cada projeto começa com clareza do que pode e o que não pode.",
      },
      {
        step: "02",
        title: "Compatibilização técnica",
        description:
          "O projeto é desenhado (ou ajustado) pra atender as exigências dos órgãos competentes desde o início — menos idas e voltas.",
      },
      {
        step: "03",
        title: "Protocolo e acompanhamento",
        description:
          "Protocolamos e acompanhamos pessoalmente cada órgão, respondendo exigências técnicas até a emissão do alvará/licença.",
      },
      {
        step: "04",
        title: "Habite-se e conformidade final",
        description:
          "Após a obra, conduzimos a vistoria de conclusão, o habite-se e as últimas licenças pra colocar tudo em ordem documental.",
      },
    ],
    faq: [
      {
        question: "Quanto tempo leva pra aprovar um projeto?",
        answer:
          "Em São Paulo, projetos residenciais com aprovação simplificada saem em 30–90 dias; aprovações regulares variam mais. Damos uma estimativa precisa após o estudo inicial.",
      },
      {
        question: "É possível regularizar uma obra já executada?",
        answer:
          "Sim, é a chamada regularização edilícia. O caminho depende da idade da edificação e do enquadramento legal — geralmente envolve auto de regularização e atualização da matrícula.",
      },
      {
        question: "O CLCB é sempre obrigatório?",
        answer:
          "Pra qualquer edificação acima de certa área ou uso (comercial, multifamiliar etc.) é obrigatório. Edificações residenciais unifamiliares geralmente são isentas, mas vale verificar.",
      },
      {
        question: "Trabalham em outras cidades além de São Paulo?",
        answer:
          "Sim. Atendemos São Paulo capital, região metropolitana e cidades do interior. Cada Prefeitura tem suas particularidades — nosso trabalho começa lendo o caderno técnico local.",
      },
    ],
    related: ["regularizacao", "vistorias"],
  },

  {
    slug: "estudos",
    icon: ChartCandlestick,
    tag: "03",
    eyebrow: "Análise & estratégia",
    title: "Estudos Técnicos e Viabilidade",
    description:
      "Decidir com método antes de construir — viabilidade técnica e legal, estudos de massa, implantação e impacto urbano que sustentam a melhor escolha.",
    heroDescription:
      "Antes do projeto vem a pergunta certa: o que cabe aqui, o que a norma permite, o que faz sentido pro negócio. Os estudos técnicos da GeoArq dão respaldo pra decidir com clareza — sem investir cego e sem surpresa em aprovação.",
    items: [
      "Estudo de Viabilidade Técnica e Legal (EVTL)",
      "Estudo de Viabilidade Técnica e Legal para novos negócios",
      "Estudos de Massa / Implantação",
      "Estudos de Impacto de Vizinhança (EIV)",
    ],
    image: "/services/estudos.webp",
    whenYouNeed: [
      {
        title: "Pensa em comprar um terreno",
        description:
          "Antes da assinatura, o EVTL diz o que aquele terreno realmente permite construir — área, gabarito, usos. Evita compra cega.",
      },
      {
        title: "Vai abrir um negócio",
        description:
          "Cada atividade tem exigências de zoneamento, acessibilidade, vagas. O estudo de viabilidade pra novos negócios avalia local x atividade antes do investimento.",
      },
      {
        title: "Quer dimensionar um empreendimento",
        description:
          "Estudo de massa traduz o potencial construtivo em volumes possíveis — entrada estratégica pra incorporadoras e investidores.",
      },
      {
        title: "Empreendimento exige EIV",
        description:
          "Grandes obras precisam demonstrar impacto urbanístico — trânsito, infraestrutura, vizinhança. O EIV é exigência legal pra muitos empreendimentos.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Leitura do contexto",
        description:
          "Lote, zoneamento, código de obras, restrições ambientais e patrimoniais. Mapeamos tudo que incide sobre o terreno.",
      },
      {
        step: "02",
        title: "Simulação de cenários",
        description:
          "Volumes possíveis, distribuição de áreas, usos compatíveis. Você vê o que cabe — e o que não cabe — em termos legais e técnicos.",
      },
      {
        step: "03",
        title: "Relatório e recomendação",
        description:
          "Documento técnico com análise, números e recomendação clara. Pra decidir com base, não com intuição.",
      },
    ],
    faq: [
      {
        question: "Qual a diferença entre EVTL e estudo de massa?",
        answer:
          "EVTL é a análise técnico-legal completa: o que se pode fazer e como. Estudo de massa é a tradução volumétrica dessa viabilidade — geralmente vem depois ou junto.",
      },
      {
        question: "Em quanto tempo recebo o resultado?",
        answer:
          "Estudos simples saem em 1–2 semanas. Análises mais complexas — terrenos em ZEPAM, áreas de tombamento, EIV — podem levar 3–5 semanas.",
      },
      {
        question: "O EIV substitui outras licenças ambientais?",
        answer:
          "Não. EIV é urbanístico — analisa impacto na cidade. Licenciamento ambiental é separado e segue legislação própria. Em muitos casos, andam em paralelo.",
      },
      {
        question: "Vocês fazem viabilidade pra investidor que ainda não comprou?",
        answer:
          "Sim, e é uma das aplicações mais valiosas. O estudo precede a aquisição e protege a decisão de investimento.",
      },
    ],
    related: ["aprovacoes", "projetos"],
  },

  {
    slug: "vistorias",
    icon: ClipboardCheck,
    tag: "04",
    eyebrow: "Verificação & conformidade",
    title: "Vistorias e Documentação Técnica",
    description:
      "O olhar técnico que confirma o existente e organiza o que falta — pareceres, due diligence e as built pra decisões com segurança.",
    heroDescription:
      "Antes de comprar, vender, alugar ou regularizar — entender o que realmente está construído. As vistorias e documentações técnicas da GeoArq traduzem o imóvel em laudos, relatórios e dossiês que sustentam qualquer decisão.",
    items: [
      "Vistorias técnicas",
      "Pareceres e relatórios técnicos",
      "Dossiê documental",
      "Due diligence",
      "As Built (como construído)",
      "Declaração e relatórios de conformidade técnica",
    ],
    image: "/services/vistorias.webp",
    whenYouNeed: [
      {
        title: "Vai comprar um imóvel",
        description:
          "A due diligence técnica revela patologias estruturais, irregularidades documentais e divergências entre o construído e o registrado.",
      },
      {
        title: "Precisa de laudo pra processo ou seguro",
        description:
          "Pareceres técnicos com responsabilidade profissional (RT/ART/RRT) pra ações judiciais, vistorias cautelares, sinistros e perícias.",
      },
      {
        title: "Reformou ou ampliou sem registrar",
        description:
          "O as built documenta exatamente o que existe hoje — primeiro passo pra averbação, instituição de condomínio ou venda.",
      },
      {
        title: "Vai assumir um imóvel existente",
        description:
          "Locação corporativa, fusão de empresas, herança — em qualquer transação, o dossiê documental técnico evita herdar passivo invisível.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Visita técnica",
        description:
          "Inspeção in loco com a profundidade que o caso pede — desde levantamento métrico até análise estrutural e de instalações.",
      },
      {
        step: "02",
        title: "Cruzamento documental",
        description:
          "Comparamos o que está construído com o que está registrado, projetado e licenciado — divergências viram pontos do laudo.",
      },
      {
        step: "03",
        title: "Relatório e recomendação",
        description:
          "Laudo, parecer ou dossiê — com responsabilidade técnica formal e recomendação clara dos próximos passos.",
      },
    ],
    faq: [
      {
        question: "Qual a diferença entre laudo e parecer?",
        answer:
          "Laudo é descritivo e factual (estado físico, medições, patologias). Parecer agrega análise crítica e opinião técnica fundamentada. Muitas vezes andam juntos.",
      },
      {
        question: "Os laudos têm validade jurídica?",
        answer:
          "Sim, quando emitidos por profissional habilitado com ART/RRT. Servem em juízo, seguros, transações imobiliárias e processos administrativos.",
      },
      {
        question: "O as built serve pra averbar?",
        answer:
          "Sim — é o documento técnico que demonstra exatamente como está construído. Base pra averbação na matrícula e regularização edilícia.",
      },
      {
        question: "Vocês fazem vistoria pra locação corporativa?",
        answer:
          "Sim. Vistoria de entrada/saída com laudo fotográfico e descritivo é prática comum em locações comerciais — protege as duas partes.",
      },
    ],
    related: ["regularizacao", "aprovacoes"],
  },

  {
    slug: "projetos",
    icon: Compass,
    tag: "05",
    eyebrow: "Desenho autoral",
    title: "Projetos de Arquitetura, Urbanismo e Paisagismo",
    description:
      "Arquitetura, urbanismo e paisagismo desenhados em conjunto — do conceito ao detalhe, com leitura precisa do terreno e do programa.",
    heroDescription:
      "O desenho é o coração do trabalho. Arquitetura de exteriores, reformas, paisagismo e masterplans — cada projeto nasce da escuta, passa por estudo técnico e ganha forma com precisão construtiva. Sempre integrado às frentes de aprovação e regularização da GeoArq.",
    items: [
      "Projetos de arquitetura de exteriores e reformas",
      "Projetos de paisagismo",
      "Planejamento paisagístico",
      "Masterplan",
    ],
    image: "/services/projetos.webp",
    whenYouNeed: [
      {
        title: "Vai construir uma casa, ampliação ou anexo",
        description:
          "Arquitetura de exteriores e reformas com leitura do terreno, da insolação e do programa — desenhar bem antes de construir caro.",
      },
      {
        title: "Quer dar identidade ao jardim",
        description:
          "Projetos de paisagismo que dialogam com a arquitetura e respeitam a flora local — espaço externo como extensão da casa.",
      },
      {
        title: "Tem uma área pra desenvolver",
        description:
          "Empreendimentos, loteamentos e áreas comuns ganham coerência com planejamento paisagístico — desde a circulação até a vegetação.",
      },
      {
        title: "Está pensando um empreendimento maior",
        description:
          "Masterplans estruturam grandes intervenções — uso do solo, mobilidade, infraestrutura, faseamento. Visão de longo prazo desde o primeiro traço.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Briefing e leitura",
        description:
          "Conversa, programa de necessidades, leitura do terreno, do entorno e das restrições legais. Tudo começa por aqui.",
      },
      {
        step: "02",
        title: "Estudo preliminar",
        description:
          "Partido arquitetônico, implantação e volumetria — propostas pra você ver, sentir e ajustar antes de avançar.",
      },
      {
        step: "03",
        title: "Anteprojeto e projeto executivo",
        description:
          "Desenvolvimento técnico completo: plantas, cortes, detalhes, especificações, compatibilizações com complementares.",
      },
      {
        step: "04",
        title: "Aprovação e acompanhamento",
        description:
          "Integrado com a frente de aprovações — e com suporte técnico em obra pra garantir que o desenho vira realidade fiel.",
      },
    ],
    faq: [
      {
        question: "Trabalham com qualquer estilo arquitetônico?",
        answer:
          "Cada projeto começa pelo cliente e pelo lugar — o estilo emerge daí. Não temos uma 'estética' fixa, mas um método de escuta e leitura técnica.",
      },
      {
        question: "O paisagismo entra junto com o projeto da casa?",
        answer:
          "Sempre que possível, sim. Pensar arquitetura e paisagismo em conjunto melhora a relação com o terreno, a insolação e o uso dos espaços externos.",
      },
      {
        question: "Vocês acompanham a obra?",
        answer:
          "Sim, em diferentes modelos — desde consultoria pontual até gerenciamento integral. Geralmente isso entra no contrato como fase separada do projeto.",
      },
      {
        question: "Atendem fora de São Paulo?",
        answer:
          "Sim. Trabalhamos presencialmente em SP e região metropolitana, e remotamente em outras praças, com visitas de marco no projeto e obra.",
      },
    ],
    related: ["estudos", "aprovacoes"],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);

export function getService(slug: string): Service | undefined {
  return SERVICES_BY_SLUG[slug];
}
