import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroEnderecoPage from "../pages/CadastroEnderecoPage/CadastroEnderecoPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import CarrinhoPage from "../pages/CarrinhoPage/CarrinhoPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantePage from "../pages/RestaurantePage/RestaurantePage";
import TelaInicialPage from "../pages/TelaInicialPage/TelaInicialPage";
import Error from "../pages/Error/ErrorPage";

export default function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TelaInicialPage />} />
      <Route path="/cadastro/" element={<CadastroPage />} />
      <Route path="/profile/" element={<ProfilePage />} />
      <Route path="/restaurante/" element={<RestaurantePage />} />
      <Route path="/carrinho/" element={<CarrinhoPage />} />
      <Route path="/cadastro-endereco/" element={<CadastroEnderecoPage />} />
      <Route path="/feed/" element={<FeedPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>;
}
