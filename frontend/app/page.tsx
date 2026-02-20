"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/MagneticButton";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#F6F7FB] overflow-hidden">

      {/* ================= CINEMATIC BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* glow orb 1 */}
        <div className="
          absolute top-[-220px] left-[-220px]
          w-[520px] h-[520px]
          bg-indigo-400/30
          blur-[130px]
          rounded-full
          animate-pulse
        "/>

        {/* glow orb 2 */}
        <div className="
          absolute bottom-[-220px] right-[-220px]
          w-[520px] h-[520px]
          bg-purple-400/30
          blur-[130px]
          rounded-full
          animate-pulse
        "/>

        {/* grid texture */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),
          linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
          bg-[size:40px_40px]
        "/>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="
        fixed top-0 w-full z-50
        backdrop-blur-md
        bg-white/70
        border-b border-gray-200
      ">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span className="text-indigo-600">✦</span>
            <span>
              Skill<span className="text-indigo-600">Forge</span> AI
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <button
              onClick={() => router.push("/login")}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Log in
            </button>

            <MagneticButton
              onClick={() => router.push("/signup")}
              className="btn-primary"
            >
              Get Started
            </MagneticButton>
          </motion.div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center text-center pt-44 px-6">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-500 mb-6"
        >
          ● v1.0 Now Live
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-[56px]
            font-semibold
            leading-[64px]
            text-gray-900
            max-w-4xl
          "
        >
          Master Coding with
          <br />
          <span className="gradient-text">
            Adaptive Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="
            mt-6
            max-w-2xl
            text-[18px]
            text-gray-600
          "
        >
          The all-in-one platform that adapts to your learning style.
          Debug smarter, learn faster, and level up your dev career
          with gamified challenges.
        </motion.p>

        {/* HERO BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex gap-4 mt-10"
        >
          <MagneticButton
            onClick={() => router.push("/signup")}
            className="btn-primary px-8 py-4 rounded-xl"
          >
            Start Learning Free →
          </MagneticButton>

          <MagneticButton
            onClick={() => router.push("/login")}
            className="card px-8 py-4 rounded-xl"
          >
            View Demo
          </MagneticButton>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="
        max-w-6xl
        mx-auto
        grid md:grid-cols-3
        gap-8
        mt-32
        px-6
        pb-28
      ">
        {[
          {
            title: "Adaptive Learning",
            desc: "AI tracks weak spots and customizes curriculum in real-time.",
          },
          {
            title: "Smart Debugger",
            desc: "Paste code and get instant analysis with intelligent fixes.",
          },
          {
            title: "Gamified Growth",
            desc: "Earn XP, badges and streaks while building real projects.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18 }}
            className="
              card
              group
              p-8
              border
              hover:border-indigo-300
              backdrop-blur-lg
            "
          >
            <h3 className="
              text-xl
              font-semibold
              mb-3
              group-hover:text-indigo-600
              transition
            ">
              {feature.title}
            </h3>

            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
