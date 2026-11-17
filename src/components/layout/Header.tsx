import { Search, MapPin, ChevronDown, Bell } from "lucide-react";
import profileAvatar from "@/assets/images/profile-avatar.png";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[rgba(0,0,0,0.08)] bg-white px-8 py-6">
      {/* Search Input */}
      <div className="flex w-[333px] items-center gap-2 overflow-hidden rounded-lg border border-[#e1e1e1] bg-[rgba(248,249,255,0.4)] px-[9px] py-[9px]">
        <Search className="h-6 w-6 shrink-0 text-gray-500" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search booking ID, provider, customer..."
          className="flex-1 border-none bg-transparent font-['Roboto'] text-xs text-[#434652] outline-none placeholder:text-[#434652]"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Location Selector */}
        <button className="flex h-[36px] items-center gap-2 rounded border border-[rgba(196,198,212,0.4)] bg-[#EEF4FF] px-[13px] py-px">
          <MapPin className="h-4 w-4 text-[#121c28]" strokeWidth={1.5} />
          <span className="font-['Roboto'] text-xs text-[#121c28]">
            Greater Accra (All Zones)
          </span>
          <ChevronDown className="h-3 w-3 text-[#121c28]" strokeWidth={2} />
        </button>

        {/* Notification Bell */}
        <div className="relative h-7 w-7">
          <Bell className="h-6 w-6 text-gray-600" strokeWidth={1.5} />
          <div className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#DD644E] px-[5px] py-[1.5px]">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-white">
              3
            </span>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img
            src={profileAvatar}
            alt="User Avatar"
            className="h-[42px] w-[42px] rounded-full object-cover"
          />
          <span className="font-['Roboto'] text-base font-medium text-[#222222]">
            Hizrian Alma'in
          </span>
        </div>
      </div>
    </header>
  );
}
