import type { Locale } from './i18n-config'
import type { Dictionary } from './i18n-config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
} as const;

// Simplified caching mechanism
const cache = new Map<Locale, Promise<Dictionary>>();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (!cache.has(locale)) {
    cache.set(locale, dictionaries[locale]());
  }
  
  try {
    return await cache.get(locale)!;
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error);
    // Fallback to English
    if (!cache.has('en')) {
      cache.set('en', dictionaries.en());
    }
    return await cache.get('en')!;
  }
}