import { Check } from "lucide-react"

const PACK_CHECKOUT_URL = "https://pay.hotmart.com/T105982561O?checkoutMode=10"

const included = [
  "Jugos para diabeticos",
  "Recetas rapidas en Air Fryer",
  "Recetas de horno en 15 minutos",
  "Acceso inmediato y digital"
]

export function PackOfferSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 section-divider">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 border border-accent/20">
          <div className="text-center mb-8">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase">
              PACK COMPLETO
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance uppercase tracking-wide">
              100 RECETAS PARA DIABETICOS + 3 BONOS EXCLUSIVOS
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-base text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-baseline justify-center gap-4 mb-5">
            <span className="text-lg text-muted-foreground line-through">$39,99</span>
            <span className="text-5xl md:text-6xl font-bold text-foreground">$6,90</span>
          </div>

          <div className="text-center mb-6">
            <span className="inline-block bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              OFERTA ESPECIAL
            </span>
          </div>

          <a
            href={PACK_CHECKOUT_URL}
            className="block w-full btn-green text-center py-5 rounded-2xl text-xl font-bold tracking-wide uppercase"
          >
            COMPRAR AHORA $6,90
          </a>

          <p className="text-sm text-muted-foreground text-center mt-5">
            Acceso inmediato en tu correo electronico. Pago unico. Descarga cuando quieras.
          </p>
        </div>
      </div>
    </section>
  )
}
