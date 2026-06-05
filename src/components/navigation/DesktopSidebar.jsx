import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation";
import AppIcon from "../icons/AppIcon";

export default function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-zinc-200">
      <div className="p-6 border-b border-zinc-200">
        <h1 className="text-xl font-bold">
          Stone ERP
        </h1>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-zinc-100"
              }`
            }
          >
            <AppIcon
              name={item.icon}
              className="w-5 h-5"
            />

            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}