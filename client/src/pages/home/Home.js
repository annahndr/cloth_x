import "./home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faCloud, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <h2 className="heading-light home-banner__heading">
          Do your bit with <strong>ClothX.</strong>
        </h2>
        <label htmlFor="site-search">
          Search:
          <input
            className="input-search"
            type="search"
            id="site-search"
            placeholder="I would like"
            name=""
            aria-label="Search through site content"
          />
        </label>
      </div>
      <div className="home-features">
        <p className="home-features__heading">Wait, what is it?</p>
        <ul className="home-features__items">
          <li>
            <span className="home-features__items-large">
            <FontAwesomeIcon icon={faRecycle} className="icon" />
              <p>Our Mission</p>
            </span>
          </li>
          <li>
            <span className="home-features__items-large">
            <FontAwesomeIcon icon={faCloud} className="icon" />
              <p>How It Works</p>
            </span>
          </li>
          <li>
            <span className="home-features__items-large">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              <p>Start Shopping</p>
            </span>
          </li>
        </ul>
      </div>
      <div className="home-info row row--centered hide-mobile">
        <div className="home-info__text col col--centered">
          <h2>Our Mission</h2>
          <p>
            Macchiato single shot french press cream arabica beans fair trade eu
            whipped. Crema lungo rich a, macchiato, strong fair trade,
            aftertaste et plunger pot filter strong. Steamed, single origin,
            filter, french press milk aftertaste americano, barista cappuccino
            organic breve flavour. Single shot, cortado, mocha macchiato redeye,
            variety irish and eu java.
          </p>
        </div>
        <div className="home-info__text col col--centered">test</div>
      </div>
      <div className="home-features home-features--numbered">
        <p className="home-features__heading">How It Works</p>
        <ul className="home-features__items">
          <li>
            <span className="home-features__container home-features__items-large">
              <p>Create an account</p>
            <span className="home-features__items-small">1</span>
            </span>
          </li>
          <li>
            <span className="home-features__container home-features__items-large">
              <p>Either upload your clothes or shop for new ones</p>
            <span className="home-features__items-small">2</span>
            </span>
          </li>
          <li>
            <span className="home-features__container home-features__items-large">
              <p>Start Shopping</p>
              <span className="home-features__items-small">3</span>
            </span>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
