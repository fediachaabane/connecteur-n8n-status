import { CPE } from "@/types/cpe";
import { StatusBadge } from "./StatusBadge";
import { MapPin, Clock, Wifi, Activity, Server } from "lucide-react";

const InfoRow = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
    <span className="text-muted-foreground">{label}</span>
    <span className="ml-auto font-mono text-xs text-foreground/80 truncate">{value}</span>
  </div>
);

export const CPECard = ({ cpe }: { cpe: CPE }) => {
  const lastSeenDate = new Date(cpe.lastSeen);
  const timeAgo = getTimeAgo(lastSeenDate);

  return (
    <div className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(175_70%_45%/0.08)]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-foreground">{cpe.name}</h3>
          <p className="font-mono text-xs text-muted-foreground mt-0.5">{cpe.ip}</p>
        </div>
        <StatusBadge status={cpe.status} />
      </div>

      <div className="space-y-2.5">
        <InfoRow icon={MapPin} label="Site" value={cpe.location} />
        <InfoRow icon={Server} label="Modèle" value={cpe.model} />
        <InfoRow icon={Clock} label="Vu" value={timeAgo} />
        {cpe.uptime && <InfoRow icon={Activity} label="Uptime" value={cpe.uptime} />}
        {cpe.signal !== undefined && (
          <InfoRow icon={Wifi} label="Signal" value={`${cpe.signal} dBm`} />
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-border">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
          MAC: {cpe.mac}
        </p>
      </div>
    </div>
  );
};

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return "à l'instant";
  if (diff < 3600) return `il y a ${Math.floor(diff / 60)}min`;
  if (diff < 86400) return `il y a ${Math.floor(diff / 3600)}h`;
  return `il y a ${Math.floor(diff / 86400)}j`;
}
