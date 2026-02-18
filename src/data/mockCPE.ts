import { CPE } from "@/types/cpe";

export const mockCPEs: CPE[] = [
  { id: "cpe-001", name: "CPE-Paris-01", ip: "192.168.1.10", mac: "AA:BB:CC:11:22:33", status: "online", lastSeen: "2026-02-18T14:32:00", location: "Paris - Site A", model: "Huawei HG8245H", uptime: "14j 3h 22m", signal: -18 },
  { id: "cpe-002", name: "CPE-Lyon-01", ip: "192.168.2.15", mac: "AA:BB:CC:44:55:66", status: "offline", lastSeen: "2026-02-18T09:15:00", location: "Lyon - Site B", model: "ZTE F670L", uptime: undefined, signal: undefined },
  { id: "cpe-003", name: "CPE-Marseille-01", ip: "192.168.3.20", mac: "AA:BB:CC:77:88:99", status: "warning", lastSeen: "2026-02-18T14:28:00", location: "Marseille - Site C", model: "Nokia G-240W-A", uptime: "2j 11h 05m", signal: -27 },
  { id: "cpe-004", name: "CPE-Toulouse-01", ip: "192.168.4.30", mac: "DD:EE:FF:11:22:33", status: "online", lastSeen: "2026-02-18T14:31:00", location: "Toulouse - Site D", model: "Huawei HG8245H", uptime: "45j 8h 12m", signal: -15 },
  { id: "cpe-005", name: "CPE-Bordeaux-01", ip: "192.168.5.40", mac: "DD:EE:FF:44:55:66", status: "pending", lastSeen: "2026-02-18T13:00:00", location: "Bordeaux - Site E", model: "ZTE F670L", uptime: undefined, signal: undefined },
  { id: "cpe-006", name: "CPE-Nice-01", ip: "192.168.6.50", mac: "DD:EE:FF:77:88:99", status: "online", lastSeen: "2026-02-18T14:30:00", location: "Nice - Site F", model: "Nokia G-240W-A", uptime: "7j 19h 44m", signal: -20 },
  { id: "cpe-007", name: "CPE-Nantes-01", ip: "192.168.7.60", mac: "11:22:33:AA:BB:CC", status: "offline", lastSeen: "2026-02-17T22:10:00", location: "Nantes - Site G", model: "Huawei HG8245H", uptime: undefined, signal: undefined },
  { id: "cpe-008", name: "CPE-Lille-01", ip: "192.168.8.70", mac: "11:22:33:DD:EE:FF", status: "online", lastSeen: "2026-02-18T14:33:00", location: "Lille - Site H", model: "ZTE F670L", uptime: "30j 2h 55m", signal: -12 },
];
