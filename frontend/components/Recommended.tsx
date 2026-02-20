"use client";

export default function Recommended() {
  const courses = [
    {
      title: "Master React Patterns",
      desc: "Build scalable frontend systems.",
    },
    {
      title: "Debug Like a Pro",
      desc: "Advanced debugging workflows.",
    },
    {
      title: "System Design Basics",
      desc: "Prepare for real engineering roles.",
    },
  ];

  return (
    <div>
      <h2 className="mb-6">Recommended Courses</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="card group p-6 border hover:border-indigo-300 transition"
          >
            <h3 className="font-medium text-lg mb-2 group-hover:text-indigo-600 transition">
              {c.title}
            </h3>

            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
