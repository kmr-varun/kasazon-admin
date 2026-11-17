interface AlertItemProps {
  icon: string;
  iconBg: string;
  iconBorder: string;
  title: string;
  titleColor: string;
  time: string;
  description: React.ReactNode;
  actionText: string;
  actionStyle: "filled" | "outlined";
  actionBorderColor?: string;
}

export function AlertItem({
  icon,
  iconBg,
  iconBorder,
  title,
  titleColor,
  time,
  description,
  actionText,
  actionStyle,
  actionBorderColor = "#e2e8f0",
}: AlertItemProps) {
  return (
    <div className="flex items-start gap-3 p-4 border-t border-[#f1f5f9]">
      {/* Icon */}
      <div
        className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 border"
        style={{
          backgroundColor: iconBg,
          borderColor: iconBorder,
        }}
      >
        <img src={icon} alt="" className="w-auto h-auto max-w-full max-h-full" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4
            className="font-['Roboto_Flex'] font-bold text-[12px] leading-4"
            style={{ color: titleColor }}
          >
            {title}
          </h4>
          <span className="font-['JetBrains_Mono'] text-[11px] leading-[16.5px] text-[#94a3b8] whitespace-nowrap">
            {time}
          </span>
        </div>
        <div className="font-['Roboto_Flex'] text-[12px] leading-[19.5px] text-[#475569] mb-2">
          {description}
        </div>
      </div>

      {/* Action Button */}
      <div className="shrink-0 w-[130px] flex justify-end">
        <button
          className={`
            px-[13px] py-[5px] rounded-lg border font-['Roboto_Flex'] font-medium text-[12px] leading-4 whitespace-nowrap
            transition-colors hover:opacity-80
          `}
          style={{
            backgroundColor: actionStyle === "filled" ? "white" : "white",
            borderColor: actionBorderColor,
            color: actionStyle === "filled" ? "#e11d48" : "#334155",
          }}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}
