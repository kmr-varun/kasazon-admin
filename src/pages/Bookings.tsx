import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { BookingStatCard } from "../components/bookings/BookingStatCard";

import syncIcon from "@/assets/icons/bookings/sync.svg";
import activeFulfillmentIcon from "@/assets/icons/bookings/active-fulfillment.svg";
import arrowUpIcon from "@/assets/icons/bookings/arrow-up.svg";
import unassignedIcon from "@/assets/icons/bookings/unassigned.svg";
import clockIcon from "@/assets/icons/bookings/clock-icon.svg";
import escrowIcon from "@/assets/icons/bookings/escrow.svg";
import arrowDownIcon from "@/assets/icons/bookings/arrow-down.svg";
import reworkIcon from "@/assets/icons/bookings/rework.svg";

const stats = [
  {
    label: "Active Fulfillment",
    value: 85,
    icon: activeFulfillmentIcon,
    iconBg: "#eff6ff",
    trendIcon: arrowUpIcon,
    trendText: "+12.4%",
    trendColor: "#059669",
    subtitle: "vs yesterday",
  },
  {
    label: "Unassigned",
    value: 3,
    icon: unassignedIcon,
    iconBg: "#fffbeb",
    trendIcon: clockIcon,
    subtitle: "28 jobs awaiting signoff",
  },
  {
    label: "Escrow in Custody",
    value: "GH₵ 48,250",
    icon: escrowIcon,
    iconBg: "#fff1f2",
    trendIcon: arrowDownIcon,
    trendText: "-2 resolved",
    trendColor: "#059669",
    subtitle: "today",
  },
  {
    label: "Rework Requests",
    value: 5,
    icon: reworkIcon,
    iconBg: "#fff1f2",
    valueColor: "#e11d48",
    badge: {
      text: "2 pending",
      bg: "#fff1f2",
      border: "#fecdd3",
      color: "#e11d48",
    },
    subtitle: "investigating",
  },
];

const tabs = [
  { id: "all", label: "All Bookings", active: true },
  { id: "paid", label: "Paid & Unassigned", active: false },
  { id: "rework", label: "Rework Requests", active: false },
  { id: "cancelled", label: "Cancelled & Refunded", active: false },
];

// Mock booking data (will be used when connecting to backend)
// const bookings = [
//   {
//     id: "LEND-123",
//     customer: "Akua Mensah",
//     area: "East Legon",
//     provider: {
//       name: "John Doe",
//       avatar: "https://i.pravatar.cc/150?img=1",
//       jobs: 185,
//     },
//     service: "Deep Cleaning",
//     status: "In Progress",
//     escrow: "Held 250 GH₵",
//     created: "Today, 8:30am",
//   },
// ];

export function Bookings() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const totalRows = 10;

  const toggleSelectAll = () => {
    if (selectedRows.length === totalRows) {
      setSelectedRows([]);
    } else {
      setSelectedRows(Array.from({ length: totalRows }, (_, i) => i));
    }
  };

  const toggleSelectRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 min-h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-['Roboto_Flex'] font-medium text-[30px] leading-[1.2] text-[#111827]">
            Bookings
          </h1>
          <div className="flex items-center gap-2 text-[14px]">
            <span className="font-['Roboto'] text-[#64748b]">
              Monitor, triage, and manage end-to-end service requests.
            </span>
            <div className="flex items-center gap-1">
              <img src={syncIcon} alt="" className="w-[11.2px] h-[11.2px]" />
              <span className="font-['Roboto'] text-[12px] text-[#475569]">
                Synced just now
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1.5 px-6 py-2.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors">
            <span className="font-['Roboto'] text-sm text-[#666]">
              Export CSV
            </span>
          </button>
          <button className="flex items-center gap-1.5 px-6 py-2.5 bg-[#02368c] border border-[#02368c] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#024A9C] transition-colors">
            <Plus className="w-4 h-4 text-white" strokeWidth={2} />
            <span className="font-['Roboto'] text-sm text-white">
              Manual Booking
            </span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {stats.map((stat, index) => (
          <BookingStatCard key={index} {...stat} />
        ))}
      </div>

      {/* Bookings Table Card */}
      <div className="bg-white border border-[rgba(0,0,0,0.14)] rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="flex items-center justify-between px-5 py-[18px] border-b border-[rgba(0,0,0,0.12)]">
          <h2 className="flex-1 font-['Roboto'] font-medium text-base text-[#222]">
            Bookings
          </h2>

          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="relative w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 bg-[#fafafa] border border-[rgba(0,0,0,0.1)] rounded text-sm outline-none focus:border-gray-300"
              />
            </div>

            {/* Filter */}
            <button className="flex items-center gap-1.5 px-3 py-2 bg-[#fafafa] border border-[rgba(0,0,0,0.1)] rounded hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>

            {/* Today Dropdown */}
            <button className="flex items-center gap-1.5 px-3 py-2 bg-[#fafafa] border border-[rgba(0,0,0,0.1)] rounded hover:bg-gray-100 transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Today</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-5 py-3 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded font-['Roboto'] text-sm border transition-colors ${
                tab.active
                  ? "bg-[#eff6ff] border-[#3b82f6] text-[#3b82f6]"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#fafafa] border-b border-gray-200">
              <tr>
                <th className="px-5 py-3 text-left w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === totalRows}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Booking ID
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Customer & Area
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Assigned Provider
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Service Category
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Escrow Balance
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-[#64748b]">
                  Created/ Slot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <tr
                    key={index}
                    className={`${
                      selectedRows.includes(index)
                        ? "bg-blue-50"
                        : index % 3 === 0
                          ? "bg-[#eff6ff]"
                          : index % 3 === 2
                            ? "bg-[#fff1f2]"
                            : "bg-white"
                    } hover:bg-gray-50`}
                  >
                    <td className="px-5 py-3">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => toggleSelectRow(index)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-5 py-3">
                      <Link
                        to={`/bookings/KB-${8921 + index}`}
                        className="text-sm text-[#3b82f6] font-medium hover:underline"
                      >
                        KB-{8921 + index}
                      </Link>
                    </td>
                    <td className="px-5 py-3">
                      <div className="text-sm text-gray-900">Akua Mensah</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        East Legon
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/150?img=${index + 1}`}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                        <div>
                          <div className="text-sm text-gray-900">John Doe</div>
                          <div className="text-xs text-gray-500">185 Jobs</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900">
                      Deep Cleaning
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs border ${
                          index % 3 === 0
                            ? "bg-[#fef3c7] border-[#fbbf24] text-[#b45309]"
                            : index % 3 === 1
                              ? "bg-[#d1fae5] border-[#10b981] text-[#047857]"
                              : "bg-[#fee2e2] border-[#ef4444] text-[#dc2626]"
                        }`}
                      >
                        {index % 3 === 0
                          ? "In Progress"
                          : index % 3 === 1
                            ? "Completed"
                            : "Disputed"}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">
                      Held 250 GH₵
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">
                      Today, 8:30am
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedRows.length === totalRows}
              onChange={toggleSelectAll}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-xs text-gray-600">Select All</span>
            <div className="w-px h-4 bg-gray-300" />
            <span className="text-xs text-gray-600">
              {selectedRows.length} selected
            </span>
            <button
              className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
              disabled={selectedRows.length === 0}
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">Showing 1-10 of 45</span>
            <div className="flex items-center gap-1 pl-2">
              <button
                className="flex items-center justify-center p-1 border border-gray-900 rounded opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-900 shrink-0" strokeWidth={2} />
              </button>
              <button className="flex items-center justify-center p-1 border border-gray-900 rounded hover:bg-gray-50">
                <ChevronRight className="w-3.5 h-3.5 text-gray-900 shrink-0" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
