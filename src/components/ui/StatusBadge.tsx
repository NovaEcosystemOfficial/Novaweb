import type { StatusKey } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Distinct, readable status chips for catalog and product surfaces. */
const styles: Record<StatusKey, string> = {
  available: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/35",
  completed: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/35",
  beta: "bg-sky-500/15 text-sky-300 ring-sky-400/35",
  alpha: "bg-amber-500/12 text-amber-200 ring-amber-400/30",
  developing: "bg-violet-500/12 text-violet-200 ring-violet-400/30",
  experimental: "bg-cyan-500/12 text-cyan-200 ring-violet-400/25",
  inProgress: "bg-sky-500/12 text-sky-200 ring-sky-400/30",
  comingSoon: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/25",
  planned: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/25",
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
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}
