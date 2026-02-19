export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://skillforge-ai-y3ru.onrender.com";

export async function getDashboard() {
  const res = await fetch(`${API_URL}/dashboard`);
  return res.json();
}
