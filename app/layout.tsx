import type { ReactNode } from 'react';
import { Poppins, Nunito } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

/**
 * The true root layout -- Next.js renders this (and only this) for any path
 * that doesn't resolve into app/[locale]/... (e.g. an invalid locale segment,
 * or the auto-generated 404/error boundary), so it must own <html>/<body>
 * unconditionally. Locale-specific setup (Header/Footer, <html lang>, JSON-LD)
 * lives in app/[locale]/layout.tsx, which renders *inside* this body.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-nunito`}>{children}</body>
    </html>
  );
}
