'use client'
import { getDictionary } from '@/utils/dictionary'
import { Locale } from '@/utils/i18n-config'
import { useEffect, useState } from 'react'
import { Dictionary } from '@/types/dictionary'
import { Heart } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  lang: string;
}

export const Footer = ({ lang }: FooterProps) => {
  const [dict, setDict] = useState<Dictionary | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    getDictionary(lang as Locale).then(setDict)
  }, [lang])

  if (!mounted || !dict) return null

  const isArabic = lang === 'ar';
  const fontFamily = isArabic ? 'font-noto-arabic' : 'font-nunito';

  return (
    <footer className={`border-t border-gray-200/10 py-8 dark:border-gray-800/10 ${fontFamily}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-4">
          {/* Made with Love Section */}
          {isArabic ? (
            <div className="flex flex-row-reverse items-center text-sm text-gray-600 dark:text-gray-400">
              <span>{dict.footer.madeWith}</span>
              <Heart 
                className="mx-1 h-4 w-4 text-red-500 relative"
                style={{
                  filter: `
                    drop-shadow(0 0 2px rgba(239, 68, 68, 0.6))
                    drop-shadow(0 0 4px rgba(239, 68, 68, 0.4))
                    drop-shadow(0 0 8px rgba(239, 68, 68, 0.2))
                    drop-shadow(0 0 12px rgba(239, 68, 68, 0.1))
                  `,
                  animation: 'glowing 2s ease-in-out infinite'
                }}
              />
              <span className="mx-2">{dict.footer.in}</span>
              <span className="font-semibold text-blue-500">{dict.footer.country}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>{dict.footer.madeWith}</span>
              <Heart 
                className="h-4 w-4 text-red-500 relative"
                style={{
                  filter: `
                    drop-shadow(0 0 2px rgba(239, 68, 68, 0.6))
                    drop-shadow(0 0 4px rgba(239, 68, 68, 0.4))
                    drop-shadow(0 0 8px rgba(239, 68, 68, 0.2))
                    drop-shadow(0 0 12px rgba(239, 68, 68, 0.1))
                  `,
                  animation: 'glowing 2s ease-in-out infinite'
                }}
              />
              <span>{dict.footer.in}</span>
              <span className="font-semibold text-blue-500">{dict.footer.country}</span>
            </div>
          )}

          {/* Copyright Section */}
          <div className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
            <span>© {new Date().getFullYear()} </span>
            <Link 
              href="https://baranazal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500"
            >
              {dict.brand.name}
            </Link>
            <span className="mx-1">•</span>
            <span>{dict.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}