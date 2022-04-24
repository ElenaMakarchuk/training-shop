import React from "react";
import "./ImageNav.scss";
import { Link } from "react-router-dom";

const ImageNav = () => {
  return (
    <div className="wrapper__image__nav">
      <div className="a">
        <div className="banner__link">
          <h3 className="banner__name">Banner</h3>
          <h4 className="banner__title">your title text </h4>
        </div>
      </div>
      <div className="b">
        <Link to="/categories">
          <div className="categories__link">
            <h3 className="categories__name">woman</h3>
          </div>
        </Link>
      </div>
      <div className="c">
        <Link to="/categories">
          <div className="categories__link">
            <h3 className="categories__name">men</h3>
          </div>
        </Link>
      </div>
      <div className="d">
        <div className="categories__link">
          <h3 className="categories__name">accessories</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageNav;
