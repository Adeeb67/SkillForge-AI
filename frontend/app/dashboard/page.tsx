"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMe, addXP, askAITutor } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const [question, setQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const completeLesson = async () => {
    const updated = await addXP(25);
    setUser((prev: any) => ({
      ...prev,
      ...updated,
    }));
  };

  const askAI = async () => {
    if (!question) return;

    const res = await askAITutor(question);
    setAiAnswer(res.answer);
  };

  useEffect(() => {
    async function loadUser() {
      const data = await getMe();

      if (data.detail) {
        router.push("/login");
      } else {
        setUser(data);
      }
    }

    loadUser();
  }, []);

  // Loading state
  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-purple-700 to-indigo-700">
        Loading...
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-700 text-white p-8">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
            <p className="opacity-80">Email: {user.email}</p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* PROGRESS CARD */}
        <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl mb-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>

          <ul className="space-y-2">
            <li>XP: {user.xp}</li>
            <li>Level: {user.level}</li>
            <li>Lessons Completed: {user.lessons_completed}</li>
            <li>Streak: {user.streak} days</li>
          </ul>

          <button
            onClick={completeLesson}
            className="mt-5 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg transition"
          >
            Complete Lesson (+25 XP)
          </button>
        </div>

        {/* AI TUTOR */}
        <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">AI Tutor 🤖</h2>

          <div className="flex gap-3">
            <input
              placeholder="Ask a coding question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 p-3 rounded-lg bg-black/40 border border-white/20 outline-none"
            />

            <button
              onClick={askAI}
              className="bg-pink-600 hover:bg-pink-700 px-5 rounded-lg transition"
            >
              Ask AI
            </button>
          </div>

          {aiAnswer && (
            <div className="mt-6 bg-black/40 p-4 rounded-lg">
              <p className="whitespace-pre-line opacity-90">
                {aiAnswer}
              </p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
