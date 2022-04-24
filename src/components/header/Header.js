import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <section className="top__bar">
          <div className="bar__item">
            <img src={Images.phone} alt="phone" />
            <p>+375 29 100 20 30</p>
            <img src={Images.clock} alt="clock" />
            <p>Belarus, Gomel, Lange 17</p>
            <img src={Images.location} alt="location" />
            <p>All week 24/7</p>
          </div>
          <nav className="social__nav">
            <Link to="/">
              <img src={Images.logoFacebook} alt="facebook" />
            </Link>
            <Link to="/">
              <img src={Images.instagram} alt="instagram" />
            </Link>
            <Link to="/">
              <img src={Images.logoTwitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={Images.logoPinterest} alt="pinterest" />
            </Link>
          </nav>
        </section>
        <section className="main__nav">
          <div className="general__logo">
            <Link to="/MainPage">
              <img src={Images.cleverShopLogo} alt="logo" />
            </Link>
          </div>
          <nav className="header__nav">
            <Link to="/mainPage">About us</Link>
            <Link to="/categories">Women</Link>
            <Link to="/categories">Men</Link>
            <Link to="/">Beauty</Link>
            <Link to="/">Accessories</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
          </nav>
          <nav className="header__profile">
            <Link to="/">
              <img src={Images.search} alt="search" />
            </Link>
            <Link to="/">
              <img src={Images.globalSearch} alt="search" />
            </Link>
            <Link to="/">
              <img src={Images.user} alt="user" />
            </Link>
            <Link to="/">
              <img src={Images.basket} alt="basket" />
            </Link>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default Header;
