'use client'
import { useCallback } from 'react'
import { FolderGit2, Wrench, MessageSquareMore } from 'lucide-react'
import Link from 'next/link'
import { getDictionary } from '@/utils/dictionary'
import { useEffect, useState } from 'react'
import { Dictionary } from '@/types/dictionary'
import { Locale } from '@/utils/i18n-config'

type ActionButtonsProps = {
  lang: Locale;
};

export function ActionButtons({ lang }: ActionButtonsProps) {
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    let mounted = true;
    getDictionary(lang).then(dict => {
      if (mounted) setDict(dict);
    });
    return () => { mounted = false };
  }, [lang])

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const scrollToServices = useCallback(() => {
    const element = document.getElementById('what-i-can-do');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [])

  if (!dict) return null

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        onClick={scrollToServices}
        className="group relative flex items-center gap-2 rounded-lg border-2 
          border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-6 py-3 
          shadow-lg backdrop-blur-sm transition-all duration-300 
          hover:-translate-y-1 hover:border-indigo-500/50 hover:from-purple-500/20 
          hover:to-indigo-500/20 hover:shadow-xl dark:border-purple-400/50 
          dark:from-purple-400/10 dark:to-indigo-400/10 dark:hover:border-indigo-400/50 
          dark:hover:from-purple-400/20 dark:hover:to-indigo-400/20"
      >
        <Wrench className="h-5 w-5 transform text-purple-600 transition-all duration-300 
          group-hover:rotate-12 group-hover:scale-110 group-hover:text-indigo-500 
          dark:text-purple-400 dark:group-hover:text-indigo-400" />
        <span className="font-semibold text-purple-600 transform transition-all duration-300 
          group-hover:translate-x-1 group-hover:text-indigo-500 dark:text-purple-400 
          dark:group-hover:text-indigo-400">
          {dict.actions.viewServices}
        </span>
      </button>

      <Link
        href="https://github.com/baranazal"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 rounded-lg border-2 
          border-emerald-500/50 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-6 py-3 
          shadow-lg backdrop-blur-sm transition-all duration-300 
          hover:-translate-y-1 hover:border-teal-500/50 hover:from-emerald-500/20 
          hover:to-teal-500/20 hover:shadow-xl dark:border-emerald-400/50 
          dark:from-emerald-400/10 dark:to-teal-400/10 dark:hover:border-teal-400/50 
          dark:hover:from-emerald-400/20 dark:hover:to-teal-400/20"
      >
        <FolderGit2 className="h-5 w-5 transform text-emerald-600 transition-all duration-300 
          group-hover:rotate-12 group-hover:scale-110 group-hover:text-teal-500 
          dark:text-emerald-400 dark:group-hover:text-teal-400" />
        <span className="font-semibold text-emerald-600 transform transition-all duration-300 
          group-hover:translate-x-1 group-hover:text-teal-500 dark:text-emerald-400 
          dark:group-hover:text-teal-400">
          {dict.actions.viewProjects}
        </span>
      </Link>

      <button
        onClick={scrollToContact}
        className="group relative flex items-center gap-2 rounded-lg border-2 
          border-gray-200/30 bg-blue-500/90 px-6 py-3 shadow-lg backdrop-blur-sm
          transition-all duration-300 dark:border-gray-800/30
          hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500 hover:shadow-xl 
          dark:hover:border-blue-400/50"
      >
        <MessageSquareMore className="h-5 w-5 transform text-white transition-all duration-300 
          group-hover:rotate-12 group-hover:scale-110" />
        <span className="font-semibold text-white transform transition-all duration-300 
          group-hover:translate-x-1">
          {dict.actions.hireMe}
        </span>
      </button>
    </div>
  )
} 