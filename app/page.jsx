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
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <HomeBg />
      <div className="home__name">
        <h1 className="home__name__text">ALLAYA</h1>
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

// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import HomeBg from '@/components/HomeBg/HomeBg';
// import HomeFooter from '@/components/HomeFooter/HomeFooter';
// import Link from 'next/link';
// import './page.scss';

// const Home = () => {
//   useEffect(() => {
//     const handleRouteChange = () => {
//       // При изменении маршрута сбрасываем анимации к исходному состоянию
//       window.scrollTo(0, 0);
//     };

//     window.onbeforeunload = handleRouteChange;

//     return () => {
//       window.onbeforeunload = null;
//     };
//   }, []);

//   return (
//     <motion.div
//       className="home"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ delay: 0.2, duration: 0.3 }}
//     >
//       <HomeBg />
//       <div className="home__name">
//         <h1 className="home__name__text">ALLAYA</h1>
//       </div>
//       <div className="home__links">
//         <div className="home__link__item">
//           <Link className="home__link" href="/website">
//             Сайт
//           </Link>
//         </div>
//         <div className="home__link__item">
//           <Link className="home__link" href="/shop">
//             Магазин
//           </Link>
//         </div>
//       </div>
//       <HomeFooter />
//     </motion.div>
//   );
// };

// export default Home;

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import HomeBg from '@/components/HomeBg/HomeBg';
// import HomeFooter from '@/components/HomeFooter/HomeFooter';
// import Link from 'next/link';
// import './page.scss';

// const Home = () => {
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       if (url === '/website') {
//         setIsTransitioning(true);
//         setTimeout(() => {
//           setIsTransitioning(false);
//         }, 5000);
//       }
//     };

//     window.onbeforeunload = handleRouteChange;

//     return () => {
//       window.onbeforeunload = null;
//     };
//   }, []);

//   return (
//     <motion.div
//       className={`home ${isTransitioning ? 'transitioning' : ''}`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ delay: 0.2, duration: 0.3 }}
//     >
//       <HomeBg />
//       <div className="home__name">
//         <h1 className="home__name__text">ALLAYA</h1>
//       </div>
//       <div className="home__links">
//         <div className="home__link__item">
//           <Link className="home__link" href="/website">
//             Сайт
//           </Link>
//         </div>
//         <div className="home__link__item">
//           <Link className="home__link" href="/shop">
//             Магазин
//           </Link>
//         </div>
//       </div>
//       <HomeFooter />
//     </motion.div>
//   );
// };

// export default Home;
