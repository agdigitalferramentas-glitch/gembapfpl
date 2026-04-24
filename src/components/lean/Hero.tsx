import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20", suffix: "módulos", label: "Ferramentas Lean completas" },
  { value: "+30mil", label: "Profissionais formados" },
  { value: "+1Bi", label: "Em ganhos gerados" },
  { value: "17", suffix: "anos", label: "Referência nacional" },
];

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
      <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-15%] h-[360px] w-[360px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 pt-12 pb-14 lg:pt-20 lg:pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent backdrop-blur">
          <span className="pulse-dot" />
          Gemba Group &amp; Produzzi — 17 anos transformando operações
        </div>

        {/* Title */}
        <h1 className="hero-title mt-8 text-foreground">
          <span className="block">Profissional</span>
          <span className="block text-accent">LEAN</span>
          <span className="block text-muted-foreground text-[0.42em] font-semibold tracking-normal mt-3 normal-case">
            Programa de Formação
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
          O programa completo para quem quer enxergar desperdícios, transformar processos e se tornar
          um <span className="text-foreground font-semibold">agente de mudança reconhecido</span> na sua empresa —
          com 20 módulos das principais ferramentas Lean aplicadas na prática.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_hsl(var(--accent)/0.55)]"
          >
            Quero ser um Profissional Lean
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#modules"
            className="text-sm font-semibold text-accent hover:text-accent-strong underline-offset-4 hover:underline"
          >
            Ver os 20 módulos do programa →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-accent/15 border border-accent/15 rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface-3/80 px-5 py-6">
              <div className="flex items-baseline gap-2">
                <span className="stat-value">{s.value}</span>
                {s.suffix && (
                  <span className="font-display text-lg uppercase tracking-wider text-foreground/80">
                    {s.suffix}
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
