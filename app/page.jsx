'use client';

import { motion } from 'framer-motion';
import HomeBg from '@/components/HomeBg/HomeBg';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Link from 'next/link';
import '../app/page.scss';

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <HomeBg />
      <div className="home__name">
        <motion.h1
          className="home__name__text"
          animate={{ x: 0 }}
          initial={{ x: '150%' }}
          transition={{ ease: 'easeIn' }}
        >
          ALLAYA
        </motion.h1>
      </div>
      <div className="home__links">
        <div className="home__link__item">
          <Link className="home__link" href="/website">
            Сайт
          </Link>
        </div>
        <div className="home__link__item">
          <Link className="home__link" href="/shop">
            Магазин
          </Link>
        </div>
      </div>
      <HomeFooter />
    </motion.section>
  );
};

export default Home;
