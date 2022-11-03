import React, { useContext, useState } from "react";
import { exemplo } from "./styledShoppingCartPage";
import { useProtected } from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { navigate, useNavigate, useParams } from "react-router-dom";
import { Card } from "@material-ui/core";
import * as S from "./styledShoppingCartPage";
import { ConstructionOutlined, Description } from "@mui/icons-material";
import * as M from "@mui/material";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { headers, URL_BASE } from "../../constants/links";
import useCustomProfile from "../../hooks/useProfile";
import MenuBotton from "../../components/MenuBotton";

export default function CarrinhoPage() {
  const navigate = useNavigate();
  const params = useParams()
  const { states, setters, functions } = useContext(GlobalContext);
  const { restaurants, cart } = states;
  const { setRestaurants, setCart } = setters;
  const { addToCart, removeToCart, postOrder } = functions;
  const [data ,address] = useCustomProfile(`${URL_BASE}/profile/address`)
   const {city , complement , neighbourhood , number , state , street } = address
   useProtected()
  const idRes = localStorage.getItem('idRes')

  //============= soma o valor total dos itens no carrinho
  let totalPrice = 0;
  for (const i of cart) {
    totalPrice += Math.round(i.price * i.quantity);
    console.log(totalPrice);
  }


const [payment, setPayment] = useState("");
const [card, setCard] = useState(false);
const [money, setMoney] = useState(false);




const PaymentMetod=(ev)=>{  
    setPayment(ev.target.value)
  } 


  console.log(params)
  return (
    <S.Dad>
      <S.MyCart>Meu carrinho</S.MyCart>
      <S.Endress>
        <S.Size>
        <S.pCarrinho>
          Endereço de entrega 
        </S.pCarrinho>
          {street} , {number}
          </S.Size>        
      </S.Endress>      
      {cart &&
        cart.map((item) => {
          // setTotal(total+item.total)
          return (
            <S.ContCardProduct>
              <S.CardProduct>
                <S.Img src={item.photoUrl} />
                <S.InformText>
                  <S.Qt>{item.quantity}</S.Qt>
                  <S.SubCont>
                    <S.TextSuperior>{item.name}</S.TextSuperior>
                    <S.Descri>{item.description}</S.Descri>
                    <S.Price>R${item.price}</S.Price>
                  </S.SubCont>
                </S.InformText>
                <S.Buttons>
                  <S.Menos onClick={() => removeToCart(item)}>-</S.Menos>
                  <S.Mais onClick={() => addToCart(item, idRes)}>+</S.Mais>
                </S.Buttons>
              </S.CardProduct>
            </S.ContCardProduct>
          );
        })}
{/* =================================== FREEEETE */}
      <S.Bot>Frete R$ "valor total somado" </S.Bot>
      <S.Bot1>
        SUBTOTAL: <div>{totalPrice}</div>
      </S.Bot1>

      <S.Bot2>
        <div>Forma de pagamento</div>
        <hr />
        <div>
          <S.Input type="radio"         
          name="payment"
          value="Dinheiro"          
           onChange={PaymentMetod}
           required
          />
          <S.Label>Dinheiro</S.Label>
        </div>
        <S.DivInput>
          <S.Input type="radio"     
          name="payment"
          value="Cartao"       
           onChange={PaymentMetod}
           required
          />
          <S.Label>Cartão de crédito</S.Label>
        </S.DivInput>
      </S.Bot2>

      <S.Button onClick={() => postOrder(`${idRes}`)}>Confirmar</S.Button>
     
   <MenuBotton></MenuBotton>
    </S.Dad>
  );
}
