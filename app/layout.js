'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Home',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=".effect-1">
          <AnimatePresence>{children}</AnimatePresence>
        </div>
      </body>
    </html>
  );
}
