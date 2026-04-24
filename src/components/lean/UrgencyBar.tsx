import { ArrowRight } from "lucide-react";

export const UrgencyBar = () => (
  <div className="w-full bg-primary text-primary-foreground">
    <div className="container flex items-center justify-center gap-3 py-2.5 text-center text-sm font-semibold">
      <span aria-hidden>⚙️</span>
      <span>
        Turma Profissional Lean com início em <strong>06/07</strong> — Garanta sua vaga agora!
      </span>
      <a
        href="#pricing"
        className="hidden md:inline-flex items-center gap-1 rounded-md border border-white/30 bg-white/10 px-2.5 py-1 text-xs uppercase tracking-widest hover:bg-white/20 transition"
      >
        Inscrições abertas <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  </div>
);

export default UrgencyBar;
