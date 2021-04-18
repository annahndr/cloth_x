import "./cart.scss";
import CheckoutCard from "../../components/checkoutCard/CheckoutCard";
import Sweater from "../../assets/images/icecreamgreysweatersite.png";

const Cart = () => {
  const products = [
    {
      name: "Chunky Sweater",
      description: "This is a sweater",
      tags: ["Adult", "Used"],
      price: "10",
      image: Sweater,
      location: "Glasgow",
    },
    {
      name: "Chunky Sweater",
      description: "This is a sweater",
      tags: ["Adult", "Used"],
      price: "10",
      image: Sweater,
      location: "Glasgow",
    },
    {
      name: "Chunky Sweater",
      description: "This is a sweater",
      tags: ["Adult", "Used"],
      price: "10",
      image: Sweater,
      location: "Glasgow",
    },
  ];
  return (
    <div className="cart">
      <div className="order-summary">
        <h2>Order Summary</h2>
        {checkoutProducts(products)}
      </div>
      <div className="place-order">
        <form className="order-form">
          <input
            type="text"
            placeholder="Location"
            className="place-order_input"
          />
          <select className="place-order_input">
            <option disabled value hidden>
              Pickup/Delivery
            </option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
          <textarea
            rows="5"
            className="place-order_input"
            value="Message for seller"
          />
          <input type="submit" value="Submit" className="place-order_submit" />
        </form>
      </div>
    </div>
  );
};

const checkoutProducts = (products) => {
  return products.map((product, i) => {
    return (
      <CheckoutCard
        key={i}
        name={product.name}
        description={product.description}
        tags={product.tags}
        image={product.image}
      />
    );
  });
};

export default Cart;
