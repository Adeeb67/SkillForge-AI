"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/lib/api";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: any) {
    e.preventDefault();

    await signup(email, password);
    router.push("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F6F7FB]">

      <div className="
        bg-white
        rounded-2xl
        shadow-lg
        p-10
        w-[420px]
      ">
        <div className="text-center mb-6">
          <div className="text-indigo-600 text-3xl mb-2">✨</div>
          <h2 className="text-2xl font-semibold">
            Create an account
          </h2>
          <p className="text-gray-500 text-sm">
            Start your adaptive learning journey today
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">

          <div>
            <label className="text-sm">Email</label>
            <input
              className="w-full mt-1 p-3 rounded-lg bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-lg bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="
            w-full
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            py-3
            rounded-lg
            mt-4
            hover:scale-[1.02]
            transition
          "
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-indigo-600 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </main>
  );
}
