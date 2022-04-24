import React from "react";
import Advantage from "../../components/advantage/Advantage";
import ImageNav from "../../components/imageNav/ImageNav";
import WomenProducts from "../../components/produts/WomenProducts";
import MenProducts from "../../components/produts/MenProducts";
import NewsBlock from "../../components/newsblock/NewsBlock";

const MainPage = () => {
  return (
    <div>
      <ImageNav />
      <Advantage />
      <WomenProducts />
      <MenProducts />
      <NewsBlock />
    </div>
  );
};

export default MainPage;
