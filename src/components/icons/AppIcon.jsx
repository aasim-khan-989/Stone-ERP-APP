
import {
  Home,
  Package,
  ChartColumn,
  Settings,
} from "lucide-react";

export default function AppIcon({ name, className = "" }) {
  const icons = {
    home: Home,
    package: Package,
    chart: ChartColumn,
    settings: Settings,
  };

  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}