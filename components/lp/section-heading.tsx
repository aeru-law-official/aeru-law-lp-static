import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow ? (
        <span className="mb-3 inline-flex items-center gap-2 font-sans text-sm font-bold tracking-wide text-navy md:text-base">
          <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <div className="relative inline-block">
        <h2 className="text-pretty rounded-2xl bg-navy px-7 py-3 font-sans text-lg font-bold leading-relaxed text-white shadow-[0_6px_0_0_var(--navy-deep)] md:px-10 md:text-2xl">
          {title}
        </h2>
        <span
          className="absolute -bottom-2 left-1/2 size-0 -translate-x-1/2 border-x-[10px] border-t-[12px] border-x-transparent border-t-navy"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
