import "./product.scss";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {fetchSingleProduct, singleProductSelector, loadingSelector} from "../../store/product-reducer";
import Sweater from "../../assets/images/icecreamgreysweatersite.png";

const Product = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector(singleProductSelector);
  const { loading } = useSelector(loadingSelector);

  useEffect(() => {
    console.log("ID ", id);
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);


  const renderCategory = () => {
    return product.categories.map((data, i) => {
      console.log(data)
        return <span className="product_card__details-tags badge text-dark"> 
            {data}
        </span>
    })
  }

  const img = {
    backgroundImage: `url(${Sweater})`,
  };

  if(!loading) {
  return (
    <div className="container product">
      <div className="row">
        <div className="col-12 col-lg-6 product__details-container">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <ul>
            <li>
              Category:{" "}
              {product.category && (
                <span className="product_card__details-tags badge text-dark">
                  {product.category}
                </span>
              )}
            </li>
            <li>
              Location:{" "}
              {product.location && (
                <span className="product-card__location badge text-dark">
                  {product.location}
                </span>
              )}
            </li>
            <li>{renderCategory()}</li>
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
              } else {
                return <p>loading</p>
              }
};

export default Product;
