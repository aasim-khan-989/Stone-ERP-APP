import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation";
import AppIcon from "../icons/AppIcon";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 lg:hidden">
      <div className="grid grid-cols-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-3 text-xs ${
                isActive
                  ? "text-black font-semibold"
                  : "text-zinc-500"
              }`
            }
          >
            <AppIcon
              name={item.icon}
              className="w-5 h-5 mb-1"
            />

            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}