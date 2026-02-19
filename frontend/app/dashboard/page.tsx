"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMe } from "@/lib/api";
import { addXP } from "@/lib/api";


export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Welcome Back 👋</h1>
        <button onClick={logout}>Logout</button>
      </div>

      <p>Email: {user.email}</p>

      <h3 style={{ marginTop: 20 }}>Your Progress</h3>

      <ul>
        <li>XP: {user.xp}</li>
        <li>Level: {user.level}</li>
        <li>Lessons Completed: {user.lessons_completed}</li>
        <li>Streak: {user.streak} days</li>
      </ul>
    </div>
  );
}
