import { Link } from "react-router-dom";
import { StatCard } from "../components/dashboard/StatCard";
import { BookingVolumeChart } from "../components/dashboard/BookingVolumeChart";
import { SLAComplianceChart } from "../components/dashboard/SLAComplianceChart";
import { AlertItem } from "../components/dashboard/AlertItem";
import { UnassignedJobCard } from "../components/dashboard/UnassignedJobCard";

import slaBreachIcon from "@/assets/icons/alerts/sla-breach.svg";
import escrowBlockedIcon from "@/assets/icons/alerts/escrow-blocked.svg";
import disputeIcon from "@/assets/icons/alerts/dispute.svg";
import verificationIcon from "@/assets/icons/alerts/verification.svg";

// Mock data
const stats = [
  {
    title: "Active Bookings",
    value: 142,
    icon: "/src/assets/icons/active-bookings-icon.svg",
    iconBg: "bg-[#eff6ff]",
    changeIcon: "/src/assets/icons/arrow-up-green.svg",
    changeText: "+12.4%",
    changeColor: "#059669",
    subtitle: "vs yesterday",
  },
  {
    title: "Pending Escrow",
    value: "GH₵ 48,250",
    icon: "/src/assets/icons/pending-escrow-icon.svg",
    iconBg: "bg-[#fffbeb]",
    subtitle: "28 jobs awaiting signoff",
    subtitleColor: "#64748b",
  },
  {
    title: "Open Disputes",
    value: 7,
    icon: "/src/assets/icons/disputes-icon.svg",
    iconBg: "bg-[#fff1f2]",
    changeIcon: "/src/assets/icons/arrow-down-green.svg",
    changeText: "-2 resolved",
    changeColor: "#059669",
    subtitle: "today",
  },
  {
    title: "SLA Breaches",
    value: 3,
    icon: "/src/assets/icons/sla-breaches-icon.svg",
    iconBg: "bg-[#fff1f2]",
    valueColor: "#e11d48",
    badge: {
      text: "+1 in 2h",
      bg: "bg-[#fff1f2]",
      border: "border-[#fecdd3]",
      textColor: "#e11d48",
    },
    subtitle: "investigating",
  },
  {
    title: "Provider Intake",
    value: 19,
    icon: "/src/assets/icons/provider-intake-icon.svg",
    iconBg: "bg-[#eff6ff]",
    badge: {
      text: "5 pending KYC",
      bg: "bg-[#fffbeb]",
      border: "border-[#fde68a]",
      textColor: "#b45309",
    },
    subtitle: "queue",
  },
];

const bookings = [
  {
    id: "LEND-123",
    customer: "Akua Mensah",
    area: "East Legon",
    service: "Deep Cleaning",
    status: "In Progress",
    provider: "John Doe",
    providerId: "185 Jobs",
    elapsed: "12 m ago",
  },
  {
    id: "LEND-123",
    customer: "Akua Mensah",
    area: "East Legon",
    service: "Deep Cleaning",
    status: "Done",
    provider: "John Doe",
    providerId: "185 Jobs",
    elapsed: "12 m ago",
  },
  {
    id: "LEND-123",
    customer: "Akua Mensah",
    area: "East Legon",
    service: "Deep Cleaning",
    status: "Assigned",
    provider: "John Doe",
    providerId: "185 Jobs",
    elapsed: "12 m ago",
  },
  {
    id: "LEND-123",
    customer: "Akua Mensah",
    area: "East Legon",
    service: "Deep Cleaning",
    status: "In Progress",
    provider: "John Doe",
    providerId: "185 Jobs",
    elapsed: "12 m ago",
  },
  {
    id: "LEND-123",
    customer: "Akua Mensah",
    area: "East Legon",
    service: "Deep Cleaning",
    status: "Disputed",
    provider: "John Doe",
    providerId: "185 Jobs",
    elapsed: "12 m ago",
  },
];

const alerts = [
  {
    icon: slaBreachIcon,
    iconBg: "#fff1f2",
    iconBorder: "#ffe4e6",
    title: "SLA Breach: Provider No-Show",
    titleColor: "#e11d48",
    time: "8m ago",
    description: (
      <>
        Booking{" "}
        <span className="font-['JetBrains_Mono'] font-bold text-[#1e293b]">
          #KB-8904
        </span>{" "}
        (Spintex) provider exceeded 30m grace window.
      </>
    ),
    actionText: "Auto-Reassign",
    actionStyle: "filled" as const,
    actionBorderColor: "#fecdd3",
  },
  {
    icon: escrowBlockedIcon,
    iconBg: "#fffbeb",
    iconBorder: "#fef3c7",
    title: "Escrow Release Blocked",
    titleColor: "#b45309",
    time: "24m ago",
    description: (
      <>
        <span className="font-['Roboto_Flex'] font-semibold text-[#1e293b]">
          GH₵ 1,200
        </span>{" "}
        held for{" "}
        <span className="font-['JetBrains_Mono'] font-medium">#KB-8892</span>.
        Evidence verification mismatch
      </>
    ),
    actionText: "Inspect Evidence",
    actionStyle: "outlined" as const,
    actionBorderColor: "#e2e8f0",
  },
  {
    icon: disputeIcon,
    iconBg: "#fff1f2",
    iconBorder: "#ffe4e6",
    title: "Customer Dispute Filed",
    titleColor: "#e11d48",
    time: "1h ago",
    description: (
      <>
        Plumbing repair{" "}
        <span className="font-['JetBrains_Mono'] font-medium">#KB-8918</span>{" "}
        reported uncompleted work after job signoff
      </>
    ),
    actionText: "Open Ticket",
    actionStyle: "outlined" as const,
    actionBorderColor: "#e2e8f0",
  },
  {
    icon: verificationIcon,
    iconBg: "#eff6ff",
    iconBorder: "#dbeafe",
    title: "Tier-2 Provider Verification",
    titleColor: "#1d4ed8",
    time: "3h ago",
    description:
      "5 new electrician certificates from Accra Tech Inst. await check.",
    actionText: "Review KYC",
    actionStyle: "outlined" as const,
    actionBorderColor: "#e2e8f0",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "In Progress":
      return "border-orange-500 text-orange-500";
    case "Done":
      return "border-green-500 text-green-500";
    case "Assigned":
      return "border-blue-500 text-blue-500";
    case "Disputed":
      return "border-red-500 text-red-500";
    default:
      return "border-gray-500 text-gray-500";
  }
}

export function Dashboard() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-medium text-gray-900">My Dashboard</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <p>
              Real-time operations monitor & service fulfillment telemetry for
              Greater Accra
            </p>
            <div className="flex items-center gap-1">
              <img
                src="/src/assets/icons/sync-icon.svg"
                alt=""
                className="h-3 w-3"
              />
              <span className="text-xs text-gray-500">Synced just now</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm hover:bg-gray-50">
            <img src="/src/assets/icons/refresh.svg" alt="" className="h-4 w-4" />
            Refresh
          </button>
          <button className="rounded-lg bg-[#02368c] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#024A9C]">
            Quick Resolution
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBg={stat.iconBg}
            changeIcon={stat.changeIcon}
            changeText={stat.changeText}
            changeColor={stat.changeColor}
            subtitle={stat.subtitle}
            subtitleColor={stat.subtitleColor}
            valueColor={stat.valueColor}
            badge={stat.badge}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <BookingVolumeChart />
        <SLAComplianceChart />
      </div>

      {/* Live Service Tickets */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {/* Table Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h3 className="text-base font-medium text-gray-900">
            Live Service Tickets
          </h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-52 rounded border border-gray-200 bg-gray-50 px-3 py-2 pl-9 text-xs outline-none focus:border-gray-300"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="flex items-center gap-2 rounded border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
            <button className="rounded border border-blue-600 px-3 py-2 text-xs text-blue-600 hover:bg-blue-50">
              View All Bookings
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 p-3">
          <button className="rounded border border-blue-600 bg-blue-50 px-3 py-2 text-sm text-blue-600">
            All Bookings
          </button>
          <button className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Assigned
          </button>
          <button className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
            In Progress
          </button>
          <button className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Disputed
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Booking ID
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Customer & Area
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Service Summary
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Assigned Provider
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-600">
                  Elapsed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className={`${
                    index === 0 ? "bg-blue-50/50" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <td className="px-5 py-3 text-xs text-blue-600">
                    <Link to={`/bookings/KB-8921`} className="hover:underline">
                      {booking.id}
                    </Link>
                  </td>
                  <td className="px-5 py-3">
                    <div className="text-xs text-gray-900">
                      {booking.customer}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <img
                        src="/src/assets/icons/location-pin.svg"
                        alt=""
                        className="h-2.5 w-2"
                      />
                      {booking.area}
                    </div>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-900">
                    {booking.service}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
                        <img
                          src="https://i.pravatar.cc/150?img=1"
                          alt={booking.provider}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-gray-900">
                          {booking.provider}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {booking.providerId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-600">
                    {booking.elapsed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white p-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="h-3 w-3 rounded border-gray-400"
            />
            <span className="text-[10px] text-gray-600">Select All</span>
            <div className="h-4 w-px bg-gray-300" />
            <span className="text-[10px] text-gray-600">2 selected</span>
            <button className="p-1">
              <img
                src="/src/assets/icons/delete-icon.svg"
                alt="Delete"
                className="h-3 w-2.5"
              />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-600">
              Showing 1-10 of 45
            </span>
            <div className="flex items-center gap-1 pl-2">
              <button className="rounded border border-gray-900 p-1 opacity-50">
                <img
                  src="/src/assets/icons/arrow-left.svg"
                  alt="Previous"
                  className="h-[7px] w-[4px]"
                />
              </button>
              <button className="rounded border border-gray-900 p-1">
                <img
                  src="/src/assets/icons/arrow-right.svg"
                  alt="Next"
                  className="h-[7px] w-[4px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Alerts & Paid Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts & Escalations */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="h-[75px] border-b border-[rgba(0,0,0,0.12)] px-5 py-[18px] flex items-center justify-between">
            <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222]">
              Alerts & Escalations
            </h3>
            <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-full px-[9px] py-[3px]">
              <span className="font-['Roboto_Flex'] font-semibold text-[12px] leading-4 text-[#e11d48]">
                4 Urgent
              </span>
            </div>
          </div>

          {/* Alert Items */}
          <div>
            {alerts.map((alert, index) => (
              <AlertItem key={index} {...alert} />
            ))}
          </div>
        </div>

        {/* Paid but unassigned */}
        <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="h-[75px] border-b border-[rgba(0,0,0,0.12)] px-5 py-[18px]">
            <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222] mb-1">
              Paid but unassigned
            </h3>
            <p className="font-['Roboto_Flex'] text-[12px] leading-4 text-[#64748b]">
              Escrow funds locked.
            </p>
          </div>

          {/* Job Cards */}
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              <UnassignedJobCard
                bookingId="#KB-8924"
                timeElapsed="14m 20s"
                title="Urgent Generator Repair"
                customerName="Kofi Asante"
                location="Adenta Barrier, Accra"
                escrowAmount="GH₵ 650.00"
                paymentMethod="MoMo"
              />
              <UnassignedJobCard
                bookingId="#KB-8924"
                timeElapsed="14m 20s"
                title="Urgent Generator Repair"
                customerName="Kofi Asante"
                location="Adenta Barrier, Accra"
                escrowAmount="GH₵ 650.00"
                paymentMethod="MoMo"
              />
            </div>

            {/* Bottom Warning */}
            <div className="bg-[#fffbeb] border border-[#fde68a] rounded-full px-[9px] py-[3px] text-center">
              <span className="font-['Roboto_Flex'] font-medium text-[12px] leading-4 text-[#b45309]">
                3 jobs requiring manual operator match
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
