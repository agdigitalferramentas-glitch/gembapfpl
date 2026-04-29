import firjan from "@/assets/logos/firjan.svg";
import frisia from "@/assets/logos/frisia.svg";
import kapazi from "@/assets/logos/kapazi.svg";
import nhs from "@/assets/logos/nhs.svg";
import renault from "@/assets/logos/renault.svg";
import riosulense from "@/assets/logos/riosulense.svg";
import senai from "@/assets/logos/senai.svg";
import sicredi from "@/assets/logos/sicredi.svg";
import valmet from "@/assets/logos/valmet.svg";
import aeroflex from "@/assets/logos/aeroflex.svg";

const logos = [
  { src: senai, alt: "SENAI" },
  { src: firjan, alt: "FIRJAN" },
  { src: renault, alt: "Renault" },
  { src: sicredi, alt: "Sicredi" },
  { src: valmet, alt: "Valmet" },
  { src: nhs, alt: "NHS" },
  { src: frisia, alt: "Frísia" },
  { src: riosulense, alt: "Riosulense" },
  { src: kapazi, alt: "Kapazi" },
  { src: aeroflex, alt: "Aeroflex" },
];

export const LogosMarquee = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="py-10 lg:py-12 bg-surface-deep border-y border-white/5 overflow-hidden">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Método validado e aplicado em empresas de todos os portes e setores.
        </p>
      </div>

      <div className="relative group">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-deep to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-deep to-transparent z-10" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 md:px-10 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
