import React, { useContext, useState } from "react";
import { exemplo } from "./styledShoppingCartPage";
import { useProtected } from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { navigate, useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import {CardProduct , InformText , TextSuperior , Menos , Mais , Img , Price , Buttons , Descri, Cont , Dad , Qt , ContCardProduct} from "./styledShoppingCartPage";
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
    totalPrice += (i.price * i.quantity)
   console.log(totalPrice)
  }

console.log(cart)

  return (
    <Dad>
      <h1>meu carrinho</h1>
      <button onClick={() => navigate("/feed")}>feed</button>
      {cart &&
        cart.map((item) => {
          // setTotal(total+item.total)
          return( 
            <ContCardProduct>

            <CardProduct>             
              <Img src={item.photoUrl}/>
              <InformText>
              <TextSuperior>{item.name}
             <Qt>{item.quantity}</Qt> 
              </TextSuperior>
              <Descri>{item.description}</Descri>
              
              <Price>R${item.price}          
              </Price> 
              </InformText>
              <Buttons>
              <Menos onClick={()=>removeToCart(item)}>-</Menos>  
              <Mais onClick={()=>addToCart(item)}>+</Mais>
              </Buttons>
            </CardProduct>
            </ContCardProduct>

            )
        })}
            Total: {totalPrice}
            <button onClick={()=>postOrder()}>postOrder</button>
            
    </Dad>
  );
}
