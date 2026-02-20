"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import DashboardLayout from "@/components/DashboardLayout";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import Recommended from "@/components/Recommended";
import Leaderboard from "@/components/Leaderboard";
import DemoBanner from "@/components/DemoBanner";

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
      const token = localStorage.getItem("token");

      /* DEMO MODE USER */
      if (token === "skillforge-demo-user") {
        setUser({
          email: "demo@skillforge.ai",
          xp: 2450,
          level: 12,
          lessons_completed: 34,
          streak: 12,
        });
        return;
      }

      const data = await getMe();

      if (data.detail) router.push("/login");
      else setUser(data);
    }

    load();
  }, []);

  if (!user)
    return (
      <div className="ml-64 p-10 space-y-6 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-1/3"></div>

        <div className="grid grid-cols-4 gap-6">
          {[1,2,3,4].map(i=>(
            <div key={i} className="h-24 bg-gray-200 rounded-xl"/>
          ))}
        </div>
      </div>
    );

  return (
    <DashboardLayout>

      <DemoBanner />

      <main className="ml-64 w-full p-10 bg-[#F6F7FB] min-h-screen">

        <Topbar logout={logout}/>

        {/* HEADER */}
        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="flex justify-between items-center mb-10"
        >
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back <span className="text-indigo-600">Developer</span>
            </h1>

            <p className="text-gray-500 mt-1">
              Keep building momentum 🚀
            </p>
          </div>

          <motion.button
            whileHover={{scale:1.06}}
            className="
            resume-btn
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            px-6 py-3
            rounded-lg
            shadow-md
            "
          >
            Resume Learning →
          </motion.button>
        </motion.div>

        {/* STATS */}
        <div className="stat-cards grid grid-cols-4 gap-6 mb-12">
          <StatCard title="XP" value={user.xp} icon="xp"/>
          <StatCard title="Level" value={user.level} icon="level"/>
          <StatCard title="Lessons" value={user.lessons_completed} icon="lessons"/>
          <StatCard title="Streak" value={`${user.streak} days`} icon="streak"/>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-3 gap-8">
          <div className="recommended-section col-span-2">
            <Recommended/>
          </div>

          <div className="leaderboard-section">
            <Leaderboard/>
          </div>
        </div>

      </main>
    </DashboardLayout>
  );
}
