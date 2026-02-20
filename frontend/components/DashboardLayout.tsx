import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#eef0f6] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
