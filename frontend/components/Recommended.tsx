"use client";

import { ArrowRight } from "lucide-react";

export default function Recommended() {
  const courses = [1,2,3];

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">

      <h2 className="text-lg font-semibold text-gray-900">
        Recommended for You
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Based on your recent debugging patterns.
      </p>

      <div className="space-y-5">
        {courses.map((id) => (
          <div
            key={id}
            className="
            group bg-white rounded-xl p-6
            shadow-[0_2px_8px_rgba(0,0,0,0.05)]
            hover:shadow-lg transition border
            hover:border-indigo-300
            backdrop-blur-sm hover:backdrop-blur-md
            flex justify-between items-center
            "
          >
            <div>
              <h3 className="font-medium group-hover:text-indigo-600 transition">
                Advanced React Performance Optimization
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Estimated time: 15 min • Difficulty: Hard
              </p>
            </div>

            <ArrowRight className="text-gray-400 group-hover:text-indigo-600 transition"/>
          </div>
        ))}
      </div>
    </div>
  );
}
