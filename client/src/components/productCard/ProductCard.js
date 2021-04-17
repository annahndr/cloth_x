import './productCard.scss';

const ProductCard = (props) => {
  const {name, description, tags, price, image, location} = props;

  const img = {
    backgroundImage: `url(${image})`
  }

  const renderTags = () => {
    return tags.map((tag, i) => {
      return <span key={i} className="product_card__details-tags badge text-dark">{tag}</span>
    })
  }

  return <div className="col-12 col-md-4">
      <div className="product-card">
        <div className="col-2">
          <span className="product-card__location badge text-dark">{location}</span>
        </div>

        <div className="col-12">
        <div className="product_card__image" style={img}>
        </div>
        </div>
        
        <div className="d-flex justify-content-between">
        <div className="col-6 product_card__details-text">
            <strong>{name}</strong>
            <p>
            {description}
            </p>
          </div>
          <div className="col-6">
            <div className="col-12 d-flex justify-content-end">{renderTags()}</div>
          </div>
        </div>
        <div className="col-12 product_card__action d-flex">
          <button type="button" className="btn btn-primary btn-primary--teal">{`Buy Now £${price}`}</button>
        </div>
      </div>
  </div>;
};

export default ProductCard;
