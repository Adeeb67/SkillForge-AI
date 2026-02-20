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
      try {
        const data = await getMe();

        if (!data || data.detail) {
          router.push("/login");
        } else {
          setUser(data);
        }
      } catch (err) {
        console.error("User fetch failed:", err);
        router.push("/login");
      }
    }

    loadUser();
  }, [router]);

  /* ================= LOADING STATE ================= */
  if (!user) {
    return (
      <DashboardLayout>
        <div className="min-h-screen bg-[#F6F7FB] p-10">
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
        </div>
      </DashboardLayout>
    );
  }

  /* ================= DASHBOARD ================= */
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#F6F7FB] p-10">

        {/* ---------- TOPBAR ---------- */}
        <Topbar logout={logout} />

        {/* ---------- HEADER ---------- */}
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

          <button className="btn-primary">
            Resume Learning →
          </button>
        </section>

        {/* ---------- STAT CARDS ---------- */}
        <section className="grid grid-cols-4 gap-6 mb-14">
          <StatCard title="XP" value={user.xp ?? 0} />
          <StatCard title="Level" value={user.level ?? 1} />
          <StatCard
            title="Lessons"
            value={user.lessons_completed ?? 0}
          />
          <StatCard
            title="Streak"
            value={`${user.streak ?? 0} days`}
          />
        </section>

        {/* ---------- MAIN GRID ---------- */}
        <section className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <Recommended />
          </div>

          <Leaderboard />
        </section>

      </div>
    </DashboardLayout>
  );
}
