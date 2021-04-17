import "./productCard.scss";

const ProductCard = (props) => {
  const { name, description, tags, price, image, location } = props;

  const img = {
    backgroundImage: `url(${image})`,
  };

  const renderTags = () => {
    return tags.map((tag, i) => {
      return (
        <span key={i} className="product_card__details-tags badge text-dark">
          {tag}
        </span>
      );
    });
  };

  return (
    <div className="col-12 col-lg-4 product-card-container">
      <div className="product-card">
        <div className="row col-2">
          <span className="product-card__location badge text-dark">
            {location}
          </span>
        </div>

        <div className="col-12">
          <div className="product_card__image" style={img}></div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-8 col-lg-6 product_card__details-text">
            <strong>{name}</strong>
            <p>{description}</p>
          </div>
          <div className="col-4 col-lg-6">
            <div className="col-12 d-flex justify-content-end">
              {renderTags()}
            </div>
          </div>
        </div>
        <div className="row col-12 product_card__action d-flex">
          <button
            type="button"
            className="btn btn-primary btn-primary--teal"
          >{`Buy Now £${price}`}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
