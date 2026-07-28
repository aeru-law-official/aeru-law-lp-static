import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type CtaButtonProps = {
  href: string
  children: ReactNode
  className?: string
  size?: "md" | "lg"
  variant?: "green" | "blue" | "white"
}

const variants = {
  green:
    "bg-terracotta text-white shadow-[0_5px_0_0_#1f7a3f] hover:bg-coral",
  blue: "bg-navy text-white shadow-[0_5px_0_0_var(--navy-deep)] hover:brightness-110",
  white:
    "bg-white text-navy border-2 border-navy shadow-[0_5px_0_0_var(--navy-deep)] hover:bg-cream",
}

export function CtaButton({ href, children, className, size = "md", variant = "green" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-1.5 rounded-full font-sans font-bold transition-all duration-150 hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#1f7a3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
        variants[variant],
        size === "lg" ? "px-8 py-4 text-base md:text-lg" : "px-6 py-3 text-sm md:text-base",
        className,
      )}
    >
      {children}
      <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  )
}
