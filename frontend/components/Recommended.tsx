"use client";

import { ArrowRight } from "lucide-react";

export default function Recommended() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Performance Optimization",
      time: "15 min",
      difficulty: "Hard",
    },
    {
      id: 2,
      title: "Advanced React Performance Optimization",
      time: "15 min",
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "Advanced React Performance Optimization",
      time: "15 min",
      difficulty: "Hard",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-[var(--card-shadow)]">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-gray-900">
        Recommended for You
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Based on your recent debugging patterns.
      </p>

      {/* COURSE LIST */}
      <div className="space-y-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="
            group bg-white rounded-xl p-6
            shadow-[var(--card-shadow)]
            hover:shadow-lg
            transition
            border
            hover:border-indigo-300
            flex items-center justify-between
            cursor-pointer
            "
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-5">
              {/* NUMBER BADGE */}
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold">
                {course.id}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-medium group-hover:text-indigo-600 transition">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Estimated time: {course.time} • Difficulty:{" "}
                  {course.difficulty}
                </p>
              </div>
            </div>

            {/* RIGHT ARROW */}
            <ArrowRight className="text-gray-400 group-hover:text-indigo-600 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}
