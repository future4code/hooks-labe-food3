import React, { useState } from "react";
import axios from 'axios'
import {exemplo} from "./styledProfilePage"
import { useProtected } from "../../hooks/useProtected";
import CustomProfile from "../../hooks/useProfile";
import useCustomProfile from "../../hooks/useProfile";
import {headers, URL_BASE } from "../../constants/links";
import useForm from "../../hooks/useForm";
import { NavigateBefore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ProfileComponents from "../../components/ProfileComponents";
import MenuBotton from "../../components/MenuBotton";


export default function ProfilePage () {
  const navigate = useNavigate()
  const [data] = useCustomProfile(`${URL_BASE}/profile`) 
  const {name , address , cpf , email , id} = data
 


  
 console.log(data.user)

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{cpf}</div>
      <button>Editar cadastro</button>
      <div> endereço cadastrado <br/>
      {address}
      </div>
     <button onClick={()=>navigate("editarCadastro")}>editar endereço</button>
     <br/>
    Histórico de pedidos
     
     <MenuBotton/>
    </div>
  );
}