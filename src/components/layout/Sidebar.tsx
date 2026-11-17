import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Building2,
  ChevronDown,
  Wallet,
  ClipboardCheck,
  Scale,
  ShieldCheck,
  BarChart3,
  HelpCircle,
  Settings,
  UserCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  hasDropdown?: boolean;
  path: string;
}

const mainMenuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
  { id: "bookings", label: "Bookings", icon: Calendar, path: "/bookings" },
  { id: "directory", label: "Directory", icon: Building2, hasDropdown: true, path: "/directory" },
  { id: "escrow", label: "Escrow & Payments", icon: Wallet, path: "/escrow" },
  { id: "material", label: "Material Approval", icon: ClipboardCheck, path: "/material" },
  { id: "disputes", label: "Disputes", icon: Scale, path: "/disputes" },
  { id: "quality", label: "Quality & Evidence", icon: ShieldCheck, path: "/quality" },
  { id: "analytics", label: "Analytics & Reports", icon: BarChart3, path: "/analytics" },
];

const bottomMenuItems: MenuItem[] = [
  { id: "help", label: "Help Center", icon: HelpCircle, path: "/help" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  { id: "profile", label: "Profile", icon: UserCircle, path: "/profile" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-[248px] flex-col justify-between border-r border-[rgba(0,0,0,0.1)] bg-white p-4 sticky top-0">
      {/* Top Section */}
      <div className="flex flex-col gap-12">
        {/* Logo */}
        <Link to="/dashboard" className="flex h-[68px] items-center justify-center rounded-[5px] bg-[#02368C] px-4">
          <img
            src={logo}
            alt="WallKas Logo"
            className="h-auto w-full object-contain"
          />
        </Link>

        {/* Main Menu */}
        <nav className="flex flex-col">
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex h-[56px] items-center gap-2 rounded-lg px-3 py-2 font-['Roboto'] text-sm transition-colors ${
                  isActive
                    ? "bg-[#EFF6FF] text-[#02368C]"
                    : "text-[#777777] hover:bg-gray-50"
                }`}
              >
                <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                <span className="flex-1 text-left leading-[1.2]">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDown className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col border-t border-[rgba(68,68,68,0.3)] pt-4">
        {bottomMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === `/${item.id}`;

          return (
            <button
              key={item.id}
              className={`flex h-[56px] items-center gap-3 rounded-lg px-3 py-2 font-['Roboto'] text-sm transition-colors ${
                isActive
                  ? "bg-[#EFF6FF] text-[#02368C]"
                  : "text-[#666666] hover:bg-gray-50"
              }`}
            >
              <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
              <span className="flex-1 text-left leading-[1.2]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
