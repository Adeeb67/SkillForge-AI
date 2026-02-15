export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          🚀 SkillForge AI
        </h1>
        <p className="text-xl opacity-80 mb-8">
          AI Powered Resume Intelligence Platform
        </p>

        <div className="space-x-4">
          <a
            href="/login"
            className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700 transition"
          >
            Login
          </a>

          <a
            href="/signup"
            className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
