"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"

const feedbacks = [
  "https://i.postimg.cc/8cLhBd4Y/1.webp",
  "https://i.postimg.cc/PJ1mzbyR/2.webp",
  "https://i.postimg.cc/NFR178DW/3.webp",
  "https://i.postimg.cc/D01qdQ6C/4.webp",
  "https://i.postimg.cc/nrqvYK2S/5.webp",
  "https://i.postimg.cc/wMDhc52k/6.webp",
  "https://i.postimg.cc/yx0FXhjh/7.webp",
  "https://i.postimg.cc/qRPs3Dsx/8.webp",
  "https://i.postimg.cc/Zn6rFPHc/9.webp",
  "https://i.postimg.cc/hjkLdZLZ/10.webp"
]

export function FeedbacksSection() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      dragFree: true
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  )

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-14 md:mb-20 text-foreground leading-relaxed text-balance uppercase tracking-wide">
          LO QUE NUESTRAS CLIENTAS DICEN SOBRE NUESTRAS RECETAS
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {feedbacks.map((feedback, index) => (
              <div 
                key={index}
                className="flex-none w-[calc(100vw-3rem)] sm:w-[400px] md:w-[480px] lg:w-[540px]"
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ aspectRatio: '1448/1086' }}>
                  <Image
                    src={feedback}
                    alt={`Testimonio de cliente ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 768px) 400px, (max-width: 1024px) 480px, 540px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-bold text-foreground">4.9/5</p>
          <p className="text-sm md:text-base text-muted-foreground">+1.377 Clientes Valoraron</p>
        </div>
      </div>
    </section>
  )
}
