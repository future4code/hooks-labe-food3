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
  const [data] = useCustomProfile(`${URL_BASE}/profile`)
  const {name , address , cpf , email , id} = data
  const navigate = useNavigate()
 
  
 

  return (
    <div>
      <form>
        <input value={name}/>
        <input value={address}/>
        <input value={cpf}/>
        <input value={email}/>       
      </form>
     {/* <strong>Nome:</strong> {name} <br/>
     <strong>Endereço:</strong> {address} <br/>
     <strong>Cpf :</strong> {cpf}<br/>
     <strong>E-mail :</strong> {email} <br/> */}
     <button onClick={()=>navigate("editarCadastro")}>editar</button>
     
     <MenuBotton/>
    </div>
  );
}