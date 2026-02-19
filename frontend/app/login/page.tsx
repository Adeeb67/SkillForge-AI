"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const data = await login(email, password);

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        router.push("/dashboard");
      } else {
        alert(data.detail || "Login failed");
      }
    } catch (error) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8 border rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to SkillForge
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full py-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
