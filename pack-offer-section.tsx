import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Text content - centered */}
        <div className="text-center space-y-5 md:space-y-6 mb-8 md:mb-10 animate-fade-in-up">
          <p className="text-sm md:text-base text-accent font-semibold tracking-wide uppercase">
            +1.377 diabeticos ya transformaron su alimentacion
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight text-foreground text-balance uppercase tracking-wide">
            YA DESCUBRIERON COMO COMER BIEN SIN VIVIR CON MIEDO A QUE EL AZUCAR SE DISPARE
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Comidas simples, deliciosas y pensadas para ayudarte a cuidar la glucosa, sin convertir tu vida en una lista infinita de prohibiciones.
          </p>
        </div>

        {/* Hero image - large and centered */}
        <div className="animate-fade-in-up animation-delay-200">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://i.postimg.cc/66mSxhNY/Chat-GPT-Image-24-de-mai-de-2026-10-41-41-1.webp"
              alt="100 Recetas para Diabeticos - Ebook y mujer cocinando"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
