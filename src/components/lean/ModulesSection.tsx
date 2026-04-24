const modules = [
  { n: "01", t: "5S", topics: ["Origem e cultura", "Os 5 sensos", "Auditoria"] },
  { n: "02", t: "Mentalidade Enxuta", topics: ["Origem do TPS-Lean", "5 princípios", "Papel do líder"] },
  { n: "03", t: "Estabilidade Básica", topics: ["Os 4 M's", "Técnicas aplicadas", "Impactos da instabilidade"] },
  { n: "04", t: "A3", topics: ["Formato A3 x PDCA", "Situação atual e alvo", "Plano de ações"] },
  { n: "05", t: "Gerenciamento Diário", topics: ["Estratégia desdobrada", "Liderança", "Melhoria via GD"] },
  { n: "06", t: "MASP", topics: ["Análise e solução", "Causa raiz", "Padronização"] },
  { n: "07", t: "Kanban", topics: ["Tipos e cálculo", "Sistema puxado", "Fluxo contínuo"] },
  { n: "08", t: "Dimensionamento de Estoques", topics: ["Tipos e posições", "Ciclo, pulmão, segurança", "Cadeia de suprimentos"] },
  { n: "09", t: "Kaizen", topics: ["Filosofia Kaizen", "Os 10 passos", "Ambiente favorável"] },
  { n: "10", t: "SMED", topics: ["Troca rápida", "Setup interno/externo", "Redução de custos"] },
  { n: "11", t: "TPM", topics: ["6 grandes perdas", "8 pilares TPM", "Manutenção autônoma"] },
  { n: "12", t: "Hoshin Kanri", topics: ["Desdobramento estratégico", "Hoshin vs A3", "Alinhamento"] },
  { n: "13", t: "Kamishibai", topics: ["Auditoria sistêmica", "5 princípios", "Aprendizado no processo"] },
  { n: "14", t: "Logística Lean — P1", topics: ["Lead time", "Fluxos x layout", "Modais de movimentação"] },
  { n: "15", t: "Mapeamento (MFV)", topics: ["Família de produtos", "5 partes do MFV", "Takt e fluxo"] },
  { n: "16", t: "Lean Office", topics: ["Desperdícios adm", "Mapeamento de processos", "Níveis de serviço"] },
  { n: "17", t: "Liderança Lean", topics: ["Líder de resultados", "Habilidades-chave", "Estabilidade"] },
  { n: "18", t: "Gestão de Projetos de Melhoria", topics: ["Fases e gestão", "Riscos", "Alto impacto"] },
  { n: "19", t: "Trabalho Padronizado", topics: ["Por que padronizar", "4 ferramentas do TP", "Balanceamento"] },
  { n: "20", t: "SIPOC", topics: ["Fornecedor → Cliente", "Organização de processos", "Interfaces"] },
];

export const ModulesSection = () => (
  <section id="modules" className="py-20 lg:py-28 bg-surface-2 relative">
    <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
    <div className="container relative z-10">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Conteúdo completo</div>
        <h2 className="section-title mt-4 text-foreground">
          20 Módulos. <span className="text-accent">As ferramentas Lean</span> mais poderosas do mercado.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((m) => (
          <article
            key={m.n}
            className="group relative card-glass rounded-lg p-5 transition-all hover:-translate-y-1 hover:!border-accent hover:shadow-[0_18px_40px_-15px_hsl(var(--accent)/0.45)]"
          >
            <div
              aria-hidden
              className="absolute top-2 right-3 font-numeric text-5xl text-accent/15 group-hover:text-accent/30 transition-colors leading-none select-none"
            >
              {m.n}
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
              Módulo {m.n}
            </div>
            <h3 className="mt-2 font-display font-bold text-xl uppercase text-foreground leading-tight">
              {m.t}
            </h3>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              {m.topics.map((tp) => (
                <li key={tp} className="flex gap-1.5">
                  <span className="text-accent shrink-0">›</span>
                  <span>{tp}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
