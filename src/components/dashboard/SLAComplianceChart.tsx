import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  {
    stage: "Assignment",
    value: 98.1,
    label: "Avg 4.2m dispatch",
  },
  {
    stage: "Arrival",
    value: 95.4,
    label: "Within ±15m geo-window",
  },
  {
    stage: "Completion",
    value: 97.8,
    label: "Within scheduled slot",
  },
  {
    stage: "Dispute Resolution",
    value: 93.5,
    label: "Resolved within 48h SLA",
  },
];

const TARGET = 95;

export function SLAComplianceChart() {
  const getBarColor = (value: number) => {
    return value >= TARGET ? "#02368c" : "#92400e";
  };

  return (
    <div className="flex flex-1 flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-gray-200 px-5 py-4">
        <div className="flex-1">
          <h3 className="font-['Roboto_Flex'] text-base font-medium text-gray-900">
            SLA Compliance Rate by Stage
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            Target adherence across core service delivery lifecycle stages
          </p>
        </div>
        <div className="ml-4 flex items-center gap-2 rounded bg-blue-50 px-3 py-1">
          <img
            src="/src/assets/icons/target-icon.svg"
            alt=""
            className="h-3 w-3"
          />
          <span className="whitespace-nowrap text-xs font-medium text-gray-900">
            Target: {TARGET}%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="p-4">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              type="category"
              dataKey="stage"
              tick={{ fontSize: 12, fill: "#111827" }}
              axisLine={false}
              tickLine={false}
            />
            <ReferenceLine
              x={TARGET}
              stroke="#dc2626"
              strokeWidth={2}
              strokeDasharray="0"
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={16}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Stage Details */}
        <div className="mt-4 space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: getBarColor(item.value) }}
                />
                <span className="font-medium text-gray-900">{item.stage}</span>
              </div>
              <span className="text-gray-500">{item.label}</span>
              <span
                className="font-bold"
                style={{ color: getBarColor(item.value) }}
              >
                {item.value}%
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-2 bg-red-600" />
            <span className="text-xs text-gray-500">
              Red line indicates {TARGET}% target threshold
            </span>
          </div>
          <span className="text-xs font-semibold text-blue-900">
            {data.filter((d) => d.value >= TARGET).length} of {data.length}{" "}
            stages exceeding baseline
          </span>
        </div>
      </div>
    </div>
  );
}
