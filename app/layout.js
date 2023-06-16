'use client';

import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.scss';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Home',
// };

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence mode={'wait'} initial={true}>
          <main key={router.route}>{children}</main>
        </AnimatePresence>
      </body>
    </html>
  );
}
