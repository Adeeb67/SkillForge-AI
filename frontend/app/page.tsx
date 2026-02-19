import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          🚀 SkillForge AI
        </h1>

        <p className="text-xl opacity-80 mb-8">
          AI Powered Developer Learning Platform
        </p>

        <div className="space-x-4">
          <Link
            href="/login"
            className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Scroll Navigation */}
        <div className="mt-12 space-x-6 text-sm opacity-80">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#stories">Stories</a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Features</h2>

        <p className="max-w-2xl opacity-80">
          SkillForge AI helps developers learn smarter with AI tutors,
          interactive coding challenges, debugging assistants, and
          gamified learning progress.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black/20"
      >
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>

        <div className="max-w-2xl space-y-4 opacity-80">
          <p>1️⃣ Sign up and create your learning profile.</p>
          <p>2️⃣ Choose AI-powered learning modules.</p>
          <p>3️⃣ Practice with real coding challenges.</p>
          <p>4️⃣ Track progress and level up your skills.</p>
        </div>
      </section>

      {/* STORIES */}
      <section
        id="stories"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Success Stories</h2>

        <p className="max-w-2xl opacity-80">
          Thousands of learners improve their coding confidence using
          SkillForge AI's adaptive learning and intelligent feedback
          system.
        </p>
      </section>
    </main>
  );
}
