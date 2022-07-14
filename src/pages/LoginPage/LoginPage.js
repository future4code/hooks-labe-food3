import React, { useEffect, useState } from "react";
import { exemplo } from "./styledLoginPage";
import { Email } from "@mui/icons-material";
import styled from "styled-components";
import { navigate, useNavigate } from "react-router-dom";
import logo from "../../imagens/logo.png";
import {
  Main,
  Pa,
  Img,
  Button,
  Form,
  Input,
  TextField,
} from "./styledLoginPage";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import useForm from "../../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [inputEmail , setInputEmail] = useState("")
  // const [inputSenha , setInputSenha] = useState("")
  // const onChangeEmail = (event)=>{
  //   setInputEmail(event.target.value)
  // }
  // const onChangeSenha = (event)=>{
  //   setInputSenha(event.target.value)
  // }

  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const hundleUser = () => {
    axios
      .post(`${URL_BASE}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // console.log(res.data.user.hasAddress)
        if (res.data.user.hasAddress === true) {
          navigate("/restaurante");
        }
      })
      .catch((err) => {
        alert("Usuario nao cadastrado.Cadastre-se");
        navigate("/cadastro");
      });
  };

  const [viewPass, setViewPass] = useState(false);

  const showPass = () => {
    setViewPass(!viewPass);
  };

  return (
    <Main>
      <Img src={logo} />
      <Pa>Entrar</Pa>
      <Form onSubmit={onSubmitForm}>
        <TextField>
          <legend>E-mail*</legend>
          <Input
            name="email"
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            placeholder="E-mail"
            type="email"
            required
          />
        </TextField>
        <TextField>
          <legend>Senha*</legend>
          <Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            type={viewPass ? "text" : "password"}
            required
          />
          <button onClick={showPass}>BT</button>
        </TextField>
        <Button onClick={() => hundleUser()}>Entrar</Button>
      </Form>
      <Pa>
        Não possui cadastro?
        <span> Clique aqui.</span>
      </Pa>
    </Main>
  );
};

export default LoginPage;
