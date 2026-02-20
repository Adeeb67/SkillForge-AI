"use client";

import { ArrowRight } from "lucide-react";

const courses = [1,2,3];

export default function Recommended() {
  return (
    <div>

      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        Recommended for You
      </h2>

      <p className="text-gray-500 text-sm mb-5">
        Based on your recent debugging patterns.
      </p>

      <div className="space-y-4">
        {courses.map((c,i)=>(
          <div
            key={i}
            className="
            bg-gradient-to-r
            from-gray-100
            to-gray-200
            rounded-2xl
            p-6
            flex justify-between items-center
            hover:shadow-md
            hover:scale-[1.01]
            transition
            cursor-pointer
            "
          >

            <div className="flex gap-4 items-center">

              <div className="
                w-10 h-10
                rounded-full
                bg-indigo-100
                text-indigo-600
                flex items-center justify-center
                font-semibold
              ">
                {i+1}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Advanced React Performance Optimization
                </h3>

                <p className="text-sm text-gray-500">
                  Estimated time: 15 min • Difficulty: Hard
                </p>
              </div>
            </div>

            <ArrowRight className="text-gray-400"/>
          </div>
        ))}
      </div>

    </div>
  );
}
