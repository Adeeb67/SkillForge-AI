"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  Target,
  BookOpen,
  Flame,
} from "lucide-react";

const icons: any = {
  xp: TrendingUp,
  level: Target,
  lessons: BookOpen,
  streak: Flame,
};

export default function StatCard({ title, value, icon }: any) {
  const Icon = icons[icon];

  const [displayValue, setDisplayValue] = useState(0);

  /* XP COUNT ANIMATION */
  useEffect(() => {
    let start = 0;
    const duration = 600;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="
      relative overflow-hidden
      bg-white rounded-xl p-6
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      hover:shadow-[0_10px_30px_rgba(79,70,229,0.15)]
      transition-all duration-300
      group
    ">

      {/* gradient sweep */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        bg-gradient-to-r
        from-transparent via-indigo-50 to-transparent
        transition duration-700
      "/>

      <div className="relative flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
          <Icon className="text-indigo-500"/>
        </div>

        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">
            {displayValue}
          </p>
        </div>
      </div>
    </div>
  );
}
