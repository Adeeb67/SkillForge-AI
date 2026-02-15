"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RolePredictionPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handlePredict = () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    // Simulated AI logic (same style as ATS / Resume Score)
    setTimeout(() => {
      const name = file.name.toLowerCase();

      if (name.includes("data")) setResult("Data Analyst");
      else if (name.includes("ai") || name.includes("ml"))
        setResult("Machine Learning Engineer");
      else if (name.includes("frontend") || name.includes("react"))
        setResult("Frontend Developer");
      else if (name.includes("backend"))
        setResult("Backend Developer");
      else setResult("Software Engineer");

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-10 py-10">

      {/* HEADER */}
      <div className="mb-10">
        <button
          onClick={() => router.push("/dashboard")}
          className="text-sm opacity-80 hover:opacity-100 mb-4"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-4xl font-extrabold">
          🎯 Role Prediction
        </h1>
        <p className="text-gray-300 mt-2 max-w-xl">
          Upload your resume and let AI predict the best-fit job role for you.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">

        {/* Upload */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Upload Resume (PDF)
          </label>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full bg-white text-black p-2 rounded"
          />
        </div>

        {/* Action */}
        <button
          onClick={handlePredict}
          disabled={!file || loading}
          className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-bold"
        >
          {loading ? "Predicting Role..." : "Predict Role"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 bg-black/40 p-5 rounded-xl text-center">
            <p className="text-sm opacity-80 mb-1">
              Predicted Role
            </p>
            <h2 className="text-2xl font-extrabold text-green-400">
              {result}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
