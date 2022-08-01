import { Menu } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../imagens/icons/home-icon.png";
import cartIcon from "../imagens/icons/cart-icon.png";
import cartIcon2 from "../imagens/icons/cart-icon2.png";
import cartIcon3 from "../imagens/icons/cart-icon3.png";
import cartIcon4 from "../imagens/icons/cart-icon4.png";
import perfilIcon from "../imagens/icons/perfil-icon.png";
import perfilIcon2 from "../imagens/icons/perfil-icon2.png";
import notfound from "../imagens/notfound.gif"

const Main = styled.div`
display: flex;
justify-content: center;
padding-top: 12rem;
`

const Img = styled.img`
width: 22.5rem;
height: auto;
margin: 0 auto;
`

const NotSearched = () => {
    const navigate = useNavigate()

  return (
    <Main>
    Restaurante não encontrado.
    </Main>
  );
};

export default NotSearched;
