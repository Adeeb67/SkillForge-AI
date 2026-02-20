export default function Recommended() {
  const courses = [1,2,3];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        Recommended for You
      </h2>

      <p className="text-gray-500 mb-4">
        Based on your recent debugging patterns.
      </p>

      <div className="space-y-4">
        {courses.map((c)=>(
          <div key={c}
            className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-semibold">
                Advanced React Performance Optimization
              </h3>
              <p className="text-sm text-gray-500">
                Estimated time: 15 min • Difficulty: Hard
              </p>
            </div>

            <span>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
