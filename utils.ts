const items = [
  { emoji: "📖", text: "100 recetas completas" },
  { emoji: "🥗", text: "Desayunos, comidas, cenas y snacks" },
  { emoji: "⚡", text: "Recetas faciles y rapidas" },
  { emoji: "😋", text: "Opciones equilibradas y deliciosas" },
  { emoji: "👨‍👩‍👧‍👦", text: "Recetas para toda la familia" },
  { emoji: "📱", text: "Formato PDF descargable" }
]

export function WhatYouFindSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 section-divider">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14 text-foreground text-balance uppercase tracking-wide">
          ¿QUE ENCONTRARAS?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 p-5 md:p-6 rounded-xl hover:border-accent/30 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                <span className="text-3xl md:text-4xl" role="img" aria-hidden="true">
                  {item.emoji}
                </span>
                <p className="text-sm md:text-base font-medium text-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
