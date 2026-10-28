export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nova-bg">
      <div className="flex flex-col items-center gap-5">
        <div className="h-10 w-10 animate-pulse rounded-md border border-white/15 bg-white/[0.04]" />
        <p className="text-xs font-medium tracking-[0.28em] text-zinc-500">
          GLITCH
        </p>
      </div>
    </div>
  );
}
