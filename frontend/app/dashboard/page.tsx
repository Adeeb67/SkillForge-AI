"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import Recommended from "@/components/Recommended";
import Leaderboard from "@/components/Leaderboard";

import { getMe, addXP } from "@/lib/api";

export default function Dashboard() {
  const router = useRouter();
  const [user,setUser]=useState<any>(null);

  const logout=()=>{
    localStorage.removeItem("token");
    router.push("/");
  };

  useEffect(()=>{
    async function load(){
      const data=await getMe();
      if(data.detail) router.push("/login");
      else setUser(data);
    }
    load();
  },[]);

  if(!user) return <p className="p-10">Loading...</p>;

  return (
    <div className="flex bg-[#F3F4F8] min-h-screen">

      <Sidebar/>

      <main className="ml-64 w-full p-10">

        <Topbar logout={logout}/>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard title="XP" value={user.xp}/>
          <StatCard title="Level" value={user.level}/>
          <StatCard title="Lessons" value={user.lessons_completed}/>
          <StatCard title="Streak" value={`${user.streak} days`}/>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-8">

          <div className="col-span-2">
            <Recommended/>
          </div>

          <Leaderboard/>

        </div>

      </main>

    </div>
  );
}
