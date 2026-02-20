"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

  /* ---------------- LOADING ---------------- */
  if (!user)
    return (
      <div className="min-h-screen bg-[#F6F7FB] flex items-center justify-center text-gray-500 text-lg">
        Loading dashboard...
      </div>
    );

  return (
    <DashboardLayout>
      {/* ✅ MAIN WRAPPER ADDED */}
      <main className="ml-64 w-full p-10 bg-[#F6F7FB] min-h-screen">

        {/* ---------- TOPBAR ---------- */}
        <Topbar logout={logout} />

        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-center mb-10"
        >
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back{" "}
              <span className="text-indigo-600">Developer</span>
            </h1>

            <p className="text-gray-500 mt-1">
              Keep building momentum 🚀
            </p>
          </div>

          {/* Resume Learning */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            text-white
            px-6 py-3
            rounded-lg
            shadow-md
            backdrop-blur-md
          "
          >
            Resume Learning →
          </motion.button>
        </motion.div>

        {/* ---------- STAT CARDS ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-4 gap-6 mb-12"
        >
          <motion.div whileHover={{ y: -6 }}>
            <StatCard title="XP" value={user.xp} icon="xp" />
          </motion.div>

          <motion.div whileHover={{ y: -6 }}>
            <StatCard title="Level" value={user.level} icon="level" />
          </motion.div>

          <motion.div whileHover={{ y: -6 }}>
            <StatCard
              title="Lessons"
              value={user.lessons_completed}
              icon="lessons"
            />
          </motion.div>

          <motion.div whileHover={{ y: -6 }}>
            <StatCard
              title="Streak"
              value={`${user.streak} days`}
              icon="streak"
            />
          </motion.div>
        </motion.div>

        {/* ---------- CONTENT GRID ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-3 gap-8"
        >
          <div className="col-span-2">
            <Recommended />
          </div>

          <Leaderboard />
        </motion.div>

      </main>
    </DashboardLayout>
  );
}
