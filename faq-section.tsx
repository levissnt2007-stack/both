import Image from "next/image"

const categories = [
  {
    image: "https://i.postimg.cc/J0LwwvP1/Chat-GPT-Image-23-de-mai-de-2026-06-57-25.png",
    title: "DESAYUNO",
    description: "Pasteles, panes, wraps, omelettes, bocadillos y desayunos saludables para el dia a dia.",
    badge: "24 RECETAS"
  },
  {
    image: "https://i.postimg.cc/YSYbc9VQ/Chat-GPT-Image-23-de-mai-de-2026-07-00-49.png",
    title: "DULCES Y POSTRES",
    description: "Brownies, churros, crepes, arroz dulce, cheesecakes y postres sin azucar refinada.",
    badge: "30 RECETAS"
  },
  {
    image: "https://i.postimg.cc/7PW7V4tb/Chat-GPT-Image-23-de-mai-de-2026-07-04-09.png",
    title: "PLATOS, ALMUERZOS Y CENA",
    description: "Comidas completas, wraps, carnes, pollo, ensaladas y recetas saludables hechas en casa.",
    badge: "46 RECETAS"
  }
]

export function CategoriesSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 lg:px-16 bg-secondary/30 section-divider">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14 text-foreground text-balance uppercase tracking-wide">
          EXPLORA LAS CATEGORIAS
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#1F7A4D] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {category.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                  {category.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
