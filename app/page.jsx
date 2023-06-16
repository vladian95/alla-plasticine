'use client';

import { motion } from 'framer-motion';
import HomeBg from '@/components/HomeBg/HomeBg';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Link from 'next/link';
import '../app/page.scss';

document.addEventListener('mousemove', (e) => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
    `,
  });
});

const Home = () => {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <HomeBg />
      <div className="home__container">
        <div className="home__name home__item">
          <h1
            className="home__name__text"
            // initial={{ x: '150%' }}
            // animate={{ x: 0 }}
            // transition={{ ease: 'easeIn' }}
          >
            ALLAYA
          </h1>
        </div>
        <div className="home__links home__item">
          <div className="home__link__item ">
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
      </div>
    </motion.section>
  );
};

export default Home;
