'use client'
import { Moon, Sun, Globe2, Code2 } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Locale } from '@/utils/i18n-config'
import { Dictionary } from '@/types/dictionary'
import { useRouter } from 'next/navigation'
import { getDictionary } from '@/utils/dictionary'

interface HeaderProps {
  lang: string;
}

export const Header = ({ lang }: HeaderProps) => {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const router = useRouter()
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    setMounted(true)
    getDictionary(lang as Locale).then(setDict)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lang])

  if (!mounted || !dict) return null

  const fontFamily = lang === 'ar' ? 'font-noto-arabic' : 'font-nunito';
  const isRTL = lang === 'ar';

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(isDark ? 'light' : 'dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${fontFamily}
        ${scrolled 
          ? 'bg-white/40 backdrop-blur-lg dark:bg-gray-900/40 border-b border-gray-200/10 dark:border-gray-800/10' 
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <nav className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Link 
          href={`/${lang}`} 
          className={`group flex items-center gap-2 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Code2 className="h-6 w-6 text-blue-500" />
          </div>
          
          <span className="text-xl font-bold relative">
            <span className="relative inline-block transform transition-all duration-300 group-hover:text-blue-500 group-hover:-translate-y-1">
              {dict?.brand.name}
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={toggleTheme}
            className="group relative flex h-10 w-10 items-center justify-center rounded-lg border-2 
              border-gray-200/30 bg-white/10 shadow-lg backdrop-blur-sm
              transition-all duration-300 dark:border-gray-800/30 dark:bg-gray-900/10
              hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-xl 
              dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10"
            aria-label="Toggle theme"
          >
            {!isDark ? (
              <Sun className="h-6 w-6 text-gray-600 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110 group-hover:text-blue-500 dark:text-gray-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 transition-all duration-300 group-hover:-rotate-90 group-hover:scale-110 group-hover:text-blue-500" />
            )}
          </button>

          <button
            onClick={() => router.push(`/${lang === 'en' ? 'ar' : 'en'}`)}
            className="group relative flex h-10 w-20 items-center justify-center gap-2 rounded-lg border-2 
              border-gray-200/30 bg-white/10 shadow-lg backdrop-blur-sm
              transition-all duration-300 dark:border-gray-800/30 dark:bg-gray-900/10
              hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-xl 
              dark:hover:border-blue-400/50 dark:hover:bg-blue-400/10"
            aria-label={`Switch to ${lang === 'en' ? 'ar' : 'en'} language`}
          >
            <Globe2 className="h-6 w-6 transform text-gray-600 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110 group-hover:text-blue-500 dark:text-gray-400" />
            <span className="text-sm font-medium uppercase text-gray-600 dark:text-gray-400">{lang === 'en' ? 'EN' : 'AR'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}