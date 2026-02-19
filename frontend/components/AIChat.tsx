"use client";

import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ================= SEND MESSAGE =================
  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage("");

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "ai", text: "" },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
        "https://skillforge-ai-y3ru.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMsg }),
        }
      );

      const data = await response.json();

      // simulate ChatGPT typing
      let aiText = "";
      const fullText = data.reply || "No response received.";

      for (let i = 0; i < fullText.length; i++) {
        aiText += fullText[i];

        await new Promise((r) => setTimeout(r, 15));

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = aiText;
          return updated;
        });
      }
    } catch (err) {
      // ✅ FIX: do NOT use data here
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].text =
          "⚠️ AI service unavailable. Please try again.";
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================
  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 text-white text-xl shadow-lg"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-[320px] h-[420px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 flex justify-between">
            <span>SkillForge AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-purple-200 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-200 p-2 rounded-lg w-24 animate-pulse">
                typing...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask career questions..."
              className="flex-1 border rounded px-2 py-1"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-purple-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
