import { CPEStatus } from "@/types/cpe";
import { cn } from "@/lib/utils";

const statusConfig: Record<CPEStatus, { label: string; className: string; dotClass: string }> = {
  online: {
    label: "En ligne",
    className: "bg-status-online/10 text-status-online border-status-online/30",
    dotClass: "bg-status-online shadow-[var(--glow-online)]",
  },
  offline: {
    label: "Hors ligne",
    className: "bg-status-offline/10 text-status-offline border-status-offline/30",
    dotClass: "bg-status-offline shadow-[var(--glow-offline)]",
  },
  warning: {
    label: "Alerte",
    className: "bg-status-warning/10 text-status-warning border-status-warning/30",
    dotClass: "bg-status-warning shadow-[var(--glow-warning)]",
  },
  pending: {
    label: "En attente",
    className: "bg-status-pending/10 text-status-pending border-status-pending/30",
    dotClass: "bg-status-pending",
  },
};

export const StatusBadge = ({ status }: { status: CPEStatus }) => {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium font-mono uppercase tracking-wider",
        config.className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", config.dotClass, status === "online" && "animate-pulse-slow")} />
      {config.label}
    </span>
  );
};
