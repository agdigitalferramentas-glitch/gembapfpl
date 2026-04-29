const steps = [
  { n: "1", t: "Requisitos do projeto", d: "Definição do escopo com aprovação da liderança." },
  { n: "2", t: "Situação atual", d: "Diagnóstico do processo e medição da linha de base." },
  { n: "3", t: "Situação alvo", d: "Definição clara da meta e do estado futuro desejado." },
  { n: "4", t: "Plano de ações", d: "Desdobramento em ações específicas, prazos e responsáveis." },
  { n: "5", t: "Indicadores de performance", d: "Acompanhamento sistemático com coachings e mentorias." },
];

export const ProjectSection = () => (
  <section className="py-14 lg:py-20 bg-surface-2 relative">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <div className="label-eyebrow">Projeto aplicado na prática</div>
          <h2 className="section-title mt-4 text-foreground">
            Você aprende fazendo.{" "}
            <span className="text-accent">E sai com resultado{"\u00A0"}comprovado.</span>
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              O projeto de certificação coloca em prática todo o aprendizado do programa. Usando o{" "}
              <span className="text-foreground font-semibold">A3 estratégico</span> — com 5 etapas:
              requisitos, situação atual, situação alvo, plano de ações e indicadores — você desenvolve
              uma transformação real no seu ambiente de trabalho.
            </p>
            <p>
              A aprovação é concluída quando os indicadores estão dentro da meta por pelo menos{" "}
              <span className="text-accent font-semibold">3 meses</span>, o plano de ações está concluído
              e o gestor direto valida o resultado. Você sai com um projeto real no portfólio, aprovado
              pelo comitê técnico de especialistas seniores do Gemba Group.
            </p>
          </div>
        </div>

        <ol className="relative space-y-3">
          <div
            aria-hidden
            className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-accent via-primary to-transparent"
          />
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative card-glass rounded-lg p-5 pl-20 transition-all hover:!border-accent hover:-translate-y-0.5"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-primary-foreground font-numeric text-2xl flex items-center justify-center shadow-[0_0_20px_hsl(var(--accent)/0.4)]">
                {s.n}
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-foreground">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default ProjectSection;
