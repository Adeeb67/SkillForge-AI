"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMe, addXP, askAITutor } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [question, setQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  /* ---------------- XP ---------------- */
  const completeLesson = async () => {
    const updated = await addXP(25);

    setUser((prev: any) => ({
      ...prev,
      ...updated,
    }));
  };

  /* ---------------- AI ---------------- */
  const askAI = async () => {
    if (!question) return;

    const res = await askAITutor(question);
    setAiAnswer(res.answer);
  };

  /* ---------------- LOAD USER ---------------- */
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

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  /* ========================================================= */

  return (
    <div className="flex min-h-screen bg-[#f6f7fb] text-gray-800">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">

        <div>
          <h1 className="text-2xl font-bold mb-10 text-indigo-600">
            SkillForge
          </h1>

          <nav className="space-y-4">
            <p className="font-medium text-indigo-600">Dashboard</p>
            <p className="text-gray-500">Learning Studio</p>
            <p className="text-gray-500">Smart Debugger</p>
            <p className="text-gray-500">Challenges</p>
            <p className="text-gray-500">Settings</p>
          </nav>
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-semibold">{user.email}</p>
          <p>Level {user.level}</p>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">
              Welcome back,
              <span className="text-indigo-600"> Developer</span>
            </h2>
            <p className="text-gray-500 mt-1">
              Keep building momentum 🚀
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <StatCard title="XP" value={user.xp} />
          <StatCard title="Level" value={user.level} />
          <StatCard title="Lessons" value={user.lessons_completed} />
          <StatCard title="Streak" value={`${user.streak} days`} />

        </div>

        {/* ================= ACTION CARD ================= */}
        <div className="bg-white rounded-2xl p-6 shadow mb-10">
          <h3 className="font-semibold mb-4">Progress Action</h3>

          <button
            onClick={completeLesson}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Complete Lesson (+25 XP)
          </button>
        </div>

        {/* ================= AI TUTOR ================= */}
        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="font-semibold mb-4">AI Tutor 🤖</h3>

          <div className="flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything about coding..."
              className="flex-1 border rounded-lg p-3 outline-none"
            />

            <button
              onClick={askAI}
              className="bg-indigo-600 text-white px-6 rounded-lg"
            >
              Ask AI
            </button>
          </div>

          {aiAnswer && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <p className="whitespace-pre-line">{aiAnswer}</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

/* ================= COMPONENT ================= */

function StatCard({ title, value }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}
