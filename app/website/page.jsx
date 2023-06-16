'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './page.scss';

// export const metadata = {
//   title: 'website',
// };

const Website = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className="site__wrapper"
    >
      <div className="site">
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          WEBSITE
        </motion.h1>
      </div>
      <Link className="home__link" href="/">
        back
      </Link>
    </motion.section>
  );
};

export default Website;
