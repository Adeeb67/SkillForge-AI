"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PageWrapper from "@/components/PageWrapper";
import DashboardLayout from "@/components/DashboardLayout";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import Recommended from "@/components/Recommended";
import Leaderboard from "@/components/Leaderboard";

import { getMe } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  /* ---------- LOGOUT ---------- */
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  /* ---------- LOAD USER ---------- */
  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getMe();

        if (!data || data.detail) {
          router.push("/login");
        } else {
          setUser(data);
        }
      } catch {
        router.push("/login");
      }
    }

    loadUser();
  }, [router]);

  /* ---------- LOADING SKELETON ---------- */
  if (!user) {
    return (
      <DashboardLayout>
        <PageWrapper>
          <main className="ml-64 w-full min-h-screen bg-[#F6F7FB] p-10">
            <div className="animate-pulse space-y-6">
              <div className="h-10 w-72 bg-gray-200 rounded-xl" />

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
        </PageWrapper>
      </DashboardLayout>
    );
  }

  /* ---------- DASHBOARD ---------- */
  return (
    <DashboardLayout>
      <PageWrapper>
        <main className="ml-64 w-full min-h-screen bg-[#F6F7FB] p-10">

          {/* TOPBAR */}
          <Topbar logout={logout} />

          {/* HEADER */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Welcome back{" "}
                <span className="gradient-text">
                  Developer
                </span>
              </h1>

              <p className="text-gray-500 mt-1">
                Keep building momentum 🚀
              </p>
            </div>

            <button className="btn-primary hover-glow">
              Resume Learning →
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mb-14">
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
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <Recommended />
            </div>

            <Leaderboard />
          </div>

        </main>
      </PageWrapper>
    </DashboardLayout>
  );
}
