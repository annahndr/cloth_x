import './checkoutCard.scss';

const CheckoutCard = (props) => {
    const { name, description, tags, price, image } = props;

    const img = {
        backgroundImage: `url(${image})`
    }

    const renderTags = () => {
        return tags.map((tag, i) => {
            return (
                <span key={i} className="checkout_card__details-tags badge text-dark">
                    {tag}
                </span>
            );
        });
    };

    return <div className="checkout-card">
            <div className="checkout_card__image" style={img}></div>
        <div className="checkout_card__details">
            <div className="checkout_card__details-text">
                <strong>{name}</strong>
                <p>{description}</p>
            </div>
            <div>
                {renderTags()}
            </div>
        </div>
    </div>;
};
export default CheckoutCard;