interface BookingStatCardProps {
  label: string;
  value: string | number;
  icon: string;
  iconBg: string;
  trendIcon?: string;
  trendText?: string;
  trendColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  badge?: {
    text: string;
    bg: string;
    border: string;
    color: string;
  };
  valueColor?: string;
}

export function BookingStatCard({
  label,
  value,
  icon,
  iconBg,
  trendIcon,
  trendText,
  trendColor = "#059669",
  subtitle,
  subtitleColor = "#94a3b8",
  badge,
  valueColor = "#0f172a",
}: BookingStatCardProps) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-xl p-[17px] shadow-sm flex flex-col justify-between h-full">
      {/* Header with label and icon */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-['Roboto_Flex'] font-medium text-[12px] leading-4 text-[#64748b]">
          {label}
        </span>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconBg }}
        >
          <img src={icon} alt="" className="w-auto h-auto max-w-full max-h-full" />
        </div>
      </div>

      {/* Value */}
      <div className="space-y-1">
        <div
          className="font-['Roboto_Flex'] font-medium text-[20px] leading-none"
          style={{ color: valueColor }}
        >
          {value}
        </div>

        {/* Trend or Badge + Subtitle */}
        <div className="flex items-center gap-1.5 min-h-[22px]">
          {trendIcon && trendText && (
            <div className="flex items-center gap-0">
              <img src={trendIcon} alt="" className="w-[11.2px] h-auto" />
              <span
                className="font-['Roboto_Flex'] font-medium text-[12px] leading-4"
                style={{ color: trendColor }}
              >
                {trendText}
              </span>
            </div>
          )}

          {badge && (
            <div
              className="px-[7px] py-[3px] rounded border inline-flex items-center"
              style={{
                backgroundColor: badge.bg,
                borderColor: badge.border,
                color: badge.color,
              }}
            >
              <span className="font-['Roboto_Flex'] font-medium text-[12px] leading-[16px]">
                {badge.text}
              </span>
            </div>
          )}

          {subtitle && (
            <span
              className="font-['Roboto_Flex'] text-[12px] leading-4"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
