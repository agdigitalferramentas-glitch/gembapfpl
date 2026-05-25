import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import PreCheckoutModal from "./PreCheckoutModal";

const CHECKOUT_URL =
  "https://celcash.celcoin.com.br/landingpage8400068/pfpl-formacao-profissional-lean";

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

export const PricingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
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
          <span className="text-accent">o melhor custo-benefício</span> do{"\u00A0"}mercado.
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
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-bold">
                De
              </div>
              <div className="mt-1">
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
              href="https://wa.me/5541987617531?text=Ol%C3%A1!%20Vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20o%20PFPL!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-sm md:text-base font-bold text-white transition-all hover:bg-[#1ebe57] hover:-translate-y-0.5 shadow-[0_8px_30px_-10px_rgba(37,211,102,0.4)]"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-center">Falar com o comercial</span>
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group mt-3 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-center text-sm md:text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_hsl(var(--accent)/0.6)]"
            >
              <span className="text-center">Garantir minha vaga agora</span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>

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
