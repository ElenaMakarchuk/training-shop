import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import CartPage from "./pages/cartPage/CartPage";
import CategoriesPage from "./pages/categoriesPage/CategoriesPage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
