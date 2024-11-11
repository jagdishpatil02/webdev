'use client'
import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface PageProps {
  params: {
    name: string
  }
}

export default function WishesPage({ params }: PageProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const name = decodeURIComponent(params.name)

  useEffect(() => {
    // Start confetti
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    // Play audio
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Audio autoplay was prevented')
      })
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Happy Diwali, {name}!
        </h1>
        <p className="text-xl text-gray-700">
          May the festival of lights bring joy, prosperity, and happiness to your life.
          Let the light illuminate your path and guide you towards success.
        </p>
        <audio
          ref={audioRef}
          src="/diwali-music.mp3"
          loop
          className="hidden"
        />
      </div>
    </main>
  )
} 