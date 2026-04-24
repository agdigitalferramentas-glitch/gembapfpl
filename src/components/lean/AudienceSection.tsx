const audience = [
  {
    icon: "⚙️",
    role: "Profissional Operacional que Quer Crescer",
    sub: "Técnico / Analista / Líder de Equipe · todos os setores",
    text: "Atua diretamente na operação — produção, logística, qualidade ou serviços — e quer aprender as ferramentas que permitem enxergar desperdícios, propor melhorias e se destacar como referência interna de melhoria contínua.",
    proof: "Tornou-se o profissional que a empresa consulta antes de implementar qualquer mudança no processo.",
  },
  {
    icon: "🏭",
    role: "Gestor que Precisa de Método",
    sub: "Supervisor / Coordenador / Gerente · PME e indústria",
    text: "Já lidera equipes e entende os problemas, mas carece de uma metodologia estruturada para transformar iniciativas em resultados consistentes. O PFPL dá o ferramental completo para liderar com método, não com improviso.",
    proof: "Implantou 5S, MFV e Gerenciamento Diário em 6 meses e reduziu desperdícios visíveis no time operacional.",
  },
  {
    icon: "🚀",
    role: "Jovem Profissional que Quer se Diferenciar",
    sub: "Recém-formado / Iniciante · Engenharia, Produção, Adm",
    text: "Ainda no início da carreira, mas já entende que o mercado paga mais por quem conhece Lean na prática. O programa oferece 20 ferramentas reais com projeto aplicado — o portfólio que faz diferença em processos seletivos.",
    proof: "Entrou no mercado com um diferencial que a maioria dos recém-formados não tem: ferramentas Lean com projeto comprovado.",
  },
];

export const AudienceSection = () => (
  <section className="py-14 lg:py-20 bg-surface-mid relative overflow-hidden">
    <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
    <div className="container relative z-10">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Para quem é este programa</div>
        <h2 className="section-title mt-4 text-foreground">
          Para quem está na operação e quer{" "}
          <span className="text-accent">liderar a transformação.</span>
        </h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {audience.map((a) => (
          <article
            key={a.role}
            className="card-glass rounded-xl p-7 flex flex-col h-full transition-all hover:-translate-y-1 hover:!border-accent"
          >
            <div className="text-4xl">{a.icon}</div>
            <h3 className="mt-4 font-display font-bold text-2xl uppercase text-foreground leading-tight">
              {a.role}
            </h3>
            <div className="mt-1 text-xs uppercase tracking-wider text-accent font-bold">
              {a.sub}
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{a.text}</p>
            <div className="mt-6 pt-5 border-t border-accent/20 flex gap-3 text-sm">
              <span className="text-accent font-bold shrink-0">✓</span>
              <span className="text-foreground/85">{a.proof}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
