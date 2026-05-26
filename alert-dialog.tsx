"use client"

import { useState, useEffect } from "react"

const messages = [
  "⌛ CUPOS LIMITADOS ⌛",
  "🔥 PROMOCIÓN ESPECIAL ACTIVA 🔥"
]

export function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary py-2.5">
      <p 
        className={`text-center text-xs md:text-sm font-medium text-primary-foreground tracking-wider transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[currentIndex]}
      </p>
    </div>
  )
}
