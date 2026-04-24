import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: "wJQeUW8ZQQA",
    name: "Aluno Gemba",
    role: "Profissional Lean — Indústria",
    quote: "O programa mudou minha forma de enxergar processos no chão de fábrica.",
  },
  {
    id: "cnA_jrJDcRU",
    name: "Aluno Gemba",
    role: "Liderança Operacional",
    quote: "Saí com método claro para liderar transformações reais.",
  },
  {
    id: "YhS3Fz6iEYk",
    name: "Aluno Gemba",
    role: "Engenharia de Processos",
    quote: "As ferramentas Lean aplicadas geraram resultado mensurável já no primeiro projeto.",
  },
  {
    id: "mCfsnekzJ0o",
    name: "Aluno Gemba",
    role: "Gestor de Operações",
    quote: "Conteúdo direto, prático e com aplicação imediata no dia a dia.",
  },
  {
    id: "VRcPrcZigHM",
    name: "Aluno Gemba",
    role: "Profissional de Melhoria Contínua",
    quote: "A formação mais completa de Lean que encontrei no mercado.",
  },
];

const ytThumb = (id: string) =>
  // hqdefault tem framing centrado no rosto e sem barras pretas
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const TestimonialsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-14 lg:py-20 bg-surface-2 relative">
      <div className="container">
        <div className="max-w-3xl">
          <div className="label-eyebrow">Depoimentos de quem viveu</div>
          <h2 className="section-title mt-4 text-foreground">
            O que dizem os profissionais{" "}
            <span className="text-accent">formados pela Gemba.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setOpenId(t.id)}
              className="group text-left card-glass rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:!border-accent hover:shadow-[0_18px_40px_-15px_hsl(var(--accent)/0.45)]"
              aria-label={`Assistir depoimento de ${t.name}`}
            >
              {/* Thumb com crop/zoom no rosto + overlay para esconder qualquer texto */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-deep">
                <img
                  src={ytThumb(t.id)}
                  alt={`Depoimento de ${t.name}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover scale-[1.55] translate-y-[-4%] group-hover:scale-[1.62] transition-transform duration-700"
                  style={{ filter: "saturate(1.05) contrast(1.05)" }}
                />
                {/* Vinheta + escurecimento topo/base para sumir com qualquer overlay residual */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,hsl(var(--surface-deep))_100%)]" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-deep/95 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-deep via-surface-deep/85 to-transparent" />

                {/* Tint azul sutil para integrar à paleta */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-accent/30 blur-xl group-hover:bg-accent/60 transition-colors" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.7)] group-hover:bg-primary-strong group-hover:scale-110 transition-all">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Texto sobreposto */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">
                    ▶ Depoimento em vídeo
                  </div>
                  <div className="mt-2 font-display font-bold text-lg uppercase text-foreground leading-tight">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>

              <div className="p-5 border-t border-accent/15">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal player */}
      <Dialog open={!!openId} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="max-w-3xl p-0 border-accent/30 bg-surface-deep overflow-hidden [&>button]:hidden">
          <DialogTitle className="sr-only">Depoimento em vídeo</DialogTitle>
          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="absolute top-3 right-3 z-10 rounded-full bg-surface-deep/80 hover:bg-primary text-foreground hover:text-primary-foreground p-2 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="aspect-video w-full bg-black">
            {openId && (
              <iframe
                key={openId}
                src={`https://www.youtube.com/embed/${openId}?autoplay=1&rel=0&modestbranding=1`}
                title="Depoimento Gemba Group"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;
