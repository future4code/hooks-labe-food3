import React, { useEffect, useState } from "react";
import { exemplo } from "./styledLoginPage";
import { Email } from "@mui/icons-material";
import styled from "styled-components";
import { navigate, useNavigate } from "react-router-dom";
import logo from "../../imagens/logo.png";
import { Main, Pa, Input, Img, Button , Gap,  } from "./styledLoginPage";
import axios from "axios";
import { URL_BASE } from "../../constances/links";





const LoginPage = () => {
  const navigate = useNavigate()
  const [inputEmail , setInputEmail] = useState("")
  const [inputSenha , setInputSenha] = useState("")
  const [user , setUser] = useState([])

  const onChangeEmail = (event)=>{
    setInputEmail(event.target.value)
  }
  const onChangeSenha = (event)=>{
    setInputSenha(event.target.value)
  }

  const hundleUser = () =>{
   
    const body = {
      email : inputEmail,
      password : inputSenha,
      
  }

  axios.post(`${URL_BASE}/login`, body).then((res)=>{
    setUser(res.data)
    // console.log(res.data.user.hasAddress)
    if(res.data.user.hasAddress === true){
      navigate("/restaurante")
    }
}).catch((err)=>{
 alert("Usuario nao cadastrado.Cadastre-se")
 navigate("/cadastro")
})
  }
  return (
    <Main>  
      <Img src={logo} />
      <Pa>Entrar</Pa>
      <Gap>
        <Input
          placeholder="Email"
          type="email"
          value={inputEmail}
          onChange={onChangeEmail}
          required
        />
        <Input
          placeholder="Senha"
          value={inputSenha}
          onChange={onChangeSenha}
          required
        />
        <Button onClick={() => hundleUser()}>Entrar</Button>
      </Gap>
      <Pa>
        Não possui cadastro?
        <span> Clique aqui.</span>
      </Pa>
    </Main>
  );
}

export default LoginPage