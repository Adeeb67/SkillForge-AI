export default function Recommended() {
  const courses = [1,2,3];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">
        Recommended for You
      </h2>

      <p className="text-gray-500 mb-6">
        Based on your recent debugging patterns.
      </p>

      <div className="space-y-4">
        {courses.map((c) => (
          <div
            key={c}
            className="
            group bg-white rounded-xl p-6 shadow-card
            hover:shadow-lg transition
            hover:border-indigo-300 border
          "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold group-hover:text-indigo-600 transition">
                  Advanced React Performance Optimization
                </h3>

                <p className="text-gray-500 text-sm">
                  Estimated time: 15 min • Difficulty: Hard
                </p>
              </div>

              <span className="text-gray-400 group-hover:text-indigo-600 transition">
                →
              </span>
            </div>

            <div className="mt-3 h-1 bg-gradient-to-r from-indigo-50 to-transparent rounded"/>
          </div>
        ))}
      </div>
    </div>
  );
}
