import HomeBg from '@/components/HomeBg/HomeBg';
import HomeFooter from '@/components/HomeFooter/HomeFooter';
import Link from 'next/link';
import '../app/page.scss';

const Home = () => {
  return (
    <section className="home">
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
    </section>
  );
};

export default Home;
