import { Link } from "react-router-dom";
import "./productCard.scss";

import Sweater from "../../assets/images/icecreamgreysweatersite.png";

const ProductCard = (props) => {
  const { id, title, description, location } = props;

  const img = {
    backgroundImage: `url(${Sweater})`,
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
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </div>
        <div className="row col-12 product_card__action d-flex">
          <Link
            to={`/product/${id}`}
            className="btn btn-primary btn-primary--teal"
          >{`Get Now`}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
