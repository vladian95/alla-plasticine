import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import '../HomeFooter/homeFooter.scss';

const HomeFooter = () => {
  return (
    <footer className="homeFooter">
      <div className="homeFooter__inner">
        <p>developed by</p>

        <div className="homeFoote__icons">
          <FontAwesomeIcon className="homeFoote__icon" icon={faInstagram} />
          <FontAwesomeIcon className="homeFoote__icon" icon={faTelegram} />
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
