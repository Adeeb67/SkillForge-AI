"use client";

import {
  TrendingUp,
  Target,
  Bug,
  BookOpen
} from "lucide-react";

type Props = {
  title: string;
  value: any;
  icon?: string;
};

export default function StatCard({ title, value, icon }: Props) {

  const icons: any = {
    xp: <TrendingUp className="w-6 h-6 text-green-500" />,
    level: <Target className="w-6 h-6 text-blue-500" />,
    lessons: <BookOpen className="w-6 h-6 text-purple-500" />,
    streak: <Bug className="w-6 h-6 text-pink-500" />,
  };

  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-6
      shadow-sm
      border border-gray-100
      flex items-center gap-4
      "
    >
      {/* ICON BOX */}
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
        {icons[icon || "xp"]}
      </div>

      {/* TEXT */}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-900">
          {value}
        </h2>
      </div>
    </div>
  );
}
