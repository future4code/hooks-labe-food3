import React, { useEffect, useState } from "react";
import { exemplo } from "./styledLoginPage";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
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
  FieldSize,
} from "./styledLoginPage";
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

  const hundleUser = () => {
    axios
      .post(`${URL_BASE}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // console.log(res.data.user.hasAddress)
        if (res.data.user.hasAddress) {
          navigate("/feed");
        }
      })
      .catch((err) => {
        alert("Usuário não cadastrado. Cadastre-se!");
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
        <FieldSize>
          <TextField
            name="email"
            placeholder="email@email.com"
            label="E-mail"
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
            fullWidth
            value={form.email}
            onChange={onChange}
            required
          >
          </TextField>
        </FieldSize>
        {/* // ======================================  */}
        <FieldSize>
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
        </FieldSize>
        <Button onClick={()=>hundleUser()}>Entrar</Button>
      </Form>
      <Pa onClick={() => navigate("/cadastro")}>
        Não possui cadastro?
        <span> Clique aqui.</span>
      </Pa>
    </Main>
  );
};

export default LoginPage;
