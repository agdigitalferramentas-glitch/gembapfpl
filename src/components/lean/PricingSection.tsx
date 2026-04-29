import { ArrowRight, Lock } from "lucide-react";

const included = [
  "82 horas de aulas ao vivo + 8 horas de coaching para certificação",
  "20 módulos completos com as principais ferramentas Lean",
  "5S, Kaizen, TPM, Kanban, SMED, MFV, Lean Office, Hoshin, A3, MASP, Kamishibai, Logística Lean, Liderança Lean e mais",
  "Aulas ao vivo via Teams — terças e quintas, 19h30–22h30",
  "Projeto real com A3 estratégico aplicado na empresa",
  "Coaching de certificação: 3 encontros bimestrais (2h cada) nos 6 meses após o término das aulas",
  "Avaliação final com consultores Gemba",
  "Validação do gestor para certificação",
];

export const PricingSection = () => (
  <section
    id="pricing"
    className="py-14 lg:py-20 relative overflow-hidden"
    style={{ background: "var(--gradient-deep)" }}
  >
    <div className="absolute inset-0 bg-blueprint opacity-25 pointer-events-none" />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl pointer-events-none"
    />
    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="label-eyebrow justify-center inline-flex">Investimento</div>
        <h2 className="section-title mt-4 text-foreground">
          Um programa completo com{" "}
          <span className="text-accent">o melhor custo-benefício</span> do mercado.
        </h2>
      </div>

      <div className="mt-14 max-w-2xl mx-auto">
        <div id="pricing-card" className="relative scroll-mt-24 rounded-2xl border-2 border-primary bg-surface-3/95 backdrop-blur-md shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.6)] overflow-hidden">
          {/* top selo */}
          <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <Lock className="h-3.5 w-3.5" /> Vagas limitadas · Início 06/07/2026
          </div>

          <div className="p-7 md:p-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-foreground leading-tight text-center">
              Programa de Formação Profissional Lean
            </h3>

            <div className="mt-5 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground font-bold">
              82h de aulas + 8h de coaching para certificação
            </div>

            {/* Ancoragem */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-bold">
                  De
                </span>
                <span className="font-numeric text-3xl text-muted-foreground line-through decoration-destructive/70 decoration-[3px]">
                  R$ 5.997,00
                </span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-accent font-bold">
                Por apenas
              </div>
            </div>

            {/* Opção 1 destaque */}
            <div className="mt-4 rounded-xl border border-accent/40 bg-accent/5 p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full whitespace-nowrap">
                Melhor oferta
              </span>
              <div className="text-xs uppercase tracking-wider text-accent font-bold">
                💰 À vista no Pix — 5% de desconto
              </div>
              <div className="mt-2 font-numeric text-5xl md:text-6xl text-foreground whitespace-nowrap">
                R$ 3.040<span className="text-2xl md:text-3xl">,00</span>
              </div>
              <div className="mt-1 text-sm text-accent font-semibold">
                Economia de R$ 2.957,00 em relação ao valor cheio
              </div>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <div className="flex-1 h-px bg-border" />
              ou
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Opção 2 */}
            <div className="rounded-xl border border-border bg-surface-2/80 p-5 text-center">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                💳 Parcelado no cartão — sem juros
              </div>
              <div className="mt-1 font-numeric text-4xl text-foreground">
                6x de R$ 533<span className="text-2xl">,33</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Total R$ 3.200,00 · sem acréscimos
              </div>
            </div>

            <a
              href="#pricing-card"
              className="group mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_hsl(var(--accent)/0.6)]"
            >
              Garantir minha vaga agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-5 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" /> Ambiente seguro · Início 06/07/2026 · Vagas limitadas
            </div>

            {/* Divisor */}
            <div className="mt-8 mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <div className="flex-1 h-px bg-border" />
              O que está incluso
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Inclusos */}
            <ul className="space-y-2.5 text-sm">
              {included.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent font-bold shrink-0">✓</span>
                  <span className="text-foreground/85">{i}</span>
                </li>
              ))}
              <li className="flex gap-3">
                <span className="text-primary font-bold shrink-0">★</span>
                <span className="text-foreground font-semibold">
                  Certificado Programa de Formação Profissional Lean — Gemba Group
                </span>
              </li>
            </ul>

            {/* Divisor final */}
            <div className="mt-8 mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <div className="flex-1 h-px bg-border" />
              <div className="flex-1 h-px bg-border" />
            </div>

            <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">
              Invista na sua carreira com o 1º e mais respeitado programa do país, com a chancela exclusiva e metodologia criada pelo <span className="text-foreground font-semibold">Gemba Group</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
