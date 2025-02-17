import { Nunito, Noto_Sans_Arabic } from 'next/font/google';
import { Providers } from './[lang]/providers';
import '@/styles/globals.css';
import { Metadata } from 'next';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
});

export const metadata: Metadata = {
  title: 'Bara Nazal | Web Developer',
  description: 'Full-stack web developer specializing in React, Next.js, and modern web technologies. Building responsive and scalable web applications.',
  icons: {
    icon: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
    shortcut: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
    apple: 'https://github.com/user-attachments/assets/70ccf253-4bab-4b5c-91e3-0dd2ba72ce35',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${nunito.variable} ${notoArabic.variable} font-nunito min-h-screen flex flex-col dark:bg-gray-950 dark:text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}