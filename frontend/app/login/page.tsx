"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ AUTO SESSION RESTORE
  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (token) router.push("/dashboard");
  }, []);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.detail || "Login failed");
        return;
      }

      // ✅ REMEMBER ME LOGIC
      if (rememberMe) {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userEmail", email);
      } else {
        sessionStorage.setItem("accessToken", data.access_token);
        sessionStorage.setItem("userEmail", email);
      }

      router.push("/dashboard");
    } catch {
      setLoading(false);
      setError("Server not reachable");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
    bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      {/* TITLE */}
      <h1 className="text-5xl font-extrabold mb-10">
        SkillForge AI
      </h1>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl w-[400px] shadow-2xl">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD + EYE */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 outline-none pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 opacity-80"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* REMEMBER ME */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>

          <Link
            href="/forgot-password"
            className="text-blue-300 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-pink-600 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </main>
  );
}
