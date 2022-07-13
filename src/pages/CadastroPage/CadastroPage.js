import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constances/links";
import {exemplo} from "./styledCadastroPage"
import axios from "axios";

const CadastroPage =  () => {
  const navigate = useNavigate();
  const [userName , setUserName] = useState("")
  const [userSenha , setUserSenha] = useState("")
  const [userEmail , setUserEmail] = useState("")
  const [userCpf , setUserCpf] = useState("")


  const hundleName = (event) =>{
    setUserName(event.target.value)
  }
  const takeSenha = (event) =>{
    setUserSenha(event.target.value)
  }
  const takeEmail = (event) =>{
    setUserEmail(event.target.value)
  }
  const takeCpf = (event) =>{
    setUserCpf(event.target.value)
  }
  const registrationUser = () =>{
    const body = {
      name: userName,
      email: userEmail,
      cpf : userCpf,
      password: userSenha,
    }

    axios.post(`${URL_BASE}/signup`, body).then((res)=>{
      console.log(res.data.token)
      localStorage.setItem("token" , res.data.token)
    }).catch((err)=>{
      console.log(err.response)
    })

  }

  return (
    <div>
        <input onChange={takeName} value={userName} placeholder="Nome"/>
        <input onChange={takeCpf} value={userCpf} placeholder="CPF"/>
        <input onChange={takeEmail} value={userEmail} placeholder="Email" />
        <input onChange={takeSenha} value={userSenha} placeholder="Senha"/>
        <button onClick={() =>registrationUser() }>Enviar</button>

    </div>
  );
}

export default CadastroPage