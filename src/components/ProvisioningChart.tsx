import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Lun", success: 12, fail: 1 },
  { day: "Mar", success: 15, fail: 2 },
  { day: "Mer", success: 10, fail: 0 },
  { day: "Jeu", success: 18, fail: 3 },
  { day: "Ven", success: 14, fail: 1 },
  { day: "Sam", success: 5, fail: 0 },
  { day: "Dim", success: 3, fail: 0 },
];

export const ProvisioningChart = () => (
  <ResponsiveContainer width="100%" height={240}>
    <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 90%)" />
      <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220 10% 50%)" />
      <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 10% 50%)" />
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(0 0% 100%)",
          border: "1px solid hsl(220 15% 90%)",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      />
      <Bar dataKey="success" fill="hsl(220 70% 50%)" radius={[4, 4, 0, 0]} name="Réussi" />
      <Bar dataKey="fail" fill="hsl(0 65% 50%)" radius={[4, 4, 0, 0]} name="Échoué" />
    </BarChart>
  </ResponsiveContainer>
);
