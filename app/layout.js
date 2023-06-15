'use client';
import './globals.scss';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Home',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence>
          <main>{children}</main>
        </AnimatePresence>
      </body>
    </html>
  );
}
