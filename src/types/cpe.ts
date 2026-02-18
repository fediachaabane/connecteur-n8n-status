export type CPEStatus = "online" | "offline" | "warning" | "pending";

export interface CPE {
  id: string;
  name: string;
  ip: string;
  mac: string;
  status: CPEStatus;
  lastSeen: string;
  location: string;
  model: string;
  uptime?: string;
  signal?: number;
}
