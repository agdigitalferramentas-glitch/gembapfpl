import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const StickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-surface-deep/95 backdrop-blur border-t border-accent/30 shadow-[0_-10px_40px_-10px_hsl(var(--primary)/0.6)]">
        <div className="container flex items-center justify-between gap-3 py-3">
          <div className="text-xs sm:text-sm text-foreground">
            <span className="font-display font-bold uppercase tracking-wider text-accent">
              Profissional Lean
            </span>
            <span className="hidden sm:inline text-muted-foreground">
              {" "}· Início 06/07 · 6x R$ 533,33 sem juros ou R$ 3.040 à vista
            </span>
          </div>
          <a
            href="#pricing"
            className="group shrink-0 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-strong hover:-translate-y-0.5 transition-all"
          >
            Garantir vaga
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
