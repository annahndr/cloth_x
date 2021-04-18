import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faCloud,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productSelector } from "../../store/product-reducer";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <section className="home-banner">
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
      </section>
      <section className="home-container home-features">
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
      </section>
      <section className="home-container home-info">
        <div className="home-info__text col col--centered">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help regular people reduce their impact on the
            environment and to reduce the stigma attached to ‘hand me down’
            clothes. We aim to introduce people to the circular economy so
            together we can help: protect the environment, reduce waste, and
            increase the efficient use of textiles.
          </p>
        </div>
      </section>
      <section className="home-container home-features home-features--numbered">
        <p className="home-features__heading">How It Works</p>
        <ul className="home-features__items">
          <li>
            <span className="home-features__container home-features__items-large">
              <Link to="/login"><p>Create an account</p></Link>
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
      </section>
      <section className="home-container home-popular">
        <div className="row">
          <div className="col-12">
            <h2>Shop Now</h2>
          </div>
          {featureProducts(products)}
        </div>
      </section>
    </div>
  );
};

const featureProducts = (products) => {
  return products.map((product, i) => {
    return (
      <ProductCard
        key={i}
        id={product._id}
        title={product.title}
        description={product.description}
        category={product.categories}
        image={product.image}
        location={product.location}
      />
    );
  });
};

export default Home;
