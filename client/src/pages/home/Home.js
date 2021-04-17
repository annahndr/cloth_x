import "./home.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faCloud,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/productCard/ProductCard";
import { useEffect, useState } from "react";

const Home = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Chunky Sweater",
  //     description: "This is a sweater",
  //     size: "M",
  //     category: "Used",
  //     image: Sweater,
  //     location: "Glasgow",
  //   },
  //   {
  //     id: 2,
  //     name: "Chunky Sweater",
  //     description: "This is a sweater",
  //     size: "M",
  //     category: "Used",
  //     image: Sweater,
  //     location: "Glasgow",
  //   },
  //   {
  //     id: 3,
  //     name: "Chunky Sweater",
  //     description: "This is a sweater",
  //     size: "M",
  //     category: "Used",
  //     image: Sweater,
  //     location: "Glasgow",
  //   },
  // ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
    .then(function (response) {
      // handle success
      console.log("test", response);
      setProducts(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }, []);




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
            Macchiato single shot french press cream arabica beans fair trade eu
            whipped. Crema lungo rich a, macchiato, strong fair trade,
            aftertaste et plunger pot filter strong. Steamed, single origin,
            filter, french press milk aftertaste americano, barista cappuccino
            organic breve flavour. Single shot, cortado, mocha macchiato redeye,
            variety irish and eu java.
          </p>
        </div>
        <div className="home-info__text col col--centered">test</div>
      </section>
      <section className="home-container home-features home-features--numbered">
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
        category={product.category}
        price={product.price}
        image={product.image}
        location={product.location}
      />
    );
  });
};

export default Home;
