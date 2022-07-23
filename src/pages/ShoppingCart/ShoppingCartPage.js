import React, { useContext, useState } from "react";
import { exemplo } from "./styledShoppingCartPage";
import { useProtected } from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { navigate, useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import * as S from "./styledShoppingCartPage";
import { Description } from "@mui/icons-material";

export default function CarrinhoPage() {
  const navigate = useNavigate();

  const { states, setters, functions } = useContext(GlobalContext);
  const { restaurants, cart } = states;
  const { setRestaurants, setCart } = setters;
  const  {addToCart, removeToCart, postOrder} = functions 
  
  useProtected();
  
  //============= soma o valor total dos itens no carrinho
  let totalPrice = 0
  for (const i of cart) {
    totalPrice += (Math.round(i.price * i.quantity))
   console.log(totalPrice)
  }

console.log(cart)

  return (
    <S.Dad>
      <h1>meu carrinho</h1>
      <button onClick={() => navigate("/feed")}>feed</button>
      {cart &&
        cart.map((item) => {
          // setTotal(total+item.total)
          return( 
            <S.ContCardProduct>

            <S.CardProduct>             
              <S.Img src={item.photoUrl}/>
              <S.InformText>
              <S.TextSuperior>{item.name}
             <S.Qt>{item.quantity}</S.Qt> 
              </S.TextSuperior>
              <S.Descri>{item.description}</S.Descri>
              
              <S.Price>R${item.price}          
              </S.Price> 
              </S.InformText>
              <S.Buttons>
              <S.Menos onClick={()=>removeToCart(item)}>-</S.Menos>  
              <S.Mais onClick={()=>addToCart(item)}>+</S.Mais>
              </S.Buttons>
            </S.CardProduct>
            </S.ContCardProduct>

            )
        })}
            Total: {totalPrice}
            <button onClick={()=>postOrder()}>postOrder</button>
            
    </S.Dad>
  );
}
