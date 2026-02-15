"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ResetPassword() {
  const { token } = useParams();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetPassword = async () => {
    setError("");

    if (!password || !confirm) {
      setError("All fields required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const res = await fetch(
      `http://127.0.0.1:8000/reset-password/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.detail);
      return;
    }

    localStorage.setItem("accessToken", data.access_token);
    setSuccess(true);

    setTimeout(() => router.push("/dashboard"), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
    bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-900 text-white">

      <h1 className="text-5xl font-extrabold mb-10">
        SkillForge AI
      </h1>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create New Password
        </h2>

        {success ? (
          <p className="text-green-400 text-center">
            ✅ Password reset successful! Redirecting...
          </p>
        ) : (
          <>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="New Password"
                className="w-full p-3 mb-3 rounded-lg bg-white/20 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                👁️
              </span>
            </div>

            <input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-3 mb-3 rounded-lg bg-white/20 outline-none"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            {error && (
              <p className="text-red-400 text-center mb-3">
                {error}
              </p>
            )}

            <button
              onClick={resetPassword}
              disabled={loading}
              className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-700"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
