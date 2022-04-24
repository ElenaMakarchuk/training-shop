import React from "react";
import Images from "../../assets/images";
import "./Advantage.scss";

const Advantage = () => {
  return (
    <section className="advantage__sectoin">
      <div className="advantage__blok">
        <img className="truck" src={Images.truck} alt="foto" />
        <div className="advantage__el">
          <p className="advantage__title">Free shipping</p>
          <p className="advantage__subtitle">
            On all UA order or order above $100
          </p>
        </div>
      </div>
      <div className="advantage__blok">
        <img src={Images.refresh} alt="foto" />
        <div className="advantage__el">
          <p className="advantage__title">30 days return</p>
          <p className="advantage__subtitle">
            Simply return it within 30 days for an exchange
          </p>
        </div>
      </div>
      <div className="advantage__blok">
        <img src={Images.support} alt="foto" />
        <div className="advantage__el">
          <p className="advantage__title">support 24/7</p>
          <p className="advantage__subtitle">
            Contact us 24 hours a day, 7 days a week
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
