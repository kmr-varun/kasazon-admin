interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconBg: string;
  changeIcon?: string;
  changeText?: string;
  changeColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  valueColor?: string;
  badge?: {
    text: string;
    bg: string;
    border: string;
    textColor: string;
  };
}

export function StatCard({
  title,
  value,
  icon,
  iconBg,
  changeIcon,
  changeText,
  changeColor = "#059669",
  subtitle,
  subtitleColor = "#94a3b8",
  valueColor = "#0f172a",
  badge,
}: StatCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-500">{title}</p>
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg}`}
        >
          <img src={icon} alt="" className="h-auto w-auto max-h-4 max-w-4" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 flex flex-col gap-1">
        <p
          className="text-xl font-medium"
          style={{
            color: valueColor,
          }}
        >
          {value}
        </p>

        <div className="flex min-h-[22px] items-center gap-1.5 text-xs">
          {badge ? (
            <>
              <div
                className={`flex items-center rounded border px-2 py-0.5 ${badge.bg} ${badge.border}`}
              >
                <span className="font-medium" style={{ color: badge.textColor }}>
                  {badge.text}
                </span>
              </div>
              {subtitle && (
                <span style={{ color: subtitleColor }}>{subtitle}</span>
              )}
            </>
          ) : changeIcon ? (
            <>
              <div className="flex items-center gap-0.5">
                <img src={changeIcon} alt="" className="h-1.5 w-2.5" />
                <span className="font-medium" style={{ color: changeColor }}>
                  {changeText}
                </span>
              </div>
              {subtitle && (
                <span style={{ color: subtitleColor }}>{subtitle}</span>
              )}
            </>
          ) : (
            subtitle && (
              <div className="flex items-center gap-1">
                <img
                  src="/src/assets/icons/clock-icon.svg"
                  alt=""
                  className="h-3 w-3"
                />
                <span className="text-gray-500">{subtitle}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
