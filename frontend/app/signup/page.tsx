"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.detail || "Signup failed")
      }

      setSuccess("Account created successfully! Redirecting...")
      
      setTimeout(() => {
        router.push("/login")
      }, 1500)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-black">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-[380px]">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white p-3 rounded-lg font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm text-center">{success}</p>
          )}

        </form>

        <p className="text-gray-300 text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}
