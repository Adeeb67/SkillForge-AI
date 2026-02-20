"use client";

export default function Topbar({ logout }: any) {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, <span className="text-indigo-600">Developer</span>
        </h1>

        <p className="text-gray-500">
          Keep building momentum 🚀
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow"
      >
        Logout
      </button>

    </div>
  );
}
