export const PromiseSection = () => (
  <section
    className="py-14 lg:py-20 relative overflow-hidden"
    style={{ background: "var(--gradient-deep)" }}
  >
    <div className="absolute inset-0 bg-blueprint-fine opacity-50 pointer-events-none" />
    <div className="absolute top-1/2 right-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
    <div className="container relative z-10">
      <div className="max-w-3xl">
        <div className="label-eyebrow">O que você conquista com o programa</div>
        <h2 className="section-title mt-4 text-foreground">
          Aprenda a enxergar o que a maioria não vê — e transforme isso em{" "}
          <span className="text-accent">resultado para sua empresa.</span>
        </h2>
      </div>

      <blockquote className="mt-12 max-w-4xl card-glass rounded-xl p-8 md:p-10 border-l-4 !border-l-accent relative">
        <span className="absolute top-4 left-6 text-6xl text-accent/30 font-display leading-none">
          “
        </span>
        <p className="italic text-lg md:text-xl leading-relaxed text-foreground/90 pl-6">
          O Programa de Formação Profissional Lean não ensina teoria de prateleira. Ensina o Lean
          que <span className="not-italic font-bold text-accent">funciona no chão de fábrica e no escritório</span>,
          aplicado por consultores que vivem essa realidade. Ao final das 20 ferramentas, você não é mais
          alguém que "conhece Lean". Você é um agente de transformação que sabe onde estão os desperdícios
          e como eliminá-los — sistematicamente, com método e com resultado mensurável.
        </p>
      </blockquote>
    </div>
  </section>
);

export default PromiseSection;
