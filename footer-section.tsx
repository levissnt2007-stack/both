"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo recibiré el libro después de comprarlo?",
    answer: "Inmediatamente después de realizar tu compra, recibirás un correo electrónico con el enlace de descarga. Podrás acceder al ebook en formato PDF desde cualquier dispositivo."
  },
  {
    question: "¿Necesito experiencia en cocina?",
    answer: "No, las recetas están diseñadas para todos los niveles. Incluyen instrucciones paso a paso, fáciles de seguir, con ingredientes accesibles que puedes encontrar en cualquier supermercado."
  },
  {
    question: "¿Por qué comprar este libro digital?",
    answer: "Este ebook te ofrece 200 recetas equilibradas pensadas específicamente para ayudar a controlar los niveles de glucosa, sin sacrificar el sabor. Ahorrarás tiempo buscando recetas y tendrás variedad para toda la familia."
  },
  {
    question: "¿Cómo funciona el pago?",
    answer: "El pago es único y seguro. Aceptamos tarjetas de crédito, débito y otros métodos de pago populares. Una vez confirmado el pago, recibirás acceso inmediato al contenido."
  },
  {
    question: "¿Puedo verlo desde el celular?",
    answer: "¡Sí! El ebook está en formato PDF, compatible con cualquier dispositivo: celular, tablet, computadora o puedes imprimirlo si lo prefieres."
  },
  {
    question: "¿Las recetas son difíciles?",
    answer: "No, todas las recetas son fáciles y rápidas de preparar. La mayoría requiere menos de 30 minutos y usa ingredientes que probablemente ya tienes en tu cocina."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-14 md:mb-20 text-foreground text-balance uppercase tracking-wide">
          PREGUNTAS FRECUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-secondary/50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
