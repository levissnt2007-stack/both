import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, BookOpen, Heart, Users, Sparkles, ArrowRight, Clock, ChefHat } from "lucide-react"

const benefits = [
  { emoji: "📖", text: "100 recetas completas" },
  { emoji: "🥗", text: "Desayunos, comidas, cenas y snacks" },
  { emoji: "⚡", text: "Recetas faciles y rapidas" },
  { emoji: "😋", text: "Opciones equilibradas y deliciosas" },
  { emoji: "👨‍👩‍👧‍👦", text: "Recetas para toda la familia" },
  { emoji: "📱", text: "Formato PDF descargable" },
]

const features = [
  { icon: Clock, title: "Recetas Rapidas", description: "Platos listos en menos de 30 minutos" },
  { icon: Heart, title: "Control de Glucosa", description: "Ingredientes seleccionados para cuidar tu salud" },
  { icon: ChefHat, title: "Faciles de Preparar", description: "Instrucciones paso a paso para todos los niveles" },
  { icon: Users, title: "Para Toda la Familia", description: "Sabores que encantan a pequeños y grandes" },
]

const testimonials = [
  { name: "Maria Garcia", role: "Madre de familia", content: "Las recetas son deliciosas y muy faciles de seguir!", rating: 5 },
  { name: "Carlos Rodriguez", role: "Paciente diabetico", content: "Por fin puedo disfrutar de comidas sabrosas sin preocuparme.", rating: 5 },
  { name: "Ana Martinez", role: "Nutricionista", content: "Recomiendo este ebook a todos mis pacientes.", rating: 5 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Recetas Saludables</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">Beneficios</a>
            <a href="#recetas" className="text-sm font-medium hover:text-primary transition-colors">Recetas</a>
            <a href="#testimonios" className="text-sm font-medium hover:text-primary transition-colors">Testimonios</a>
          </nav>
          <Button className="btn-green">Obtener Ebook</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Nuevo Ebook Digital
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              100 Recetas Deliciosas Para <span className="text-primary">Diabeticos</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Descubre recetas faciles, equilibradas y deliciosas para cuidar tu glucosa sin sacrificar el sabor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-green gap-2">
                Descargar Ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">Ver Recetas</Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Recetas saludables"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">+1000 Descargas</p>
                  <p className="text-sm text-muted-foreground">Este mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-20 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Que Encontraras?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para preparar comidas deliciosas y saludables
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recetas" className="py-16 md:py-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por Que Elegir Nuestras Recetas?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Cada receta esta pensada para ofrecerte lo mejor</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 md:py-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Usuarios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Miles de personas ya disfrutan de estas recetas</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza a Cocinar Saludable Hoy</h2>
          <p className="mb-8 opacity-90 max-w-md mx-auto">
            Obtén acceso inmediato a 100 recetas deliciosas para diabeticos
          </p>
          <Button size="lg" variant="secondary" className="gap-2 btn-green">
            Descargar Ebook - Solo $19.99
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Recetas Saludables</span>
              </div>
              <p className="text-sm text-muted-foreground">Recetas deliciosas y saludables para toda la familia.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Inicio</a></li>
                <li><a href="#" className="hover:text-primary">Beneficios</a></li>
                <li><a href="#" className="hover:text-primary">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Terminos de Uso</a></li>
                <li><a href="#" className="hover:text-primary">Politica de Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Recetas Saludables. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
