"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

const products = [
  {
    image: "https://i.postimg.cc/WbQn2k3X/Chat-GPT-Image-23-de-mai-de-2026-00-32-58.png",
    number: "01",
    title: "100 RECETAS PARA DIABETICOS"
  },
  {
    image: "https://i.postimg.cc/vZLytWL1/Chat-GPT-Image-23-de-mai-de-2026-08-53-27.png",
    number: "02",
    title: "JUGOS PARA DIABETICOS"
  },
  {
    image: "https://i.postimg.cc/YCx19vKp/Chat-GPT-Image-23-de-mai-de-2026-18-53-14.png",
    number: "03",
    title: "RECETAS EN AIR FRYER"
  },
  {
    image: "https://i.postimg.cc/tRw0SgcV/Chat-GPT-Image-23-de-mai-de-2026-19-35-22.png",
    number: "04",
    title: "RECETAS DE HORNO EN 15 MINUTOS"
  }
]

export function PackSection() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true
  })

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 bg-secondary/50 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm tracking-widest text-accent font-semibold mb-4 uppercase">
            RECOMENDADO PARA TI POR ESPECIALISTAS EN NUTRICION
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance uppercase tracking-wide">
            TODO EL PACK COMPLETO PARA DIABETICOS
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Recetas deliciosas, practicas y faciles para ayudarte a comer mejor todos los dias.
          </p>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 bg-white"
                  sizes="25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden overflow-hidden mb-8" ref={emblaRef}>
          <div className="flex gap-4">
            {products.map((product, index) => (
              <div key={index} className="flex-none w-[70%]">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    sizes="70vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-xl p-4 hover:border-accent/30 transition-colors duration-300 text-center"
            >
              <span className="text-xs text-accent font-semibold">{product.number}</span>
              <p className="text-sm font-medium text-foreground mt-1 uppercase tracking-wide">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
