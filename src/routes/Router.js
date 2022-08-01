import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../pages/Initial/InitialPage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RestaurantPage from "../pages/Restaurant/RestaurantPage";
import ShoppingCartPage from "../pages/ShoppingCart/ShoppingCartPage";
import AddressRegistrationPage from "../pages/AddressRegistration/AddressRegistrationPage";
import FeedPage from "../pages/Feed/FeedPage";
import Error from "../pages/Error/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";
import ProfileComponents from "../components/ProfileComponents";
import HundleRegistration from '../components/MudarEndereço'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/editarCadastro" element={<ProfileComponents/>}/>
        <Route path="feed" element={<FeedPage/>} />
        <Route path="shoppingcart" element={<ShoppingCartPage />} />
        <Route path="registration/address-registration" element={<AddressRegistrationPage />} />
        <Route path="feed/:name" element={<RestaurantPage/>} />
        <Route path="*" element={<Error />} /> 
        <Route path="profile/hundleRegistration" element={<HundleRegistration/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
