import '../globals.css';
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const montserrat = localFont({
  src: '../fonts/Montserrat.ttf',
  variable: '--font-montserrat',
});

const mansfield = localFont({
  src: [
    { path: '../fonts/Mansfield.woff', weight: '400', style: 'normal' },
    { path: '../fonts/Mansfield.otf', weight: '400', style: 'normal' },
    {
      path: '../fonts/MansfieldExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/MansfieldExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-mansfield',
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${mansfield.variable} antialiased font-mansfield bg-white-main`}>
        <SmoothScroll>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
