import React, { useState } from "react";
import { exemplo } from "./styledLoginPage";
import { Email } from "@mui/icons-material";
import styled from "styled-components";
import { navigate, useNavigate } from "react-router-dom";
import logo from "../../imagens/logo.png";
import { Main, Form, Input, Img, Button } from "./styledLoginPage";
import axios from "axios";
import  URL_BASE  from "../../constances/links";




const LoginPage = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState("")
  const [senha , setSenha] = useState("")

  const onChangeEmail = (event) =>{
    setEmail(event.target.value)
  }
  
  const onChangeSenha = (event) =>{
    setSenha(event.target.value)
  }

  const addUser = () => {
  
    const body = {
    email: email,
    password: senha,
    }
  
   
      axios.get(`${URL_BASE}/login`).then((res)=>console.log(res))
      .catch((err)=>console.log(err.response))
    
  
  }


  return (
    <Main>
      <Img src={logo} />
      <h3>Entrar</h3>
      <div>
        <Input placeholder="Email" type="email" value={email} onChange={onChangeEmail} required />
        <Input placeholder="Senha"  value={senha} onChange={onChangeSenha}required />
        <Button onClick={()=>addUser()}>Entrar</Button>
       
      </div>
      <p>
        Não possui cadastro?
        <span onClick={() => navigate("/cadastro")}> Clique aqui.</span>
      </p>
    </Main>
  );
}

export default LoginPage