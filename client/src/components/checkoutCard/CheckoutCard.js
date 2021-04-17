import './checkoutCard.scss';

const CheckoutCard = (props) => {
    const { name, description, tags, price, image } = props;

    const img = {
        backgroundImage: `url(${image})`
    }

    return <div className="checkout-card">
        <div className="checkout_card__image" style={img}>
            image
      </div>
        <div className="checkout_card__details">
            <div className="checkout_card__details-text">
                {name}
                {description}
            </div>
            <div className="checkout_card__details-tags">
                {tags}
            </div>
        </div>
    </div>;
};
export default CheckoutCard;