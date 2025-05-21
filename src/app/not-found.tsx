import Link from 'next/link';
import './globals.css';
import localFont from 'next/font/local';

const montserrat = localFont({
  src: './fonts/Montserrat.ttf',
  variable: '--font-montserrat',
});

const mansfield = localFont({
  src: [
    { path: './fonts/Mansfield.woff', weight: '400', style: 'normal' },
    { path: './fonts/Mansfield.otf', weight: '400', style: 'normal' },
    {
      path: './fonts/MansfieldExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/MansfieldExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-mansfield',
});

export default async function NotFound() {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${mansfield.variable} antialiased font-mansfield`}>
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
          <h1 className="text-3xl">Page not found</h1>
          <p className="text-lg mt-4">
            The page you are looking for does not exist.
          </p>
          <Link href="/" className="mt-4 text-blue-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
