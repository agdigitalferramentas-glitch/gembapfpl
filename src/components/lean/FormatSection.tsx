const items = [
  {
    icon: "🖥️",
    title: "100% Online ao Vivo",
    text: "Aulas ao vivo via Microsoft Teams. Interação real com instrutor, dúvidas respondidas no momento e aprendizado aplicado.",
  },
  {
    icon: "📅",
    title: "Terças e Quintas — 19h30 às 22h30",
    text: "Início em 06/07/2026. Formato noturno para quem não abre mão do trabalho para estudar.",
  },
  {
    icon: "📋",
    title: "20 Módulos de Ferramentas Lean",
    text: "Do 5S ao SIPOC, passando por Kaizen, TPM, MFV, SMED e muito mais — o programa mais completo do mercado.",
  },
  {
    icon: "🎓",
    title: "Certificação Gemba Group",
    text: "Certificado reconhecido no mercado com validade ampla nas principais indústrias e empresas que adotam o sistema Lean.",
  },
  {
    icon: "🛠️",
    title: "Projeto Real com A3 Estratégico",
    text: "Você desenvolve um projeto A3 real na sua empresa, com escopo aprovado pela liderança, indicadores e validação do gestor.",
  },
];

export const FormatSection = () => (
  <section
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: "var(--gradient-deep)" }}
  >
    <div className="absolute inset-0 bg-blueprint-fine opacity-40 pointer-events-none" />
    <div className="container relative z-10">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Como funciona</div>
        <h2 className="section-title mt-4 text-foreground">
          Online, ao vivo, com projeto real.{" "}
          <span className="text-accent">Sem desculpas para não começar.</span>
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i) => (
          <article
            key={i.title}
            className="card-glass rounded-xl p-7 transition-all hover:-translate-y-1 hover:!border-accent"
          >
            <div className="text-3xl text-accent">{i.icon}</div>
            <h3 className="mt-4 font-display font-bold text-xl uppercase text-foreground">
              {i.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{i.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FormatSection;
