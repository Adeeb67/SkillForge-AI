"use client";

import { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const upload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(
  "https://skillforge-ai-y3ru.onrender.com/api/chat",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  }
);


    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">
        Upload Resume
      </h1>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={upload}
        className="ml-4 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      <p className="mt-4">{status}</p>
    </div>
  );
}
