import type { StatusKey } from "@/lib/data";
import { cn } from "@/lib/utils";

const styles: Record<StatusKey, string> = {
  available: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/25",
  completed: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/25",
  alpha: "bg-zinc-500/15 text-zinc-300 ring-zinc-400/25",
  beta: "bg-zinc-500/15 text-zinc-200 ring-zinc-400/30",
  inProgress: "bg-zinc-500/15 text-zinc-300 ring-zinc-400/25",
  developing: "bg-zinc-500/15 text-zinc-300 ring-zinc-400/25",
  comingSoon: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
  experimental: "bg-zinc-500/15 text-zinc-300 ring-zinc-400/25",
  planned: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
};

export function StatusBadge({
  status,
  label,
}: {
  status: StatusKey;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1",
        styles[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
