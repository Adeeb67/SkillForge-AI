"use client";

import { Bell, Flame, Star } from "lucide-react";

export default function Topbar({ logout }: any) {
  return (
    <div className="flex justify-between items-center mb-10">

      <p className="text-gray-500 font-medium">Dashboard</p>

      <div className="flex items-center gap-4">

        {/* streak */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm">
          <Flame size={16} />
          12 Day Streak
        </div>

        {/* xp */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-600 text-sm">
          <Star size={16} />
          2,450 XP
        </div>

        <Bell className="text-gray-400" />

        <button
          onClick={logout}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}
