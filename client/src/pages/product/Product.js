import "./product.scss";

const Product = (props) => {
  const { name, description, category, image, location } = props;

  // We will set useEffect here to take the ID from the URL and populate the data

  const img = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="container product">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2>{name}</h2>
          <p>{description}</p>
          <ul>
            <li>
              Category:{" "}
              {category && (
                <span className="product_card__details-tags badge text-dark">
                  {category}
                </span>
              )}
            </li>
            <li>
              Location:{" "}
              {location && (
                <span className="product-card__location badge text-dark">
                  {location}
                </span>
              )}
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-primary--teal">
            {`Add To Basket`}
          </button>
        </div>
        <div className="col-12 col-lg-6">
          <div className="product_card__image" style={img}></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
