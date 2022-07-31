import React, { useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { exemplo } from "./styledLoginPage";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import { navigate, useNavigate } from "react-router-dom";
import logo from "../../imagens/logo.png";
import * as S from "./styledLoginPage";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import useForm from "../../hooks/useForm";
import * as M from "@mui/material";
import { GlobalContext } from "../../global/GlobalContext";

const LoginPage = () => {

  const navigate = useNavigate();
  const { states, setters, functions } = useContext(GlobalContext)
  


  // ====================== userform
  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
  });


  // =================== mostrar e esconder senha 
  const [viewPass, setViewPass] = useState(false);

  const showPass = () => {
    setViewPass(!viewPass);
  };

  // ============== preventform
  const onSubmitForm = (ev) => {
    ev.preventDefault();
    handleUser();
  };

  useEffect(() => {
  }, [])

  const handleUser = () => {
    axios
      .post(`${URL_BASE}/login`, form)
      .then((res) => {
        if (res.data.user.hasAddress) {
          localStorage.setItem("token", res.data.token);
          
          navigate("/feed");
          toast.success("Login realizado com sucesso!", {
            autoClose: 1000,
            icon: '😍'
          });
        } else {
          toast.warn("Cadastre seu endereço.", {
            autoClose: 1000,
            icon: '📝'
          });
          navigate('/registration/address-registration')
        }
      })
      .catch((err) => {
        toast.warn("Não registrado, faça seu cadastro.", {
          autoClose: 1000
        });
        console.log(err)
      });
  };


  return (
    <S.Main>
      <S.Img src={logo} />
      <S.Pa>Entrar</S.Pa>
      <S.Form onSubmit={onSubmitForm} >
        <M.TextField
          name="email"
          placeholder="exemplo@email.com"
          label="E-mail"
          inputProps={{ pattern: "^[A-Za-z0-9.]+@[A-Za-z0-9]+\.([a-z]+)?$" }}
          fullWidth
          value={form.email}
          onChange={onChange}
          autoFocus
          required
        />
        <M.TextField
          placeholder="Mínimo 6 dígitos"
          label="Senha"
          inputProps={{ pattern: "[A-Za-z0-9]{6,}" }}
          fullWidth
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={viewPass ? "text" : "password"}
          required
        />
        <S.Button type="submit" >Entrar</S.Button>
      </S.Form>
      <S.Pa onClick={() => navigate("/registration")}>
        Não possui cadastro?
        <span> Clique aqui.</span>
      </S.Pa>
    </S.Main>
  );
};


export default LoginPage;
