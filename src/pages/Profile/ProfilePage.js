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




export default function ProfilePage() {
  const navigate = useNavigate();
  const [data] = useCustomProfile(`${URL_BASE}/profile`);
  const [history, setHistory] = useState("")
  const { name, address, cpf, email, id } = data;
  useProtected()

 useEffect(()=>{
  historyOrder()
 }, [])

  const historyOrder = () => {
    axios
      .get(`${URL_BASE}/orders/history`, headers)
      .then((res) => {
        setHistory(res.data)
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
  console.log(history)

  return (
    <div>  
 
      <S.Title>Meu perfil</S.Title>
    
      <S.ContainerProfile>
        <S.NameProfile>
          <div>
            <div> {name} </div>
            <div> {email}</div>
            <div> {cpf} </div>
          </div>
          <S.LapisEdit
            onClick={() => navigate("editarCadastro")}
            src={Caneta}
          />
        </S.NameProfile>
      </S.ContainerProfile>
      <S.DivEndress>
        <div>{address}</div>
        <S.LapisEdit
          onClick={() => navigate("hundleRegistration")}
          src={Caneta}
        />
      </S.DivEndress>

      <S.History>Histórico de pedidos</S.History>
      <S.Hr />

      <S.Nothing>{/* os pedidos deveriam aparecer aqui */}</S.Nothing>
      <button onClick={() => historyOrder()}>Testandoo</button>

      <MenuBotton />
    </div>
  );
}
