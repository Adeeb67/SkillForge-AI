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

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  useEffect(() => {
    async function load() {
      const data = await getMe();
      if (data.detail) router.push("/login");
      else setUser(data);
    }
    load();
  }, []);

  if (!user)
    return (
      <div className="min-h-screen bg-[#F6F7FB] p-10 text-gray-500">
        Loading dashboard...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <DashboardLayout>

        <Topbar logout={logout} />

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back,{" "}
              <span className="text-indigo-600">Developer</span>
            </h1>

            <p className="text-gray-500 mt-1">
              Keep building momentum 🚀
            </p>
          </div>

          {/* Resume Button */}
          <button
            className="
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            px-6 py-3
            rounded-lg
            shadow-md
            hover:scale-105
            transition
          "
          >
            Resume Learning →
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <StatCard title="XP" value={user.xp} icon="xp" />
          <StatCard title="Level" value={user.level} icon="level" />
          <StatCard title="Lessons" value={user.lessons_completed} icon="lessons"/>
          <StatCard title="Streak" value={`${user.streak} days`} icon="streak"/>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <Recommended />
          </div>

          <Leaderboard />
        </div>

      </DashboardLayout>
    </div>
  );
}
