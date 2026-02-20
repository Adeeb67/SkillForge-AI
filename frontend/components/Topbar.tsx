"use client";

import { Bell, Flame, Star } from "lucide-react";

export default function Topbar({ logout }: any) {
  return (
    <div className="flex justify-between items-center mb-10">

      <h2 className="text-gray-600 font-medium">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        {/* STREAK BADGE */}
        <div className="flex items-center gap-2 bg-orange-50 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
          <Flame size={16}/>
          12 Day Streak
        </div>

        {/* XP BADGE */}
        <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium">
          <Star size={16}/>
          2,450 XP
        </div>

        <Bell className="text-gray-500"/>

        <button
          onClick={logout}
          className="
          ml-4
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-5 py-2
          rounded-xl
          shadow
          transition
          "
        >
          Logout
        </button>

      </div>
    </div>
  );
}
