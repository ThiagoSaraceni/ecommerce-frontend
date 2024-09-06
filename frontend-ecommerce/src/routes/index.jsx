import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Detail } from "../pages/detail";
import { ShoppingCartPage } from "../pages/shoppingCart";
import { Login } from "../pages/login";
import { RegisterUser } from "../pages/register";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  );
};

export default Rotas;
