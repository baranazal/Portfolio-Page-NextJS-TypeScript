import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getLangFromParams } from '@/utils/helpers';

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const lang = await getLangFromParams(params);
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
  const fontFamily = lang === 'ar' ? 'font-noto-arabic' : 'font-nunito';

  return (
    <>
      <div className="bg-noise" aria-hidden="true" />
      <Header lang={lang} />
      <main className={`flex-grow ${fontFamily}`} dir={direction} lang={lang}>
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
