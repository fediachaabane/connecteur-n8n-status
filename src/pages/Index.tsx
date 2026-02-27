import { useState } from "react";
import { mockCPEs } from "@/data/mockCPE";
import { mockAlerts } from "@/data/mockAlerts";
import { CPECard } from "@/components/CPECard";
import { StatsBar } from "@/components/StatsBar";
import { AlertsList } from "@/components/AlertsList";
import { TrafficChart } from "@/components/TrafficChart";
import { FirmwareChart } from "@/components/FirmwareChart";
import { ProvisioningChart } from "@/components/ProvisioningChart";
import { CPEStatus } from "@/types/cpe";
import { Radio, Search, Bell, BarChart3, Cpu } from "lucide-react";

const filters: { label: string; value: CPEStatus | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "En ligne", value: "online" },
  { label: "Hors ligne", value: "offline" },
  { label: "Alertes", value: "warning" },
  { label: "En attente", value: "pending" },
];

const Index = () => {
  const [filter, setFilter] = useState<CPEStatus | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = mockCPEs.filter((cpe) => {
    const matchesFilter = filter === "all" || cpe.status === filter;
    const matchesSearch =
      search === "" ||
      cpe.name.toLowerCase().includes(search.toLowerCase()) ||
      cpe.ip.includes(search) ||
      cpe.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2.5">
                <Radio className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-display text-foreground">
                  Connecteur
                </h1>
                <p className="text-xs text-muted-foreground font-mono">
                  Monitoring CPE • n8n
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-status-online animate-pulse-slow" />
              Synchronisé
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        {/* Stats */}
        <StatsBar cpes={mockCPEs} />

        {/* Charts Row */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-foreground">Trafic réseau</h2>
            </div>
            <TrafficChart />
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-foreground">Firmware</h2>
            </div>
            <FirmwareChart />
          </div>
        </div>

        {/* Provisioning + Alerts Row */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-foreground">Provisionnement (7 jours)</h2>
            </div>
            <ProvisioningChart />
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-4 w-4 text-status-warning" />
              <h2 className="font-display font-semibold text-foreground">Alertes récentes</h2>
            </div>
            <div className="max-h-[240px] overflow-y-auto">
              <AlertsList alerts={mockAlerts} />
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium font-mono uppercase tracking-wider transition-all ${
                  filter === f.value
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher un CPE..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 rounded-lg border border-border bg-card pl-9 pr-4 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* CPE Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((cpe) => (
              <CPECard key={cpe.id} cpe={cpe} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Radio className="h-12 w-12 mb-4 opacity-30" />
            <p className="font-display text-lg">Aucun CPE trouvé</p>
            <p className="text-sm font-mono mt-1">Essayez un autre filtre ou recherche</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
