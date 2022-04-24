import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import "./Products.scss";
import ProductItem from "../productItem/ProductItem";

const arrProduct = [
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m1,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m2,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m3,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m4,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m5,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m6,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m7,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.m8,
  },
];

const MenProducts = () => {
  return (
    <section className="">
      <div className="products__wrapper">
        <div className="product__nav">
          <p className="products__title">men’s</p>
          <nav>
            <Link to="/">NEW ARRIVALS</Link>
            <Link to="/">SPECIALS</Link>
            <Link to="/">BESTSELLERS</Link>
            <Link to="/">MOST VIEWED</Link>
            <Link to="/">FEATURED PRODUCTS</Link>
          </nav>
        </div>
        <div className="products__el">
          {arrProduct.map((obj) => (
            <ProductItem
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
            />
          ))}
        </div>
        <div className="products__bottom">
          <Link to="/">See All</Link>
        </div>
      </div>
    </section>
  );
};

export default MenProducts;
