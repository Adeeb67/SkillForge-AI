import "./globals.css";

export const metadata = {
  title: "SkillForge AI",
  description: "AI Career Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
