"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F6F7FB]">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-indigo-600">✨</span>
          <span>SkillForge AI</span>
        </div>

        <div className="flex items-center gap-8 text-gray-600">
          <button>Features</button>
          <button>How it Works</button>
          <button>Stories</button>

          <button
            onClick={() => router.push("/login")}
            className="font-medium"
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center mt-24 px-6">

        <p className="text-sm text-gray-500 mb-6">
          ● v1.0 Now Live
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Master Coding with
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
            Adaptive Intelligence
          </span>
        </h1>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
          The all-in-one platform that adapts to your learning style.
          Debug smarter, learn faster, and level up your dev career.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => router.push("/signup")}
            className="
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            px-8 py-4
            rounded-xl
            shadow-lg
            hover:scale-105
            transition
          "
          >
            Start Learning Free →
          </button>

          <button
            onClick={() => router.push("/signup")}
            className="px-8 py-4 rounded-xl border bg-white"
          >
            View Demo
          </button>
        </div>
      </section>

    </main>
  );
}
