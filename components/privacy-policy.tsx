import Link from "next/link";
import { SITE } from "@/lib/site";

type Section = {
  title: string;
  paragraphs: (string | { list: string[] })[];
};

const SECTIONS: Section[] = [
  {
    title: "Quem somos",
    paragraphs: [
      `A GeoArq é um escritório de arquitetura, urbanismo, paisagismo e regularização imobiliária. Esta política descreve como tratamos seus dados quando você navega no nosso site ou entra em contato conosco — sempre em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).`,
      `Para qualquer dúvida relacionada à privacidade, fale com a gente pelo e-mail ${SITE.email}.`,
    ],
  },
  {
    title: "Dados que coletamos",
    paragraphs: [
      `Coletamos apenas os dados estritamente necessários pra cumprir o que você nos pede — atender uma solicitação, esclarecer uma dúvida, dar continuidade a um projeto.`,
      {
        list: [
          "Dados de contato voluntariamente fornecidos pelo formulário (nome, e-mail, telefone, descrição do projeto).",
          "Dados técnicos básicos da navegação (tipo de navegador, sistema operacional, idioma) coletados via cookies.",
          "Histórico de conversas e mensagens trocadas conosco pelos canais oficiais (WhatsApp, e-mail, formulário).",
        ],
      },
      `Não coletamos dados sensíveis (origem racial, opinião política, saúde, vida sexual, dados genéticos ou biométricos) e não tratamos dados de menores de idade.`,
    ],
  },
  {
    title: "Como usamos seus dados",
    paragraphs: [
      `Seus dados são usados exclusivamente para:`,
      {
        list: [
          "Responder a sua mensagem ou solicitação de orçamento.",
          "Conduzir conversas comerciais e técnicas relacionadas ao seu projeto.",
          "Emitir documentos, propostas e contratos.",
          "Atender obrigações legais (notas fiscais, registros profissionais, eventuais requisições judiciais).",
          "Melhorar a navegação e a experiência no nosso site.",
        ],
      },
      `Não usamos seus dados pra publicidade, perfilamento ou venda a terceiros. Sem mailing massa, sem newsletter automática.`,
    ],
  },
  {
    title: "Base legal",
    paragraphs: [
      `O tratamento dos seus dados se apoia nas hipóteses legais previstas no Art. 7º da LGPD: execução de contrato ou procedimentos preliminares (Art. 7º, V), cumprimento de obrigação legal ou regulatória (Art. 7º, II), e legítimo interesse (Art. 7º, IX) — limitado ao necessário pra responder uma solicitação que você iniciou.`,
    ],
  },
  {
    title: "Compartilhamento",
    paragraphs: [
      `Não compartilhamos seus dados com terceiros pra fins comerciais. Compartilhamentos podem ocorrer apenas quando estritamente necessários pra a execução do seu projeto — por exemplo:`,
      {
        list: [
          "Cartórios e órgãos públicos competentes (Prefeitura, Bombeiros, Vigilância Sanitária), quando o serviço envolver aprovações ou regularização.",
          "Contadores e profissionais jurídicos parceiros, mediante sua ciência.",
          "Plataformas de comunicação que utilizamos (WhatsApp, provedor de e-mail) sujeitas a suas próprias políticas.",
        ],
      },
      `Não fazemos transferência internacional de dados pessoais sem base legal e ciência do titular.`,
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      `Cookies são pequenos arquivos armazenados no seu dispositivo. Usamos apenas cookies estritamente necessários e cookies de preferência (como sua escolha sobre este aviso de cookies).`,
      `Você pode recusar cookies a qualquer momento no aviso exibido neste site, ou ajustar nas configurações do seu navegador. Recusar cookies não impede o uso do site.`,
    ],
  },
  {
    title: "Seus direitos",
    paragraphs: [
      `Conforme a LGPD, você tem o direito de:`,
      {
        list: [
          "Confirmar se tratamos seus dados pessoais.",
          "Acessar os dados que mantemos sobre você.",
          "Corrigir dados incompletos, inexatos ou desatualizados.",
          "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
          "Solicitar a portabilidade dos dados, quando aplicável.",
          "Revogar o consentimento dado para determinado tratamento.",
          "Ser informado sobre as entidades com as quais compartilhamos dados.",
        ],
      },
      `Pra exercer qualquer um desses direitos, escreva pra ${SITE.email}. Respondemos em até 15 dias úteis.`,
    ],
  },
  {
    title: "Segurança",
    paragraphs: [
      `Adotamos medidas técnicas e organizacionais razoáveis pra proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida. Mas nenhum sistema é 100% imune — caso ocorra um incidente de segurança que envolva dados pessoais, comunicaremos os titulares afetados e a Autoridade Nacional de Proteção de Dados (ANPD) conforme exigido por lei.`,
    ],
  },
  {
    title: "Retenção",
    paragraphs: [
      `Mantemos seus dados pelo tempo necessário pra atender à finalidade pela qual foram coletados e cumprir obrigações legais. Mensagens de contato sem evolução comercial são eliminadas após 12 meses. Projetos contratados seguem prazos contratuais e prescricionais aplicáveis.`,
    ],
  },
  {
    title: "Alterações nesta política",
    paragraphs: [
      `Esta política pode ser atualizada pra refletir mudanças nas práticas ou na legislação. A versão vigente é sempre a publicada nesta página, com a data da última atualização indicada no topo. Recomendamos consulta periódica.`,
    ],
  },
  {
    title: "Contato",
    paragraphs: [
      `Pra qualquer questão sobre esta política, sobre o tratamento dos seus dados ou pra exercer seus direitos:`,
      {
        list: [
          `E-mail: ${SITE.email}`,
          `WhatsApp: ${SITE.phoneDisplay}`,
        ],
      },
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <section className="relative">
      {/* Hero */}
      <div className="bg-cream px-6 pt-32 pb-12 sm:px-10 sm:pt-44 sm:pb-16 lg:px-16 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-stone transition-colors hover:text-forest"
          >
            ← Voltar ao site
          </Link>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-stone backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            Política de privacidade
          </span>
          <h1 className="mt-6 font-display text-[clamp(36px,5.4vw,72px)] leading-[1.05] tracking-[-0.015em] text-ink">
            Como tratamos{" "}
            <span className="italic font-light text-forest">seus dados</span>.
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="bg-white px-6 pt-12 pb-20 sm:px-10 sm:pt-16 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-base leading-relaxed text-stone sm:text-lg">
            Esta política descreve, de forma direta, como a GeoArq coleta,
            usa, armazena e protege seus dados pessoais. Em caso de dúvida,
            o caminho mais curto é nos escrever.
          </p>

          <div className="mt-16 space-y-14 sm:mt-20">
            {SECTIONS.map((section, idx) => (
              <article
                key={section.title}
                className="border-t border-ink/10 pt-10 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-sm text-forest">
                    /{String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone sm:text-base">
                  {section.paragraphs.map((p, pIdx) => {
                    if (typeof p === "string") {
                      return <p key={pIdx}>{p}</p>;
                    }
                    return (
                      <ul key={pIdx} className="space-y-2.5">
                        {p.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-forest" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
