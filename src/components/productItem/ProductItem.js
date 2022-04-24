import React from "react";
import "./ProductItem.scss";
import Images from "../../assets/images";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="product__item__container">
      <div className="product__foto">
        <Link to="/src/pages/cartPage">
          <img className="" src={props.imgUrl} alt="foto" />
        </Link>
      </div>
      <div className="product__name">
        <p>{props.title}</p>
      </div>
      <div className="product__grade">
        <span>{props.price}</span>
        <img className="" src={Images.stars} alt="stars" />
      </div>
    </div>
  );
};

export default ProductItem;
