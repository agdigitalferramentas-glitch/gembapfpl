const stats = [
  { v: "+30k", l: "Profissionais capacitados em todo o Brasil" },
  { v: "+1Bi", l: "Em ganhos gerados pelos projetos dos alunos" },
  { v: "+500", l: "Projetos de consultorias Lean & Six Sigma" },
  { v: "30x", l: "Retorno médio gerado pelos projetos de melhoria durante a formação." },
  { v: "17", suffix: "anos", l: "Referência Nacional" },
  { v: "+1000", l: "Empresas atendidas em consultoria e treinamentos." },
];

export const SocialProofSection = () => (
  <section className="py-14 lg:py-20 bg-surface-deep relative">
    <div className="container">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Números que comprovam</div>
        <h2 className="section-title mt-4 text-foreground">
          17 anos transformando operações.{" "}
          <span className="text-accent">Os resultados falam por si.</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="card-glass rounded-lg p-6 md:p-8 text-center transition-all hover:bg-white/[0.06] hover:!border-accent"
          >
            <div className="flex items-baseline justify-center gap-2">
              <span className="stat-value text-5xl md:text-6xl">{s.v}</span>
              {s.suffix && (
                <span className="font-display text-xl uppercase tracking-wider text-accent/80">
                  {s.suffix}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
