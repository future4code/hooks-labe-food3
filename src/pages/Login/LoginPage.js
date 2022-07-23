import React, { useEffect, useState } from "react";
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
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const tokenEndereco = localStorage.getItem("tokenEndereco");
  const token = localStorage.getItem("token");

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    // axios
    //   .post(`${URL_BASE}/login`, form)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.token);
    //     // console.log(res.data.user.hasAddress)
    //     if (res.data.user.hasAddress) {
    //       navigate("/feed");
    //     }
    //   })
    //   .catch((err) => {
    //     alert("Email ou senha incorreto.");
    //     navigate("/cadastro");
    //   });
  };

  
  const notifySucessUser = () => {
    const customId = "custom-id-yes";
    toast.success("Login realizado com sucesso!", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,
      
    });
  }
  
  const notifyErrorUser = () => {
    const customId = "custom-id-yes";
    toast.warn("Não registrado, faça seu cadastro.", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,      
    });
  }


  const hundleUser = () => {
    axios
      .post(`${URL_BASE}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.user.hasAddress) {
          notifySucessUser() 
          navigate("/feed");
        }
      })
      .catch((err) => {
        notifyErrorUser()
        navigate("/registration");
      });
  };

  const [viewPass, setViewPass] = useState(false);

  const showPass = () => {
    setViewPass(!viewPass);
  };

  return (
    <S.Main>
      <button onClick={() => navigate("/feed")}>feed</button>
      <S.Img src={logo} />
      <S.Pa>Entrar</S.Pa>
      <S.Form onSubmit={onSubmitForm}>
        <S.FieldSize>
          <TextField
            name="email"
            placeholder="email@email.com"
            label="E-mail"
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
            fullWidth
            value={form.email}
            onChange={onChange}
            required
          ></TextField>
        </S.FieldSize>
        {/* // ======================================  */}
        <S.FieldSize>
          <TextField
            placeholder="Mínimo 6 caracteres"
            label="Senha"
            inputProps={{ pattern: "[A-Za-z'.+]{6,}" }}
            title="Mínimo 6 caracteres"
            fullWidth
            name={"password"}
            value={form.password}
            onChange={onChange}
            type={viewPass ? "text" : "password"}
            required
          >
            <button onClick={showPass}>BT</button>
          </TextField>
        </S.FieldSize>
        <S.Button onClick={() => hundleUser()}>Entrar</S.Button>
      </S.Form>
      <S.Pa onClick={() => navigate("/cadastro")}>
        Não possui cadastro?
        <span> Clique aqui.</span>
      </S.Pa>
    </S.Main>
  );
};

export default LoginPage;
