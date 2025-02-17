// utils/i18n-config.ts
export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]
  
  // Simplified Dictionary type with only the essential structure
  export type Dictionary = {
    footer: {
      rights: string;
      madeWith: string;
      and: string;
      in: string;
      country: string;
    };
    brand: {
      name: string;
    };
    actions: {
      hireMe: string;
      viewProjects: string;
      viewServices: string;
    };
    services: {
      web: { title: string; description: string; };
      mobile: { title: string; description: string; };
      python: { title: string; description: string; };
      database: { title: string; description: string; };
      system: { title: string; description: string; };
      support: { title: string; description: string; };
    };
    hero: {
      title: string;
      role: string;
    };
    sections: {
      skills: string;
      whatIDo: string;
      achievements: string;
      contact: string;
    };
    skills: {
      frontend: { title: string; skills: string[]; };
      backend: { title: string; skills: string[]; };
      mobile: { title: string; skills: string[]; };
      database: { title: string; skills: string[]; };
      devops: { title: string; skills: string[]; };
      os: { title: string; skills: string[]; };
    };
    achievements: {
      projects: { title: string; value: string; };
      clients: { title: string; value: string; };
      experience: { title: string; value: string; };
    };
  }
  
  // Previous code remains the same...