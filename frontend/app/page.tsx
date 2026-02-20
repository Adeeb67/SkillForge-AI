"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#F6F7FB] overflow-hidden">

      {/* ---------- CINEMATIC BACKGROUND ---------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* gradient glow */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-400/30 blur-[120px] rounded-full animate-pulse" />

        {/* grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ---------- NAVBAR ---------- */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2 font-semibold text-xl">
            <span className="text-indigo-600">✦</span>
            <span>
              Skill<span className="text-indigo-600">Forge</span> AI
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => router.push("/login")}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Log in
            </button>

            <button
              onClick={() => router.push("/signup")}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="flex flex-col items-center justify-center text-center pt-40 px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-500 mb-6"
        >
          ● v1.0 Now Live
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold leading-tight text-gray-900 max-w-4xl"
        >
          Master Coding with
          <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Adaptive Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-6 max-w-2xl text-lg"
        >
          The all-in-one platform that adapts to your learning style.
          Debug smarter, learn faster, and level up your dev career
          with gamified challenges.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-10"
        >
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
            onClick={() => router.push("/login")}
            className="bg-white border px-8 py-4 rounded-xl hover:bg-gray-50 transition"
          >
            View Demo
          </button>
        </motion.div>
      </section>

      {/* ---------- FEATURE CARDS ---------- */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-32 px-6 pb-24">

        {[
          {
            title: "Adaptive Learning",
            desc: "AI tracks weak spots and customizes curriculum in real-time.",
          },
          {
            title: "Smart Debugger",
            desc: "Paste code and get instant analysis and fixes.",
          },
          {
            title: "Gamified Growth",
            desc: "Earn XP, badges and streaks while building projects.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="
            group
            bg-white/70
            backdrop-blur-lg
            rounded-2xl
            p-8
            border
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition
            "
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
