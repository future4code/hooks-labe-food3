import React, { useContext, useState } from "react";
import { exemplo } from "./styledShoppingCartPage";
import { useProtected } from "../../hooks/useProtected";
import { GlobalContext } from "../../global/GlobalContext";
import { navigate, useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import * as S from "./styledShoppingCartPage";
import { ConstructionOutlined, Description } from "@mui/icons-material";
import * as M from "@mui/material";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { headers, URL_BASE } from "../../constants/links";
import useCustomProfile from "../../hooks/useProfile";

export default function CarrinhoPage() {
  const navigate = useNavigate();

  const { states, setters, functions } = useContext(GlobalContext);
  const { restaurants, cart } = states;
  const { setRestaurants, setCart } = setters;
  const { addToCart, removeToCart, postOrder } = functions;
  const [data ,address] = useCustomProfile(`${URL_BASE}/profile/address`)
   const {city , complement , neighbourhood , number , state , street } = address


  //============= soma o valor total dos itens no carrinho
  let totalPrice = 0;
  for (const i of cart) {
    totalPrice += Math.round(i.price * i.quantity);
    console.log(totalPrice);
  }
  // const [form, onChange, clear] = useForm({
  //   paymentMethod: []  
  // });



const [payment, setPayment] = useState("");
const [card, setCard] = useState(false);
const [money, setMoney] = useState(false);
// const [checkedMoney, setCheckedMoney] = useState(false);
// const [checkedCard, setCheckedCard] = useState(false);


// const PaymentMetodMoney =()=>{  
//   setMoney(!money);
//   setMoney(false)
//   setPayment("Dinheiro") if(payment === "Dinheiro"){}
// }

console.log(payment)

// const PaymentMetodCard=()=>{  
//     setCard(!card);
//     setMoney(false);
//     setPayment("Cartao")
// } 


const PaymentMetod=(ev)=>{  
    setPayment(ev.target.value)
  } 



  return (
    <S.Dad>

      <S.Title>meu carrinho</S.Title>

      <S.Endress>
          Endereço de entrega 
      <S.pCarrinho>
          {street} , {number}
        </S.pCarrinho>
      </S.Endress>
  
      <button onClick={() => navigate("/feed")}>feed</button>
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
                  <S.Mais onClick={() => addToCart(item)}>+</S.Mais>
                </S.Buttons>
              </S.CardProduct>
            </S.ContCardProduct>
          );
        })}

      <S.Bot>Frete R$</S.Bot>
      <S.Bot1>
        SUBTOTAL: <div>{totalPrice}</div>
      </S.Bot1>

      <S.Bot2>
        <div>Forma de pagamento</div>
        <hr />
        <div>
          <S.Input type="radio" 
          //  name="paymentMethod"
          //  value={checkedMoney}
          name="payment"
          value="Dinheiro"
          //  checked={money}
           onChange={PaymentMetod}
           required
          />
          <S.Label>Dinheiro</S.Label>
        </div>
        <S.DivInput>
          <S.Input type="radio" 
          //  name="paymentMethod"
          //  value={checkedCard}
          name="payment"
          value="Cartao"
          //  checked={card}
           onChange={PaymentMetod}
           required
          />
          <S.Label>Cartão de crédito</S.Label>
        </S.DivInput>
      </S.Bot2>

      <S.Button onClick={() => postOrder()}>Confirmar</S.Button>
      <footer>
        <button><img src="casa.png" alt="casa"/></button>
        <button><img src="vista-lateral-vazia-do-carrinho-de-compras.png" alt="carrinho"/></button>
        <button><img src="pessoas.png" alt="pessoa"/></button>
      </footer>
   
    </S.Dad>
  );
}
