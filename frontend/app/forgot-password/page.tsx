"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendReset = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Something went wrong");
      } else {
        setSent(true);
      }
    } catch (err) {
      setError("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h1 className="text-5xl font-extrabold mb-10">SkillForge AI</h1>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Reset Password
        </h2>

        {sent ? (
          <p className="text-green-400 text-center">
            Reset link sent to your email ✅
          </p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className="text-red-400 text-sm mb-3 text-center">
                {error}
              </p>
            )}

            <button
              onClick={sendReset}
              disabled={loading}
              className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
