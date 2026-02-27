import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "À jour", value: 5 },
  { name: "Mise à jour dispo", value: 2 },
  { name: "Obsolète", value: 1 },
];

const COLORS = ["hsl(145 65% 42%)", "hsl(38 90% 50%)", "hsl(0 65% 50%)"];

export const FirmwareChart = () => (
  <ResponsiveContainer width="100%" height={240}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
        paddingAngle={4}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(0 0% 100%)",
          border: "1px solid hsl(220 15% 90%)",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      />
      <Legend
        iconType="circle"
        wrapperStyle={{ fontSize: "12px" }}
      />
    </PieChart>
  </ResponsiveContainer>
);
