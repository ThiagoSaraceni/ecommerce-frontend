import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Detail } from "../pages/detail";
import { ShoppingCartPage } from "../pages/shoppingCart";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="cart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
