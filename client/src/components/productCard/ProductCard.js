import './productCard.scss';

const ProductCard = (props) => {
  const {name, description, tags, price, image, location} = props;

  const img = {
    backgroundImage: `url(${image})`
  }

  return <div className="product-card">
      <span className="product-card__location">{location}</span>
      <div className="product_card__image" style={img}>
        image
      </div>
      <div className="product_card__details">
        <div className="product_card__details-text">
          {name}
          {description}
        </div>
        <div className="product_card__details-tags">
          {tags}
        </div>
      </div>
      <div className="product_card__action">
        <button type="button">{`Buy Now £${price}`}</button>
      </div>
  </div>;
};

export default ProductCard;
