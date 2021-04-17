import "./cart.scss";
import CheckoutCard from "../../components/checkoutCard/CheckoutCard";

const Cart = () => {
  return (
    <div className="cart">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <CheckoutCard
          name="Chunky Sweater"
          description="This is a sweater"
          tags={['Adult', 'Used']}
          price="10"
          image=""
        />
      </div>
      <div className="place-order">
        <form className="order-form">
          <input type="text" placeholder="Location" className="place-order_input" />
          <select className="place-order_input" >
            <option disabled selected hidden>Condition</option>
            <option value="new">New</option>
            <option value="nearlyNew">Nearly New</option>
            <option value="used">Used</option>
            <option value="wellWorn">Well Worn</option>
          </select>
          <select className="place-order_input" >
            <option disabled selected hidden>Pickup/Delivery</option>
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
          </select>
          <textarea rows="5" className="place-order_input"  value="Message for seller" />
        </form>
      </div>
    </div>
  );
};

export default Cart;
