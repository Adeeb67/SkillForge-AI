"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMe, addXP, askAITutor } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    async function load() {
      const data = await getMe();

      if (data.detail) router.push("/login");
      else setUser(data);
    }

    load();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const completeLesson = async () => {
    const updated = await addXP(25);
    setUser((prev: any) => ({ ...prev, ...updated }));
  };

  const askAI = async () => {
    if (!question) return;
    const res = await askAITutor(question);
    setAnswer(res.answer);
  };

  if (!user) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-[#f3f4f8]">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between p-6">

        <div>
          <h1 className="text-2xl font-bold text-indigo-600 mb-10">
            SkillForge
          </h1>

          <nav className="space-y-5 text-gray-600">
            <p className="text-indigo-600 font-medium">Dashboard</p>
            <p>Learning Studio</p>
            <p>Smart Debugger</p>
            <p>Challenges</p>
            <p>Settings</p>
          </nav>
        </div>

        <div className="text-sm text-gray-500">
          <p>{user.email}</p>
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
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <Card title="XP" value={user.xp} />
          <Card title="Level" value={user.level} />
          <Card title="Lessons" value={user.lessons_completed} />
          <Card title="Streak" value={`${user.streak} days`} />

        </div>

        {/* ================= PROGRESS ================= */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="font-semibold mb-4">Progress Action</h3>

          <button
            onClick={completeLesson}
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Complete Lesson (+25 XP)
          </button>
        </div>

        {/* ================= AI ================= */}
        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="font-semibold mb-4">AI Tutor 🤖</h3>

          <div className="flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything about coding..."
              className="flex-1 border rounded-lg p-3"
            />

            <button
              onClick={askAI}
              className="bg-indigo-600 text-white px-6 rounded-lg"
            >
              Ask AI
            </button>
          </div>

          {answer && (
            <div className="mt-5 bg-gray-100 p-4 rounded-lg">
              {answer}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}
