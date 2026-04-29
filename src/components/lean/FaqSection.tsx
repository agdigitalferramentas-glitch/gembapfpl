import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência prévia com Lean para participar?",
    a: "Não. O programa começa pelo 5S e pela Introdução à Mentalidade Enxuta — conteúdos acessíveis para quem está começando. O único requisito é estar em contato com algum ambiente de trabalho onde o aprendizado possa ser aplicado.",
  },
  {
    q: "O PFPL é diferente do Green Belt ou Black Belt?",
    a: "Sim. O Programa de Formação Profissional Lean foca nas ferramentas operacionais do Lean: 5S, Kaizen, TPM, MFV, Kanban, SMED, entre outras. O Green Belt e Black Belt aprofundam o DMAIC com ferramentas estatísticas do Six Sigma. Os programas são complementares — o PFPL é ideal para quem quer dominar o Lean antes de avançar para a formação DMAIC.",
  },
  {
    q: "O certificado é reconhecido pelo mercado?",
    a: "Sim. O Certificado do PFPL - Programa de Formação Profissional Lean é reconhecido por empresas dos setores industrial, logístico e de serviços que adotam o sistema Lean. A Gemba Group é a principal referência nacional em formação e consultoria Lean, com mais de 17 anos e mais de 30 mil profissionais formados.",
  },
  {
    q: "Como funciona o projeto para certificação?",
    a: (
      <>
        <p>
          Você desenvolve um projeto A3 estratégico real na sua empresa ao longo do programa. O processo funciona da seguinte forma:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Estrutura:</strong> O projeto envolve 5 etapas (requisitos, situação atual, situação alvo, plano de ações e indicadores).
          </li>
          <li>
            <strong>Metas:</strong> O plano deve ser concluído e os indicadores precisam atingir a meta estipulada por 3 meses consecutivos.
          </li>
          <li>
            <strong>Certificação:</strong> É concedida após a análise e validação conjunta dos resultados entre o gestor da empresa e o comitê técnico do Gemba Group.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "E se eu perder alguma aula ao vivo?",
    a: "Você não será prejudicado. Todas as aulas ao vivo são gravadas e sobem para a nossa plataforma. Se houver imprevistos, você pode acessar e repor o conteúdo assistindo quantas vezes quiser, sem que isso coloque em risco a sua certificação final.",
  },
  {
    q: "Posso parcelar sem juros?",
    a: "Sim. Em até 6x sem juros no cartão, com parcelas de R$ 533,33 (total R$ 3.200,00). Quem paga à vista tem 5% de desconto e paga R$ 3.040,00.",
  },
  {
    q: "Preciso trabalhar em indústria para aproveitar o conteúdo?",
    a: "Não. O programa cobre ferramentas aplicáveis em produção, logística, serviços e ambientes administrativos — inclusive com o módulo de Lean Office dedicado especificamente a processos de escritório. O conteúdo é relevante para qualquer setor.",
  },
];

export const FaqSection = () => (
  <section className="py-14 lg:py-20 bg-surface-3">
    <div className="container max-w-4xl">
      <div className="text-center">
        <div className="label-eyebrow inline-flex">Perguntas frequentes</div>
        <h2 className="section-title mt-4 text-foreground">
          Ainda tem dúvidas? <span className="text-accent">A gente responde.</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="card-glass rounded-lg border-0 px-5 data-[state=open]:!border-accent"
          >
            <AccordionTrigger className="text-left font-display font-bold text-base md:text-lg uppercase text-foreground hover:no-underline hover:text-accent [&[data-state=open]>svg]:text-accent">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
