import React, { useContext, useState } from "react";
import { exemplo } from "./styledShoppingCartPage";
import { useProtected } from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { navigate, useNavigate } from "react-router-dom";

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
    <div>
      <h1>CARRINHO PAGE</h1>
      <button onClick={() => navigate("/feed")}>feed</button>
      {cart &&
        cart.map((item) => {
          // setTotal(total+item.total)
          return( 
            <div>
              <div>{item.name}</div>
              <img width="200px" src={item.photoUrl}/>
              <button onClick={()=>addToCart(item)}>MAIS</button>
              {item.quantity}
              <button onClick={()=>removeToCart(item)}>MENOS</button>  
              <br/>            
              R${item.price}          

            </div>
            )
        })}
            Total: {totalPrice}
            <button onClick={()=>postOrder()}>postOrder</button>
            
    </div>
  );
}
