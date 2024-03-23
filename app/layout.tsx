import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Procamion',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
