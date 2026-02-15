"use client"

import { useState } from "react"

export default function ResumeScorePage() {
  const [resume, setResume] = useState<File | null>(null)
  const [score, setScore] = useState<number | null>(null)
  const [tips, setTips] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!resume) {
      alert("Please upload your resume")
      return
    }

    setLoading(true)

    // 🔧 MOCK ANALYSIS (backend wiring next)
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 30) + 65)
      setTips([
        "Add more measurable achievements",
        "Optimize keywords for ATS systems",
        "Improve formatting consistency",
        "Add a strong professional summary",
      ])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-10 py-10">

      <h1 className="text-4xl font-bold mb-10">📄 Resume Score Analyzer</h1>

      <div className="max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">

        {/* Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            className="w-full text-black p-2 rounded"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-emerald-600 py-3 rounded-xl hover:bg-emerald-700 transition text-lg font-semibold"
        >
          {loading ? "Analyzing Resume..." : "Analyze Resume"}
        </button>

        {/* Result */}
        {score !== null && (
          <div className="mt-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Resume Score</h2>
              <p className="text-5xl font-extrabold text-emerald-400">{score}%</p>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Improvement Suggestions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
