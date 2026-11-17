import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Oct 1", bookings: 45, disputes: 0.8 },
  { date: "Oct 6", bookings: 52, disputes: 1.2 },
  { date: "Oct 11", bookings: 68, disputes: 1.5 },
  { date: "Oct 16", bookings: 85, disputes: 1.8 },
  { date: "Oct 21", bookings: 95, disputes: 2.0 },
  { date: "Oct 26", bookings: 72, disputes: 1.3 },
  { date: "Oct 31", bookings: 25, disputes: 0.8 },
];

export function BookingVolumeChart() {
  return (
    <div className="flex flex-1 flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-5 py-4">
        <h3 className="font-['Roboto_Flex'] text-base font-medium text-gray-900">
          Booking Volume & Dispute Frequency Trends
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          Daily service fulfillment vs escalated dispute incidence over 30 days
        </p>
      </div>

      {/* Chart */}
      <div className="p-4">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 11, fill: "#92400e" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "4px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#93c5fd", marginBottom: "4px" }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend
              wrapperStyle={{ paddingTop: "16px" }}
              iconType="circle"
              iconSize={10}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="bookings"
              name="Bookings"
              stroke="#02368c"
              strokeWidth={2}
              dot={{ fill: "#02368c", r: 3 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="disputes"
              name="Disputes (%)"
              stroke="#92400e"
              strokeWidth={2}
              dot={{ fill: "#92400e", r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
