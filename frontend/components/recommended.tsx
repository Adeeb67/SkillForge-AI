"use client";

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
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-1">
        Recommended for You
      </h2>
      <p className="text-gray-500 mb-4 text-sm">
        Based on your recent debugging patterns.
      </p>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex justify-between items-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition"
          >
            <div>
              <p className="font-medium">
                {course.id}. {course.title}
              </p>
              <p className="text-sm text-gray-500">
                Estimated time: {course.time} • Difficulty: {course.difficulty}
              </p>
            </div>

            <span className="text-xl">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
