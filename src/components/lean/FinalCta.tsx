import { ArrowRight } from "lucide-react";

export const FinalCta = () => (
  <section className="py-16 lg:py-24 bg-surface-mid relative overflow-hidden">
    <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/15 blur-3xl pointer-events-none"
    />
    <div className="container relative z-10 max-w-3xl text-center">
      <h2 className="font-display font-bold uppercase text-foreground leading-[0.95] text-4xl md:text-6xl tracking-tight">
        Quem enxerga desperdício onde os outros não veem é{" "}
        <span className="text-accent">o profissional que mais vale.</span>
      </h2>
      <p className="mt-7 text-lg text-muted-foreground leading-relaxed">
        O Programa de Formação Profissional Lean da Gemba Group te dá as 20 ferramentas para fazer
        exatamente isso — e sair com um projeto real de transformação no portfólio. A turma começa em{" "}
        <span className="text-foreground font-semibold">06 de julho</span>. As vagas são limitadas. Comece agora.
      </p>
      <a
        href="#pricing"
        className="group mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_hsl(var(--accent)/0.6)]"
      >
        Quero minha vaga no Programa Lean
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
      <div className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">
        Início 06/07/2026 · Terças e quintas · 19h30–22h30 · Online ao vivo · Microsoft Teams
      </div>
    </div>
  </section>
);

export default FinalCta;
