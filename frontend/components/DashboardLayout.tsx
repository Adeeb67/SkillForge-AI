import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Sidebar />
      <main className="ml-64 p-10">{children}</main>
    </div>
  );
}
