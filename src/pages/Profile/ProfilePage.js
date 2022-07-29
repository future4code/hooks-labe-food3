import React, { useEffect, useState } from "react";
import axios from 'axios'

import useCustomProfile from "../../hooks/useProfile";
import {headers, URL_BASE } from "../../constants/links";
import { NavigateBefore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuBotton from "../../components/MenuBotton";
import Caneta from '../../imagens/icons/lapis.png'
import * as S from "./styledProfilePage"
import MudarEndereço from "../../components/MudarEndereço";




export default function ProfilePage () {
  const navigate = useNavigate()
  const [data] = useCustomProfile(`${URL_BASE}/profile`) 
  const {name , address , cpf , email , id} = data
  const [historic , setHistoric] = useState([])

console.log(data)

useEffect(()=>{
  axios.get(`${URL_BASE}/orders/history` , headers).then((res)=>{
    setHistoric(res.data.orders)
    console.log(res.data.orders)
  }).catch((err)=>{
    console.log(err.res)
  })
},[historic])
 

const takeHistoric =historic && historic.map((historico)=>{
  return(
    <div>
      {historico.restaurantName} <br/>
      {historico.totalPrice}
    </div>
  )
})
  return (
    <div>
      <S.ContainerProfile>
        <S.NameProfile>
          <div>
         <p> {name}</p>
         <S.LapisEdit onClick={()=>navigate("editarCadastro")} src={Caneta}/>
          </div>
          <p>
          {email}
          </p>
          <p>
          {cpf}
          </p>
        </S.NameProfile>
      
    
      </S.ContainerProfile>
      <div> Endereço cadastrado <br/>
      {address}
     <button onClick={() => navigate("hundleRegistration")}>Editar Cadastro</button>
   
      </div>
    Histórico de pedidos
    {takeHistoric}
     <MenuBotton/>
    </div>
  );
}