const benefits = [
  "ENVÍO AUTOMÁTICO POST-COMPRA",
  "RECÍBELO EN TU CORREO ELECTRÓNICO",
  "DESCARGABLE E IMPRIMIBLE",
  "ACCESO DE POR VIDA",
  "PAGO ÚNICO",
  "ACTUALIZACIONES FUTURAS GRATUITAS"
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-4 md:gap-5"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none">
                ✔
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
