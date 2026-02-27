import { Alert } from "@/data/mockAlerts";
import { AlertTriangle, XCircle, Info } from "lucide-react";

const iconMap = {
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  error: "text-status-offline bg-status-offline/10",
  warning: "text-status-warning bg-status-warning/10",
  info: "text-primary bg-primary/10",
};

export const AlertsList = ({ alerts }: { alerts: Alert[] }) => (
  <div className="space-y-3">
    {alerts.map((alert) => {
      const Icon = iconMap[alert.type];
      const colors = colorMap[alert.type];
      const time = new Date(alert.timestamp).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

      return (
        <div key={alert.id} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
          <div className={`rounded-md p-1.5 ${colors}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{alert.message}</p>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">{alert.cpe} • {time}</p>
          </div>
        </div>
      );
    })}
  </div>
);
