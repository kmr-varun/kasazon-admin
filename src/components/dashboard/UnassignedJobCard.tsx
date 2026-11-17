import clockIcon from "@/assets/icons/jobs/clock.svg";
import locationIcon from "@/assets/icons/jobs/location.svg";
import usersIcon from "@/assets/icons/jobs/users.svg";

interface UnassignedJobCardProps {
  bookingId: string;
  timeElapsed: string;
  title: string;
  customerName: string;
  location: string;
  escrowAmount: string;
  paymentMethod: string;
}

export function UnassignedJobCard({
  bookingId,
  timeElapsed,
  title,
  customerName,
  location,
  escrowAmount,
  paymentMethod,
}: UnassignedJobCardProps) {
  return (
    <div className="bg-[rgba(248,250,252,0.6)] border border-[rgba(226,232,240,0.8)] rounded-xl p-4 flex flex-col gap-1">
      {/* Header: ID and Timer */}
      <div className="flex items-center justify-between mb-1">
        <span className="font-['JetBrains_Mono'] font-bold text-[12px] leading-4 text-[#1d4ed8]">
          {bookingId}
        </span>
        <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1f2] border border-[#fecdd3] rounded-full">
          <img src={clockIcon} alt="" className="w-[8.4px] h-[9.9px]" />
          <span className="font-['JetBrains_Mono'] font-medium text-[11px] leading-[16.5px] text-[#e11d48]">
            {timeElapsed}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-['Roboto_Flex'] font-semibold text-[14px] leading-5 text-[#0f172a] mt-1">
        {title}
      </h3>

      {/* Customer */}
      <div className="font-['Roboto_Flex'] text-[12px] leading-4">
        <span className="text-[#64748b]">Customer: </span>
        <span className="font-bold text-[#1e293b]">{customerName}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1">
        <img src={locationIcon} alt="" className="w-[9.1px] h-[11.2px]" />
        <span className="font-['Roboto_Flex'] text-[12px] leading-4 text-[#64748b]">
          {location}
        </span>
      </div>

      {/* Escrow Box */}
      <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-lg p-3 mt-2">
        <span className="font-['Roboto_Flex'] text-[12px] leading-4 text-[#64748b]">
          Escrow Held:
        </span>
        <span className="font-['JetBrains_Mono'] font-bold text-[12px] leading-4 text-[#047857]">
          {escrowAmount} ({paymentMethod})
        </span>
      </div>

      {/* Assign Button */}
      <button className="flex items-center justify-center gap-1.5 h-8 bg-[#02368c] rounded-lg mt-1 hover:bg-[#024A9C] transition-colors shadow-sm">
        <img src={usersIcon} alt="" className="w-[12.8px] h-[9.6px]" />
        <span className="font-['Roboto_Flex'] font-medium text-[12px] leading-4 text-white">
          Assign Provider Manually
        </span>
      </button>
    </div>
  );
}
