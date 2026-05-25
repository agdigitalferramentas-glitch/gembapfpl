import { useEffect, useState, type FormEvent } from "react";
import { X, Loader2, Lock } from "lucide-react";

const WEBHOOK_URL =
  "https://automacao.gembagroup.com.br/webhook/29448797-7eed-40a1-923a-70785ac16ab9";

interface PreCheckoutModalProps {
  open: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export const PreCheckoutModal = ({ open, onClose, checkoutUrl }: PreCheckoutModalProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nomeT = nome.trim();
    const emailT = email.trim();
    const telDigits = telefone.replace(/\D/g, "");

    if (!nomeT || nomeT.length < 2) return setError("Informe seu nome completo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailT)) return setError("Informe um e-mail válido.");
    if (telDigits.length < 10) return setError("Informe um telefone válido com DDD.");

    setError(null);
    setSubmitting(true);

    // Dispara webhook sem aguardar para não atrasar o redirect
    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programa_elite: "PFPL TD",
          nome: nomeT,
          telefone: telefone,
          email: emailT,
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* noop */
    }

    window.location.href = checkoutUrl;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pre-checkout-title"
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-2xl border-2 border-primary/40 bg-surface-3 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.6)] overflow-hidden animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-surface-2 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Lock className="h-3.5 w-3.5" /> Falta pouco para garantir sua vaga
        </div>

        <div className="p-6 md:p-8">
          <h3
            id="pre-checkout-title"
            className="font-display font-bold text-2xl uppercase text-foreground leading-tight text-center"
          >
            Preencha seus dados
          </h3>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Em seguida você será direcionado ao ambiente seguro de pagamento.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="pc-nome" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Nome completo *
              </label>
              <input
                id="pc-nome"
                type="text"
                required
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="pc-email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                E-mail *
              </label>
              <input
                id="pc-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                placeholder="voce@email.com"
              />
            </div>

            <div>
              <label htmlFor="pc-tel" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Telefone (WhatsApp) *
              </label>
              <input
                id="pc-tel"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={telefone}
                onChange={(e) => setTelefone(formatPhone(e.target.value))}
                className="w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                placeholder="(11) 99999-9999"
              />
            </div>

            {error && (
              <div className="text-sm text-destructive font-medium" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm md:text-base font-bold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary-strong hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Redirecionando…
                </>
              ) : (
                "Continuar para o Checkout"
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" /> Seus dados estão seguros
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreCheckoutModal;
