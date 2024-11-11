'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim()) {
      router.push(`/wishes/${encodeURIComponent(name)}`)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create Diwali Wishes</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Generate Wishes
          </button>
        </form>
      </div>
    </main>
  )
} 