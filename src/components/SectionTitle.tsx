'use client'
import { cn } from '@/utils/cn'

interface SectionTitleProps {
  title: string;
  lang: string;
  className?: string;
}

export function SectionTitle({ title, lang, className }: SectionTitleProps) {
  const isRTL = lang === 'ar'
  
  return (
    <div className={cn("relative", className)}>
      <h2 className={cn(
        "text-2xl md:text-3xl font-bold relative inline-block",
        "before:absolute before:bottom-0",
        "after:absolute after:bottom-0",
        // Gradient underline effect
        "before:h-[3px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-500",
        // Glowing line effect
        "after:h-[3px] after:bg-gradient-to-r after:from-blue-500/50 after:to-purple-500/50",
        "after:blur-[2px]",
        // RTL support
        isRTL ? [
          "before:right-0 before:left-[4px]",
          "after:right-0 after:left-[4px]",
        ] : [
          "before:left-0 before:right-[4px]",
          "after:left-0 after:right-[4px]",
        ],
        // Animation
        "before:w-full after:w-full",
      )}>
        {/* Gradient text effect */}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
        {/* Decorative elements */}
        <span className={cn(
          "absolute -top-1",
          isRTL ? "-right-3" : "-left-3",
          "h-2 w-2 rounded-full bg-blue-500"
        )} />
        <span className={cn(
          "absolute -bottom-1",
          isRTL ? "-left-3" : "-right-3",
          "h-2 w-2 rounded-full bg-purple-500"
        )} />
      </h2>
    </div>
  )
} 