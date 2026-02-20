"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/DashboardLayout";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import Recommended from "@/components/Recommended";
import Leaderboard from "@/components/Leaderboard";

import { getMe } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  /* ---------------- LOAD USER ---------------- */
  useEffect(() => {
    async function loadUser() {
      const data = await getMe();

      if (data?.detail) {
        router.push("/login");
      } else {
        setUser(data);
      }
    }

    loadUser();
  }, []);

  /* ---------------- LOADING STATE ---------------- */
  if (!user) {
    return (
      <DashboardLayout>
        <main className="ml-64 w-full min-h-screen bg-[#F6F7FB] p-10">
          <div className="animate-pulse space-y-6">
            <div className="h-10 w-64 bg-gray-200 rounded-lg" />
            <div className="grid grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-gray-200 rounded-xl"
                />
              ))}
            </div>
          </div>
        </main>
      </DashboardLayout>
    );
  }

  /* ---------------- DASHBOARD ---------------- */
  return (
    <DashboardLayout>
      <main className="ml-64 w-full min-h-screen bg-[#F6F7FB] p-10">

        {/* TOPBAR */}
        <Topbar logout={logout} />

        {/* ================= HEADER ================= */}
        <section className="flex items-center justify-between mb-12">

          <div className="space-y-2">
            <h1 className="text-[34px] font-semibold leading-tight">
              Welcome back{" "}
              <span className="gradient-text">
                Developer
              </span>
            </h1>

            <p className="text-gray-500 text-[15px]">
              Keep building momentum 🚀
            </p>
          </div>

          {/* Resume Button */}
          <button className="btn-primary">
            Resume Learning →
          </button>

        </section>

        {/* ================= STAT CARDS ================= */}
        <section className="grid grid-cols-4 gap-6 mb-14">

          <StatCard title="XP" value={user.xp} />
          <StatCard title="Level" value={user.level} />
          <StatCard
            title="Lessons"
            value={user.lessons_completed}
          />
          <StatCard
            title="Streak"
            value={`${user.streak} days`}
          />

        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="grid grid-cols-3 gap-8">

          {/* Recommended */}
          <div className="col-span-2">
            <Recommended />
          </div>

          {/* Leaderboard */}
          <div>
            <Leaderboard />
          </div>

        </section>

      </main>
    </DashboardLayout>
  );
}
