"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-nova-radial" />
      <div className="absolute inset-0 bg-nova-radial-orange" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-30" />
      <div className="absolute -left-32 top-20 h-96 w-96 animate-orb-drift rounded-full bg-nova-purple/20 blur-[120px]" />
      <div
        className="absolute -right-24 top-1/3 h-80 w-80 animate-orb-drift rounded-full bg-nova-orange/10 blur-[100px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 animate-pulse-glow rounded-full bg-nova-violet/15 blur-[100px]"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}
