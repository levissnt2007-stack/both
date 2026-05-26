"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Download } from "lucide-react"

const CHECKOUT_URL = "https://pay.hotmart.com/D105957785P?checkoutMode=10"

export function MainOfferSection() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 42 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { minutes: 9, seconds: 42 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => String(num).padStart(2, '0')

  return (
    <section id="oferta" className="py-14 md:py-20 px-4 md:px-8 lg:px-16 section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="bg-card rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10 lg:p-14">
            {/* Product image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="https://i.postimg.cc/WbQn2k3X/Chat-GPT-Image-23-de-mai-de-2026-00-32-58.png"
                  alt="100 Recetas para Diabeticos - Ebook"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Offer details */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Promocion 68% OFF
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
                100 RECETAS PARA DIABETICOS
              </h2>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <Download className="w-4 h-4" />
                <span className="text-sm">+11.147 descargas</span>
              </div>

              <p className="text-base md:text-lg text-muted-foreground">
                100 Recetas deliciosas y equilibradas para tu dia a dia
              </p>

              <div className="flex items-baseline justify-center lg:justify-start gap-4">
                <span className="text-lg text-muted-foreground line-through">$15,31</span>
                <span className="text-5xl md:text-6xl font-bold text-foreground">$4,90</span>
              </div>

              {/* Timer */}
              <div className="bg-secondary rounded-2xl p-5">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="bg-foreground text-background px-6 py-3 rounded-xl text-3xl md:text-4xl font-bold tracking-widest tabular-nums">
                    {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">MIN</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                  El descuento esta activo para ti en este momento. Si el tiempo termina, el precio volvera a la normalidad.
                </p>
              </div>

              <a
                href={CHECKOUT_URL}
                className="block w-full btn-green text-center py-5 rounded-2xl text-lg md:text-xl font-bold tracking-wide uppercase"
              >
                COMPRAR AHORA
              </a>

              <p className="text-sm text-muted-foreground text-center">
                Acceso inmediato en tu correo electronico. Pago unico. Descarga cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
