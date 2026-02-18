import { CPE } from "@/types/cpe";
import { Wifi, WifiOff, AlertTriangle, Clock } from "lucide-react";

interface StatCardProps {
  icon: any;
  label: string;
  value: number;
  colorClass: string;
}

const StatCard = ({ icon: Icon, label, value, colorClass }: StatCardProps) => (
  <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
    <div className={`rounded-md p-2 ${colorClass}`}>
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="text-2xl font-bold font-display">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

export const StatsBar = ({ cpes }: { cpes: CPE[] }) => {
  const online = cpes.filter((c) => c.status === "online").length;
  const offline = cpes.filter((c) => c.status === "offline").length;
  const warning = cpes.filter((c) => c.status === "warning").length;
  const pending = cpes.filter((c) => c.status === "pending").length;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard icon={Wifi} label="En ligne" value={online} colorClass="bg-status-online/10 text-status-online" />
      <StatCard icon={WifiOff} label="Hors ligne" value={offline} colorClass="bg-status-offline/10 text-status-offline" />
      <StatCard icon={AlertTriangle} label="Alertes" value={warning} colorClass="bg-status-warning/10 text-status-warning" />
      <StatCard icon={Clock} label="En attente" value={pending} colorClass="bg-status-pending/10 text-status-pending" />
    </div>
  );
};
