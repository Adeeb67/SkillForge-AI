"use client";

import { useState } from "react";
import { debugCode } from "@/lib/api";

export default function Debugger() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const analyze = async () => {
    if (!code) return;

    const res = await debugCode(code);
    setResult(res.analysis);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Smart Debugger 🧠</h1>

      <textarea
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        style={{ width: "100%", marginTop: 20 }}
      />

      <button
        onClick={analyze}
        style={{
          marginTop: 20,
          padding: "10px 16px",
          background: "black",
          color: "white",
        }}
      >
        Analyze Code
      </button>

      {result && (
        <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          {result}
        </pre>
      )}
    </div>
  );
}
