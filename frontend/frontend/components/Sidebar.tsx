"use client";

import Link from "next/link";
import { LayoutDashboard, BookOpen, Bug, Trophy, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#F7F8FC] border-r fixed left-0 top-0 flex flex-col justify-between">

      <div>
        <div className="p-6 text-2xl font-bold text-indigo-600">
          SkillForge
        </div>

        <nav className="space-y-2 px-4">

          <div className="flex items-center gap-3 px-4 py-3 bg-indigo-100 text-indigo-600 rounded-lg font-medium">
            <LayoutDashboard size={18}/> Dashboard
          </div>

          <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
            <BookOpen size={18}/> Learning Studio
          </div>

          <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
            <Bug size={18}/> Smart Debugger
          </div>

          <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
            <Trophy size={18}/> Challenges
          </div>

          <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
            <Settings size={18}/> Settings
          </div>

        </nav>
      </div>

      <div className="p-6 text-sm text-gray-500">
        <p>Alex Developer</p>
        <p>Level 12 • Pro</p>
      </div>

    </aside>
  );
}
