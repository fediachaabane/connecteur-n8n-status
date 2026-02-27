import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "08h", upload: 120, download: 340 },
  { hour: "09h", upload: 180, download: 420 },
  { hour: "10h", upload: 250, download: 580 },
  { hour: "11h", upload: 220, download: 510 },
  { hour: "12h", upload: 190, download: 460 },
  { hour: "13h", upload: 280, download: 620 },
  { hour: "14h", upload: 310, download: 700 },
];

export const TrafficChart = () => (
  <ResponsiveContainer width="100%" height={240}>
    <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
      <defs>
        <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="hsl(220 70% 50%)" stopOpacity={0.2} />
          <stop offset="95%" stopColor="hsl(220 70% 50%)" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="hsl(145 65% 42%)" stopOpacity={0.2} />
          <stop offset="95%" stopColor="hsl(145 65% 42%)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
      <XAxis dataKey="hour" tick={{ fontSize: 12 }} stroke="hsl(220 10% 50%)" />
      <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 10% 50%)" />
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(0 0% 100%)",
          border: "1px solid hsl(220 15% 90%)",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      />
      <Area type="monotone" dataKey="download" stroke="hsl(220 70% 50%)" fill="url(#colorDown)" name="Download (Mbps)" />
      <Area type="monotone" dataKey="upload" stroke="hsl(145 65% 42%)" fill="url(#colorUp)" name="Upload (Mbps)" />
    </AreaChart>
  </ResponsiveContainer>
);
