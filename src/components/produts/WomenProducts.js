import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import "./Products.scss";
import ProductItem from "../productItem/ProductItem";

const arrProduct = [
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w1,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w2,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w3,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w4,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w5,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w6,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w7,
  },
  {
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    imgUrl: Images.w8,
  },
];

const WomenProducts = () => {
  return (
    <section className="">
      <div className="products__wrapper">
        <div className="product__nav">
          <p className="products__title">women’s</p>
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

export default WomenProducts;
