"use client";

import { Flame, Star, Bell } from "lucide-react";

export default function Topbar({ logout }: { logout: () => void }) {
  return (
    <div className="flex justify-between items-center mb-10">

      {/* PAGE TITLE */}
      <h2 className="text-gray-500 font-medium">Dashboard</h2>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* STREAK BADGE */}
        <div className="
          flex items-center gap-2
          bg-orange-50
          text-orange-600
          px-4 py-2
          rounded-full
          text-sm
          font-medium
        ">
          <Flame size={16} />
          12 Day Streak
        </div>

        {/* XP BADGE */}
        <div className="
          flex items-center gap-2
          bg-yellow-50
          text-yellow-700
          px-4 py-2
          rounded-full
          text-sm
          font-medium
        ">
          <Star size={16} />
          2,450 XP
        </div>

        {/* NOTIFICATION */}
        <button className="text-gray-500 hover:text-indigo-600 transition">
          <Bell size={20} />
        </button>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          text-white
          px-5 py-2
          rounded-xl
          shadow-md
          hover:scale-105
          transition
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
