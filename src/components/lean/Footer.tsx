import logoGembaGroup from "@/assets/logo-gemba-group.png";

export const Footer = () => (
  <footer className="bg-surface-deep border-t border-primary/30 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logoGembaGroup}
          alt="Gemba Group"
          className="h-12 md:h-14 w-auto"
        />
        <p className="text-xs text-muted-foreground text-center md:text-right max-w-xl leading-relaxed">
          © 2026 Gemba Group. Todos os direitos reservados. Referência Nacional em Lean Six Sigma ·
          Mais de 17 anos transformando operações e formando agentes de mudança.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
