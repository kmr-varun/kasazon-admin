import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Pause } from "lucide-react";

// Icons
import backArrow from "@/assets/icons/booking-detail/back-arrow.svg";
import locationIcon from "@/assets/icons/booking-detail/location-icon.svg";
import calendarIcon from "@/assets/icons/booking-detail/calendar-icon.svg";
import geofenceIcon from "@/assets/icons/booking-detail/geofence-icon.svg";
import verifiedUserIcon from "@/assets/icons/booking-detail/verified-user-icon.svg";
import phoneIcon from "@/assets/icons/booking-detail/phone-icon.svg";
import copyIcon from "@/assets/icons/booking-detail/copy-icon.svg";
import addressIcon from "@/assets/icons/booking-detail/address-icon.svg";
import walletIcon from "@/assets/icons/booking-detail/wallet-icon.svg";
import starIcon from "@/assets/icons/booking-detail/star-icon.svg";
import callIcon from "@/assets/icons/booking-detail/call-icon.svg";
import vehicleIcon from "@/assets/icons/booking-detail/vehicle-icon.svg";
import arrivalIcon from "@/assets/icons/booking-detail/arrival-icon.svg";
import calendarCheckIcon from "@/assets/icons/booking-detail/calendar-check-icon.svg";
import checkboxChecked from "@/assets/icons/booking-detail/checkbox-checked.svg";
import checkboxUnchecked from "@/assets/icons/booking-detail/checkbox-unchecked.svg";

export function BookingDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - will be fetched from API
  const booking = {
    id: id || "KB-8921",
    customer: {
      name: "Akua Mensah",
      initials: "AM",
      memberSince: "Feb 2023",
      servicesBooked: 14,
      phone: "+233 24 412 8901",
      address: {
        street: "Plot 14, Boundary Road",
        city: "East Legon, Accra",
        postalCode: "GA-382-0192",
      },
      wallet: "MTN MoMo (024***8901)",
    },
    specialist: {
      name: "Samuel Osei",
      initials: "AM",
      rating: 4.9,
      jobsDone: 184,
      phone: "+233 24 412 8901",
      vehicle: "Haojue Motorcycle",
      vehiclePlate: "GT-4421-22",
      arrivalTime: "09:12 GMT",
    },
    service: {
      category: "Deep Home Cleaning & Sanitization",
      level: "Level 3 Complete Architectural Treatment",
      propertyScope: "4-Bedroom Storey",
      includes: "Includes Kitchen, Balcony & Front Porch",
      scheduledDate: "Today, Oct 24, 2024",
      scheduledTime: "09:00 - 13:00 GMT (4.0 hrs)",
    },
    escrow: {
      total: 650.0,
      commission: 97.5,
      netPay: 552.5,
      txn: "MTN-GH-0192840",
    },
    status: "In Progress",
    escrowHeld: 650.0,
    location: "East Legon, Greater Accra (GA-382-0192)",
    bookedAt: "Oct 24, 2024 at 08:30 GMT",
    checklist: [
      {
        task: "Deep vacuuming of master & guest living lounges",
        completed: true,
        time: "09:32 GMT",
      },
      {
        task: "Window track decontamination & glass polishing",
        completed: true,
        time: "09:51 GMT",
      },
      {
        task: "Heavy kitchen grease extraction & hood degreasing",
        completed: true,
        time: "10:14 GMT",
      },
      {
        task: "Sanitary ware & shower glass chemical descaling",
        completed: true,
        time: "10:45 GMT",
      },
      {
        task: "Ground floor tile high-speed rotary buffing",
        completed: true,
        time: "11:10 GMT",
      },
      {
        task: "Front porch power wash & final waste bagging",
        completed: false,
        time: "IN PROGRESS NOW",
      },
    ],
  };

  const completedTasks = booking.checklist.filter((t) => t.completed).length;
  const totalTasks = booking.checklist.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="flex flex-col gap-2 p-6 bg-gray-50 min-h-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <img src={backArrow} alt="" className="w-[11px] h-2" />
        <div className="flex items-center gap-1 font-['Roboto_Flex'] text-xs text-[#888]">
          <Link to="/bookings" className="hover:text-gray-600">
            Bookings
          </Link>
          <span>/</span>
          <span className="text-[#222] uppercase">{booking.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col gap-1">
            {/* Title and Badges */}
            <div className="flex items-center gap-4">
              <h1 className="font-['Roboto_Flex'] font-medium text-[30px] leading-[1.2] text-[#111827]">
                {booking.id} — {booking.customer.name}
              </h1>
              <div className="flex items-center gap-2">
                {/* Status Badge */}
                <div className="flex items-center justify-center px-[6px] py-[2px] border border-[#ff9500] rounded-[16px]">
                  <p className="font-['Lato'] text-xs text-[#ff9500]">
                    {booking.status}
                  </p>
                </div>
                {/* Escrow Badge */}
                <div className="flex items-center px-3 py-[2px] bg-[#e5eeff] rounded-[12px]">
                  <p className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#002260]">
                    ESCROW HELD: GH₵ {booking.escrowHeld.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Location and Time */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-[#434652]">
                <img
                  src={locationIcon}
                  alt=""
                  className="w-[10.67px] h-[13.33px]"
                />
                <span className="font-['Roboto_Flex']">
                  {booking.location}
                </span>
              </div>
              <span className="text-[#434652]">•</span>
              <div className="flex items-center gap-1 text-[#434652]">
                <img
                  src={calendarIcon}
                  alt=""
                  className="w-[13.33px] h-[13.33px]"
                />
                <span className="font-['Roboto_Flex']">
                  Booked {booking.bookedAt}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#02368c] border border-[#02368c] rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#024A9C] transition-colors">
            <span className="font-['Roboto'] text-xs text-white">
              Release Payout
            </span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#02368c] rounded-md shadow-[0px_1px_1px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors">
            <Check className="w-4 h-4 text-[#02368c]" strokeWidth={2} />
            <span className="font-['Roboto'] text-xs text-[#02368c]">
              Approve
            </span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#02368c] rounded-md shadow-[0px_1px_1px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors">
            <Pause className="w-4 h-4 text-[#02368c]" strokeWidth={2} />
            <span className="font-['Roboto'] text-xs text-[#02368c]">
              Freeze Payout
            </span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#ff9500] rounded-md shadow-[0px_1px_1px_rgba(16,24,40,0.05)] hover:bg-orange-50 transition-colors">
            <span className="font-['Roboto'] text-xs text-[#ff9500]">
              Reassign
            </span>
          </button>
          <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#ff3b30] rounded-md shadow-[0px_1px_1px_rgba(16,24,40,0.05)] hover:bg-red-50 transition-colors">
            <span className="font-['Roboto'] text-xs text-[#ff3b30]">
              Cancel & Refund
            </span>
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="relative bg-[#eef4ff] rounded-lg p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#02368c] rounded-l-lg" />
        <div className="flex items-center justify-between pl-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white rounded-xl w-8 h-8">
              <img
                src={geofenceIcon}
                alt=""
                className="w-[11.67px] h-[16.67px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-['Roboto_Flex'] font-semibold text-[15px] leading-[22px] tracking-[-0.075px] text-[#002260]">
                  Active Geofence Verified: Dispatch On-Site
                </p>
                <div className="flex items-center px-2 py-[2px] bg-[#e5eeff] rounded-xl">
                  <span className="font-['JetBrains_Mono'] text-[10px] leading-[18px] text-[#002260]">
                    RAD: 14m
                  </span>
                </div>
              </div>
              <p className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                Provider Samuel Osei verified at 09:12 GMT via GPS geofence
                ring (GA-382-0192). Live tracker reporting normal battery and
                continuous signal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center justify-center gap-1.5 px-[10px] py-2 rounded-md border transition-colors ${
            activeTab === "overview"
              ? "bg-[linear-gradient(90deg,rgba(68,127,255,0.08)_0%,rgba(68,127,255,0.08)_100%)] border-[#2563eb] text-[#2563eb]"
              : "border-[rgba(0,0,0,0.1)] text-[#666] hover:bg-gray-50"
          }`}
        >
          <span className="font-['Roboto'] text-sm">Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("timeline")}
          className={`flex items-center justify-center gap-1.5 px-[10px] py-2 rounded-md border transition-colors ${
            activeTab === "timeline"
              ? "bg-[linear-gradient(90deg,rgba(68,127,255,0.08)_0%,rgba(68,127,255,0.08)_100%)] border-[#2563eb] text-[#2563eb]"
              : "border-[rgba(0,0,0,0.1)] text-[#666] hover:bg-gray-50"
          }`}
        >
          <span className="font-['Roboto'] text-sm">Timeline & Audit Log</span>
        </button>
        <button
          onClick={() => setActiveTab("evidence")}
          className={`flex items-center justify-center gap-1.5 px-[10px] py-2 rounded-md border transition-colors ${
            activeTab === "evidence"
              ? "bg-[linear-gradient(90deg,rgba(68,127,255,0.08)_0%,rgba(68,127,255,0.08)_100%)] border-[#2563eb] text-[#2563eb]"
              : "border-[rgba(0,0,0,0.1)] text-[#666] hover:bg-gray-50"
          }`}
        >
          <span className="font-['Roboto'] text-sm">Evidence & Quality</span>
        </button>
      </div>

      {/* Main Content - Two Column Layout */}
      {activeTab === "overview" && (
        <div className="flex gap-2">
          {/* Left Column */}
          <div className="flex flex-col gap-2 w-[507px]">
            {/* Customer Details Card */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-[18px] border-b border-[rgba(0,0,0,0.12)]">
                <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222]">
                  Customer Details
                </h3>
                <div className="flex items-center gap-1 px-[10px] py-[3px] bg-[#e5eeff] rounded-xl">
                  <img
                    src={verifiedUserIcon}
                    alt=""
                    className="w-[12.83px] h-[12.25px]"
                  />
                  <span className="font-['Roboto_Flex'] font-semibold text-[11px] leading-[14px] tracking-[0.33px] text-[#002260]">
                    VERIFIED USER
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 px-5 py-4">
                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#e5eeff] rounded-full">
                    <span className="font-['Roboto_Flex'] font-medium text-lg tracking-[-0.18px] text-[#002260]">
                      {booking.customer.initials}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Roboto_Flex'] font-semibold text-[15px] leading-[22px] tracking-[-0.075px] text-[#121c28]">
                      {booking.customer.name}
                    </p>
                    <p className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                      Member since {booking.customer.memberSince} •{" "}
                      {booking.customer.servicesBooked} Services Booked
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-1.5 pt-2">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2">
                      <img
                        src={phoneIcon}
                        alt=""
                        className="w-3 h-3"
                      />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Phone
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#121c28]">
                        {booking.customer.phone}
                      </span>
                      <img
                        src={copyIcon}
                        alt=""
                        className="w-[11.33px] h-[13.33px] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2 pt-[2px]">
                      <img
                        src={addressIcon}
                        alt=""
                        className="w-[10.67px] h-[13.33px]"
                      />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Address
                      </span>
                    </div>
                    <div className="flex flex-col items-end text-xs text-right">
                      <p className="font-['Roboto_Flex'] leading-4 text-[#121c28]">
                        {booking.customer.address.street}
                      </p>
                      <p className="font-['Roboto_Flex'] leading-4 text-[#434652]">
                        {booking.customer.address.city}
                      </p>
                      <p className="font-['Roboto_Flex'] leading-4 text-[#002260]">
                        GhanaPost: {booking.customer.address.postalCode}
                      </p>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div className="flex items-center justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2">
                      <img
                        src={walletIcon}
                        alt=""
                        className="w-[12.67px] h-3"
                      />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Wallet Source
                      </span>
                    </div>
                    <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#121c28]">
                      {booking.customer.wallet}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assigned Specialist Card */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-[18px] border-b border-[rgba(0,0,0,0.12)]">
                <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222]">
                  Assigned Specialist
                </h3>
                <div className="flex items-center px-[10px] py-1 bg-[#ff9500] rounded-[30px]">
                  <span className="font-['Roboto_Flex'] font-medium text-[11px] leading-[14px] tracking-[0.33px] text-white">
                    TOP RATED PARTNER
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 px-5 py-4">
                {/* Specialist Info */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#e5eeff] rounded-full">
                    <span className="font-['Roboto_Flex'] font-medium text-lg tracking-[-0.18px] text-[#002260]">
                      {booking.specialist.initials}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Roboto_Flex'] font-semibold text-[15px] leading-[22px] tracking-[-0.075px] text-[#121c28]">
                      {booking.specialist.name}
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <div className="flex items-center gap-1">
                        <img
                          src={starIcon}
                          alt=""
                          className="w-[11.67px] h-[11.08px]"
                        />
                        <span className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.33px] text-[#ca9700]">
                          {booking.specialist.rating}
                        </span>
                      </div>
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        {booking.specialist.jobsDone} Jobs Done
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-1.5 pt-2">
                  {/* Direct Call */}
                  <div className="flex items-center justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2">
                      <img src={callIcon} alt="" className="w-4 h-4" />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Direct Call
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#121c28]">
                        {booking.specialist.phone}
                      </span>
                      <button className="flex items-center justify-center px-2 bg-[#02368c] rounded-[2px]">
                        <span className="font-['Roboto_Flex'] text-[8px] leading-4 text-white">
                          Call
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Vehicle */}
                  <div className="flex items-center justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2 pt-[2px]">
                      <img src={vehicleIcon} alt="" className="w-4 h-[9.33px]" />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Vehicle Dispatch
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#121c28]">
                        {booking.specialist.vehicle}
                      </span>
                      <div className="flex items-center px-1.5 py-[2px] bg-[#e5eeff] rounded-[2px]">
                        <span className="font-['JetBrains_Mono'] font-medium text-xs leading-4 text-[#002260]">
                          {booking.specialist.vehiclePlate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrival Time */}
                  <div className="flex items-center justify-between p-[10px] bg-[#eef4ff] rounded">
                    <div className="flex items-center gap-2">
                      <img src={arrivalIcon} alt="" className="w-4 h-[13.33px]" />
                      <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                        Arrival Time
                      </span>
                    </div>
                    <span className="font-['Roboto_Flex'] text-xs leading-4 text-[#121c28]">
                      Arrival {booking.specialist.arrivalTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Escrow Settlement Card */}
            <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center px-5 py-[18px] border-b border-[rgba(0,0,0,0.12)]">
                <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222]">
                  Escrow Settlement Architecture
                </h3>
              </div>

              {/* Content */}
              <div className="flex gap-2 px-5 py-4">
                {/* Total */}
                <div className="flex-1 flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                  <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                    Customer Escrow Total
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Roboto_Flex'] text-lg tracking-[-0.36px] text-[#002260]">
                      GH₵ {booking.escrow.total.toFixed(2)}
                    </p>
                    <p className="font-['Roboto_Flex'] text-[10px] leading-[1.3] text-[#434652]">
                      TXN: {booking.escrow.txn}
                    </p>
                  </div>
                </div>

                {/* Commission */}
                <div className="flex-1 flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                  <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                    Platform Commission
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Roboto_Flex'] text-lg tracking-[-0.36px] text-[#121c28]">
                      GH₵ {booking.escrow.commission.toFixed(2)}
                    </p>
                    <p className="font-['Roboto_Flex'] text-[10px] leading-[1.3] text-[#434652]">
                      Service fee & insurance cover
                    </p>
                  </div>
                </div>

                {/* Net Pay */}
                <div className="flex-1 flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                  <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                    Net Provider Pay
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Roboto_Flex'] text-lg tracking-[-0.36px] text-[#785a00]">
                      GH₵ {booking.escrow.netPay.toFixed(2)}
                    </p>
                    <p className="font-['Roboto_Flex'] text-[10px] leading-[1.3] text-[#434652]">
                      Destination: Samuel Osei Wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center px-5 py-[18px] border-b border-[rgba(0,0,0,0.12)]">
              <h3 className="font-['Roboto_Flex'] font-medium text-base text-[#222]">
                Service Specifications
              </h3>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 px-4 py-4">
              {/* Category and Property */}
              <div className="flex gap-1.5">
                <div className="flex-1 flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                  <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                    Category & Type
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Roboto_Flex'] font-semibold text-sm leading-[22px] text-[#121c28]">
                      {booking.service.category}
                    </p>
                    <p className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                      {booking.service.level}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                  <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                    Property Scope
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Roboto_Flex'] font-semibold text-sm leading-[22px] text-[#121c28]">
                      {booking.service.propertyScope}
                    </p>
                    <p className="font-['Roboto_Flex'] text-xs leading-4 text-[#434652]">
                      {booking.service.includes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex flex-col gap-3 p-3 bg-[#eef4ff] rounded">
                <span className="font-['Roboto_Flex'] text-[11px] leading-[14px] text-[#434652]">
                  Scheduled Execution Window
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={calendarCheckIcon}
                      alt=""
                      className="w-3 h-[13.33px]"
                    />
                    <p className="font-['Roboto_Flex'] font-medium text-[13px] leading-[18px] text-[#121c28]">
                      {booking.service.scheduledDate}
                    </p>
                  </div>
                  <p className="font-['JetBrains_Mono'] font-semibold text-xs leading-4 text-[#002260]">
                    {booking.service.scheduledTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3 pt-3 px-4 pb-4">
              <p className="font-['Roboto_Flex'] font-semibold text-[15px] leading-[22px] tracking-[-0.075px] text-[#121c28]">
                On-Site Task Verification Checklist
              </p>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-[#e5eeff] rounded-xl overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-[#02368c] rounded-xl"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Checklist Items */}
              <div className="flex flex-col gap-1 pt-1">
                {booking.checklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-[10px] rounded"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          item.completed ? checkboxChecked : checkboxUnchecked
                        }
                        alt=""
                        className="w-[13.5px] h-[13.5px]"
                      />
                      <p
                        className={`font-['Roboto_Flex'] ${
                          item.completed ? "font-medium" : "font-semibold"
                        } text-xs leading-4 ${
                          item.completed
                            ? "text-[#434652] line-through"
                            : "text-[#121c28]"
                        }`}
                      >
                        {item.task}
                      </p>
                    </div>
                    <p
                      className={`${
                        item.completed
                          ? "font-['JetBrains_Mono'] font-medium text-[#434652]"
                          : "font-['Roboto'] text-[#785a00]"
                      } text-xs leading-4`}
                    >
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "timeline" && (
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-8">
          <p className="text-gray-500">Timeline & Audit Log content coming soon...</p>
        </div>
      )}

      {activeTab === "evidence" && (
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-8">
          <p className="text-gray-500">Evidence & Quality content coming soon...</p>
        </div>
      )}
    </div>
  );
}
