import HomeBg from '@/components/HomeBg/HomeBg';
import Link from 'next/link';
import '../app/page.scss';

const Home = () => {
  return (
    <section className="home">
      <HomeBg />
      <div className="home__links">
        <Link className="home__link" href="/shop">
          Сайт
        </Link>
        <Link className="home__link" href="/website">
          Магазин
        </Link>
      </div>
      <div className="home__name">
        <h1 className="home__name__text">ALLAYA</h1>
      </div>
    </section>
  );
};

export default Home;
