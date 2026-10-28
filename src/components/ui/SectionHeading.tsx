import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
