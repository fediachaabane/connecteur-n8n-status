export interface Alert {
  id: string;
  type: "error" | "warning" | "info";
  message: string;
  cpe: string;
  timestamp: string;
}

export const mockAlerts: Alert[] = [
  { id: "a1", type: "error", message: "Panne détectée — liaison perdue", cpe: "CPE-Lyon-01", timestamp: "2026-02-27T14:05:00" },
  { id: "a2", type: "warning", message: "Signal dégradé (-27 dBm)", cpe: "CPE-Marseille-01", timestamp: "2026-02-27T13:48:00" },
  { id: "a3", type: "info", message: "Mise à jour firmware en attente", cpe: "CPE-Bordeaux-01", timestamp: "2026-02-27T13:30:00" },
  { id: "a4", type: "error", message: "Panne détectée — aucune réponse", cpe: "CPE-Nantes-01", timestamp: "2026-02-27T12:10:00" },
  { id: "a5", type: "warning", message: "Uptime faible (2j 11h)", cpe: "CPE-Marseille-01", timestamp: "2026-02-27T11:55:00" },
  { id: "a6", type: "info", message: "Provisionnement réussi", cpe: "CPE-Nice-01", timestamp: "2026-02-27T10:20:00" },
];
