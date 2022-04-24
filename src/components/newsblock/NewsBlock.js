import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import "./NewsBlock.scss";

const NewsBlock = () => {
  return (
    <section>
      <div className="news__wrapper">
        <div className="news__container">
          <div className="news__item1">
            <div className="news__block">
              <p className="news__title">New Season</p>
              <p className="news__subtitle">lookbook collection</p>
            </div>
          </div>
          <div className="news__item2">
            <div className="news__block">
              <p className="news__title">Sale</p>
              <p className="news__subtitle">Get UP to 50% off</p>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe__wrapper">
        <div className=""></div>
      </div>
      <div className="blog__wrapper">
        <div className=""></div>
      </div>
    </section>
  );
};

export default NewsBlock;
