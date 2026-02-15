"use client"

import { useState } from "react"

export default function ATSMatchPage() {
  const [resume, setResume] = useState<File | null>(null)
  const [jd, setJd] = useState("")
  const [score, setScore] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!resume || !jd) {
      alert("Please upload resume and enter job description")
      return
    }

    setLoading(true)

    // 🔧 TEMP MOCK SCORE (backend integration next step)
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 40) + 60)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] text-white px-10 py-10">

      <h1 className="text-4xl font-bold mb-10">📊 ATS Resume Match</h1>

      <div className="max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            className="w-full text-black p-2 rounded"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Paste Job Description</label>
          <textarea
            rows={6}
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            className="w-full text-black p-3 rounded"
            placeholder="Paste job description here..."
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-indigo-600 py-3 rounded-xl hover:bg-indigo-700 transition text-lg font-semibold"
        >
          {loading ? "Analyzing..." : "Check ATS Match"}
        </button>

        {/* Result */}
        {score !== null && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-2">ATS Match Score</h2>
            <p className="text-5xl font-extrabold text-green-400">{score}%</p>
          </div>
        )}

      </div>
    </div>
  )
}
