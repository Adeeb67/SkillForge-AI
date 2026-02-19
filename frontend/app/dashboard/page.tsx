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

  if (!user) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Welcome Back 👋</h1>
        <button onClick={logout}>Logout</button>
      </div>

      {/* USER INFO */}
      <p>Email: {user.email}</p>

      {/* PROGRESS */}
      <h3 style={{ marginTop: 20 }}>Your Progress</h3>

      <ul>
        <li>XP: {user.xp}</li>
        <li>Level: {user.level}</li>
        <li>Lessons Completed: {user.lessons_completed}</li>
        <li>Streak: {user.streak} days</li>
      </ul>

      {/* XP BUTTON */}
      <button
        onClick={completeLesson}
        style={{
          marginTop: 20,
          padding: "10px 16px",
          background: "green",
          color: "white",
          borderRadius: "6px",
        }}
      >
        Complete Lesson (+25 XP)
      </button>

      {/* AI TUTOR */}
      <div style={{ marginTop: 40 }}>
        <h3>AI Tutor 🤖</h3>

        <input
          placeholder="Ask a coding question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />

        <button
          onClick={askAI}
          style={{
            marginLeft: 10,
            padding: "8px 12px",
            background: "purple",
            color: "white",
          }}
        >
          Ask AI
        </button>

        {aiAnswer && (
          <p style={{ marginTop: 20, whiteSpace: "pre-line" }}>
            {aiAnswer}
          </p>
        )}
      </div>
    </div>
  );
}
