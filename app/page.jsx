import Link from 'next/link';

import '../app/page.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="home__links">
        <Link className="home__link" href="/shop">
          Сайт
        </Link>
        <Link className="home__link" href="/website">
          Магазин
        </Link>
      </div>
      <h1 className="home__name">ALLAYA</h1>
    </section>
  );
};

export default Home;

// 'use client';

// import Link from 'next/link';
// import { useEffect, useRef } from 'react';
// import '../app/page.scss';

// const newV2 = (x = 0, y = 0) => {
//   return {
//     x: x,
//     y: y,
//   };
// };

// const Home = () => {
//   const mouse = useRef(newV2());
//   const center = useRef(newV2());
//   const distanceFromCenter = useRef(newV2());
//   const distanceLerped = useRef(newV2());
//   let simulateMouseMovement = true;

//   const perspective = 500;
//   const translateZ = -12;
//   const rotate = 3;
//   const skew = 3;

//   const containerRef = useRef(null);
//   const copiesRef = useRef([]);

//   const updateCenter = () => {
//     const rect = containerRef.current.getBoundingClientRect();
//     center.current.x = rect.left + rect.width / 2;
//     center.current.y = rect.top + rect.height / 2;
//   };

//   const trackMousePosition = (event) => {
//     simulateMouseMovement = false;
//     mouse.current.x = event.clientX;
//     mouse.current.y = event.clientY;
//     distanceFromCenter.current.x = center.current.x - mouse.current.x;
//     distanceFromCenter.current.y = center.current.y - mouse.current.y;
//   };

//   const fakeMousePosition = (t) => {
//     distanceFromCenter.current.x = Math.sin(t / 500) * window.innerWidth * 0.5;
//     distanceFromCenter.current.y = Math.cos(t / 500) * window.innerWidth * 0.2;
//   };

//   const updateTextPosition = (t) => {
//     if (simulateMouseMovement) fakeMousePosition(t);

//     lerpV2(distanceLerped.current, distanceFromCenter.current);

//     for (let i = 1; i < copiesRef.current.length + 1; i++) {
//       const copy = copiesRef.current[i - 1];
//       copy.style.transform = makeTransformString(
//         i * distanceLerped.current.y * 0.03,
//         i * translateZ,
//         i * rotate * (distanceLerped.current.x * 0.003),
//         i * skew * (distanceLerped.current.x * 0.003)
//       );
//     }

//     requestAnimationFrame(updateTextPosition);
//   };

//   const makeTransformString = (y, z, rotate, skew) => {
//     return `perspective(${perspective}px) translate3d(0px, ${y}px, ${z}px) rotate(${rotate}deg) skew(${skew}deg)`;
//   };

//   const lerpV2 = (position, targetPosition) => {
//     position.x += (targetPosition.x - position.x) * 0.2;
//     position.y += (targetPosition.y - position.y) * 0.2;
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     const copies = container.getElementsByClassName('copy');
//     copiesRef.current = Array.from(copies);

//     updateCenter();
//     document.addEventListener('mousemove', trackMousePosition);
//     window.addEventListener('resize', updateCenter);
//     requestAnimationFrame(updateTextPosition);

//     return () => {
//       document.removeEventListener('mousemove', trackMousePosition);
//       window.removeEventListener('resize', updateCenter);
//     };
//   }, []);

//   return (
//     <section className="home" ref={containerRef}>
//       <div className="home__links">
//         <Link className="home__link" href="/shop">
//           Сайт
//         </Link>
//         <Link className="home__link" href="/website">
//           Магазин
//         </Link>
//       </div>
//       <div className="home__wrapper">
//         <h1>ALLAYA</h1>
//         <span aria-hidden="true" className="copy copy-1">
//           ALLAYA
//         </span>
//         <span aria-hidden="true" className="copy copy-2">
//           ALLAYA
//         </span>
//         <span aria-hidden="true" className="copy copy-3">
//           ALLAYA
//         </span>
//         <span aria-hidden="true" className="copy copy-4">
//           ALLAYA
//         </span>
//       </div>
//     </section>
//   );
// };

// export default Home;
