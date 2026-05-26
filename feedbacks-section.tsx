const CHECKOUT_URL = "https://pay.hotmart.com/D105957785P?checkoutMode=10"

export function CTASection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 bg-[#1F7A4D]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance uppercase tracking-wide">
          EMPIEZA HOY A COMER MEJOR
        </h2>
        <p className="text-lg md:text-xl text-white/85 mb-8">
          100 recetas equilibradas y deliciosas te esperan
        </p>

        <a
          href={CHECKOUT_URL}
          className="inline-block bg-white hover:bg-white/95 text-[#1F7A4D] px-10 py-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 uppercase"
        >
          COMPRAR AHORA $4,90
        </a>

        <p className="mt-5 text-sm text-white/75">
          Acceso inmediato en tu correo electronico. Pago unico. Descarga cuando quieras.
        </p>
      </div>
    </section>
  )
}
