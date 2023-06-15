'use client';
import { motion } from 'framer-motion';
import './page.scss';

// export const metadata = {
//   title: 'website',
// };

const Website = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
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
    </motion.section>
  );
};

export default Website;
