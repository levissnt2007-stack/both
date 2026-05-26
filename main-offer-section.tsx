const items = [
  {
    emoji: "🍽️",
    text: "A veces no sabes que cocinar para cuidar mejor tu alimentacion."
  },
  {
    emoji: "📱",
    text: "Te cansas de buscar recetas en TikTok e Instagram y terminas comiendo siempre lo mismo."
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    text: "Buscas comidas deliciosas que tambien gusten a toda la familia."
  },
  {
    emoji: "🍰",
    text: "Quieres disfrutar postres y comidas sin sentir culpa."
  },
  {
    emoji: "⏰",
    text: "Quieres comer mas equilibrado sin pasar horas en la cocina."
  }
]

export function ForYouSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 bg-secondary/50 section-divider">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14 text-foreground text-balance uppercase tracking-wide">
          ESTE LIBRO ES PARA TI SI...
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`bg-card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <span className="text-4xl md:text-5xl" role="img" aria-hidden="true">
                  {item.emoji}
                </span>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
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
