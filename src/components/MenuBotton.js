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

const Main = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 92.5vh;

  background-color: white;
  border: 1px solid #b8b8b8;
  width: 23.3rem;
  height: 3rem;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 3rem;
`;

const Icon = styled.img`
  width: auto;
  height: 2rem;
  padding: 0 1rem;
  /* margin: 0; */
`;

const MenuBotton = () => {
    const navigate = useNavigate()

  return (
    <>
      <Main>
        <MenuItem>
          <Icon onClick={()=>navigate('/feed')} src={homeIcon} />
        </MenuItem>
        <MenuItem>
          <Icon onClick={()=>navigate('/shoppingcart')} src={cartIcon3} />
        </MenuItem>
        <MenuItem>
          <Icon onClick={()=>navigate('/profile')} src={perfilIcon} />
        </MenuItem>
      </Main>
    </>
  );
};

export default MenuBotton;
