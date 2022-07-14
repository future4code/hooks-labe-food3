import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicialPage from "../pages/TelaInicialPage/TelaInicialPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantePage from "../pages/RestaurantePage/RestaurantePage";
import CarrinhoPage from "../pages/CarrinhoPage/CarrinhoPage";
import CadastroEndereçoPage from "../pages/CadastroEnderecoPage/CadastroEnderecoPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import Error from "../pages/Error/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TelaInicialPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<CadastroPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="restaurante" element={<RestaurantePage />} />
        <Route path="carrinho" element={<CarrinhoPage />} />
        <Route path="cadastro/cadastro-endereco" element={<CadastroEndereçoPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
