import { Outlet } from "react-router-dom";
import BottomNav from "../components/navigation/BottomNav";
import DesktopSidebar from "../components/navigation/DesktopSidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="flex">
        <DesktopSidebar />

        <main className="flex-1">
          <header className="bg-white border-b border-zinc-200 px-4 py-4">
            <h1 className="font-semibold">
              Stone ERP
            </h1>
          </header>

          <div className="p-4 pb-24 lg:pb-4">
            <Outlet />
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}