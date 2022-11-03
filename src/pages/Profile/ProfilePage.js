import React, { useEffect, useState } from "react";
import axios from "axios";

import useCustomProfile from "../../hooks/useProfile";
import { headers, URL_BASE } from "../../constants/links";
import { NavigateBefore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuBotton from "../../components/MenuBotton";
import Caneta from "../../imagens/icons/lapis.png";
import * as S from "./styledProfilePage";
import MudarEndereço from "../../components/MudarEndereço";
import { BtBack, Top } from "../Registration/styledRegistrationPage";
import backIcon from "../../imagens/icons/back-icon.png"
import { useProtected } from "../../hooks/useProtected";
import { Button } from "@mui/material";



export default function ProfilePage() {
  const navigate = useNavigate();
  const [data] = useCustomProfile(`${URL_BASE}/profile`);
  const [history, setHistory] = useState("")
  const { name, address, cpf, email, id } = data;
  useProtected()

  const dateFormated = new Intl.DateTimeFormat('pt-BR', {dateStyle:"long"} )


//==================== map do histórico
  const mapHistory = history && history.map((product)=>{        
    return (<S.Cont>
        <S.TitleHistory>{product.restaurantName}</S.TitleHistory>
        <S.Mid>{dateFormated.format(product.createdAt)}</S.Mid>
        <S.Sub>Subtotal R${product.totalPrice}</S.Sub>
        {/* <div>{product.expiresAt}</div> */}
      </S.Cont>
      )
})


  useEffect(()=>{
    historyOrder()
  }, [])
  
//========= função para logout , limpando todos os localstorage
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

//========== requisição do histórico de pedidos
  const historyOrder = () => {
    axios
      .get(`${URL_BASE}/orders/history`, headers)
      .then((res) => {
        setHistory(res.data.orders)
      })
      .catch((err) => {
        console.log(err.res);
      });
  };


  return (
    <div>  
 
      <S.Title>Meu perfil</S.Title>
      <S.ContLogout>
        <S.Logout>
      <Button variant="contained" color="primary" size="small" onClick={()=>logout()}>LOGOUT</Button>
        </S.Logout>    
      </S.ContLogout>
      <S.ContainerProfile>
        <S.Cont205>
        <S.NameProfile>
          <S.GapPerfil>
            <div> {name} </div>
            <div> {email}</div>
            <div> {cpf} </div>
          </S.GapPerfil>
          <S.LapisEdit
            onClick={() => navigate("editarCadastro")}
            src={Caneta}
            />
        </S.NameProfile>
            </S.Cont205>
      </S.ContainerProfile>

      <S.DivEndress>       
        <S.Cont206> 
          <S.Cont02>
            <S.Endress>
            Endereço cadastrado
            </S.Endress>
            <div>  {address}
              </div>
          </S.Cont02>        
        <S.LapisEdit
          onClick={() => navigate("hundleRegistration")}
          src={Caneta}
          />          
          </S.Cont206>    
      </S.DivEndress>

      <S.ContHistory>
      <S.History>Histórico de pedidos</S.History>
      <S.Hr />
      </S.ContHistory>
      <S.Nothing>
        {mapHistory}
      </S.Nothing>
      <MenuBotton />
    </div>
  );
}
