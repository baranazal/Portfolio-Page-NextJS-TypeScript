import type { Locale } from './i18n-config';

const locales = ['en', 'ar'] as const;

export async function getLangFromParams(params: { lang: string }): Promise<Locale> {
  const resolvedParams = await Promise.resolve(params);
  return locales.includes(resolvedParams.lang as Locale) ? (resolvedParams.lang as Locale) : 'en';
}

export function getDirection(lang: Locale): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function getFontClass(lang: Locale): string {
  return `min-h-screen ${lang === 'ar' ? 'font-noto-sans' : 'font-nunito'}`;
}

export function sortClassNames(classNames: string): string {
  return classNames.split(' ').filter(Boolean).sort().join(' ');
} 