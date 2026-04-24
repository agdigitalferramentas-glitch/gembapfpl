const pains = [
  {
    icon: "🔥",
    title: "Apagando incêndios todo dia",
    text: "A rotina virou um ciclo interminável de urgências. Sem processos estáveis e padronizados, cada dia é imprevisível e a equipe opera no limite — sem tempo para melhorar nada.",
  },
  {
    icon: "🗂️",
    title: "Iniciativas que morrem na gaveta",
    text: "Você já tentou implementar melhorias, mas sem uma metodologia estruturada as ações não sustentam e a mudança não pega. Falta o método que conecta ferramenta com resultado.",
  },
  {
    icon: "📦",
    title: "Desperdício invisível drenando o resultado",
    text: "Estoque parado, retrabalho, movimentações desnecessárias, superprodução. São perdas que não aparecem no balancete, mas aparecem no caixa — e você ainda não tem o olhar treinado para enxergá-las.",
  },
  {
    icon: "👷",
    title: "Profissional bom que não se diferencia",
    text: "Você é dedicado, entrega resultado, mas sem uma certificação reconhecida no currículo fica difícil negociar promoções, aumentos e oportunidades em empresas maiores.",
  },
];

export const PainSection = () => (
  <section className="bg-surface-3 py-20 lg:py-28 relative">
    <div className="container">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Você vive alguma dessas situações?</div>
        <h2 className="section-title mt-4 text-foreground">
          Seu processo tem mais desperdício do que você imagina.{" "}
          <span className="text-accent">E você sabe disso.</span>
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {pains.map((p) => (
          <article
            key={p.title}
            className="card-glass relative rounded-lg p-6 md:p-7 border-l-[3px] !border-l-primary transition-all hover:-translate-y-1 hover:!border-l-accent"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0">{p.icon}</div>
              <div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wide text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
