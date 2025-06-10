import { Nunito, Noto_Sans_Arabic } from 'next/font/google';
import { Providers } from './[lang]/providers';
import '@/styles/globals.css';
import { Metadata } from 'next';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bara Nazal | Web Developer',
  description: 'Full-stack web developer specializing in React, Next.js, and modern web technologies. Building responsive and scalable web applications.',
  
  // Basic metadata
  keywords: 'DevOps Engineer, Web Development, Full Stack Developer, React, Next.js, TypeScript, Node.js, Software Engineer',
  authors: [{ name: 'Bara Nazal', url: 'https://baranazal.com' }],
  creator: 'Bara Nazal',
  publisher: 'Bara Nazal',
  
  // Social media and SEO
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://baranazal.com',
    siteName: 'Bara Nazal Portfolio',
    title: 'Bara Nazal | Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
        width: 1200,
        height: 630,
        alt: 'Bara Nazal - Web Developer',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Bara Nazal | Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, and modern web technologies.',
    creator: '@baranazal',
    images: ['https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35'],
  },
  
  // Verification tokens for search engines and webmaster tools
  verification: {
    google: 'google-site-verification=58Hwb1utbZKca2l8_G3dcRwkUYSSC-TMxPfDYbMBhPw',
    yandex: 'your-yandex-verification-code',
  },
  
  // Icons
  icons: {
    icon: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
    shortcut: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
    apple: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
  },
  
  // Additional metadata
  category: 'technology',
  classification: 'Web Development',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Alternative languages
  alternates: {
    canonical: 'https://baranazal.com',
    languages: {
      'en-US': 'https://baranazal.com/en',
      'ar-SA': 'https://baranazal.com/ar',
    },
  },
  
  // Application information
  applicationName: 'Bara Nazal Portfolio',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="prefetch" href="/assets/Bara_Nazal_Resume.pdf" as="document" />
      </head>
      <body className={`${nunito.variable} ${notoArabic.variable} font-nunito min-h-screen flex flex-col dark:bg-gray-950 dark:text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}