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


const ProfileEditPage= ()=> {
  const [data] = useCustomProfile(`${URL_BASE}/profile`)
  const {name , address , cpf , email , id} = data.user
  const navigate = useNavigate()
  useProtected()
 
  
 console.log(data)

  return (
    <div>
<h1>pagina de editar perfil</h1>
    </div>
  );
}

export default ProfileEditPage;