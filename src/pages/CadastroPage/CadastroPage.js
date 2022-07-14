import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { exemplo } from "./styledCadastroPage";
import axios from "axios";
import {
  Main,
  Input,
  Button,
  Gap,
  Pa,
  Img,
  Top,
  BtBack,
} from "./styledCadastroPage";
import logo from "../../imagens/logo.png";
import useForm from "../../hooks/useForm"

const CadastroPage = () => {
  const navigate = useNavigate();
  // const [userName, setUserName] = useState("");
  // const [userSenha, setUserSenha] = useState("");
  const [userConfirmSenha, setUserConfirmSenha] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userCpf, setUserCpf] = useState("");

  // const takeName = (event) => {
  //   setUserName(event.target.value);
  // };
  // const takeSenha = (event) => {
  //   setUserSenha(event.target.value);
  // };
  const takeConfirmSenha = (event) => {
    setUserConfirmSenha(event.target.value);
  };
  // const takeEmail = (event) => {
  //   setUserEmail(event.target.value);
  // };
  // const takeCpf = (event) => {
  //   setUserCpf(event.target.value);
  // };

  const [form, handleChange, clear] = useForm(
    {
      name: '',
      email: '',
      cpf: '',
      password: ''
    }
  )


  const registrationUser = () => {
  //   const body = {
  //     name: userName,
  //     email: userEmail,
  //     cpf: userCpf,
  //     password: userSenha,
  //   };
if(form.password === userConfirmSenha){

    axios
      .post(`${URL_BASE}/signup`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  else{
    alert('deu certo NÃO')
  }
}


  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };
  console.log(form)
  return (
    <div>
      <Top>
        <BtBack>{"<"}</BtBack>
      </Top>
      <hr />
      <Main>
        <Img src={logo} />
        <form onSubmit={onSubmitForm}>
          <Pa>Cadastrar</Pa>
          <Input
            onChange={handleChange}
            value={form.name}
            name={"name"}
            type="text"
            placeholder="Nome"
            required
          />
          <Input
            onChange={handleChange}
            value={form.cpf}
            name={"cpf"}
            type="number"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="111.111.111-11"
            placeholder="CPF"
            required
          />
          <Input
            type="email"
            onChange={handleChange}
            value={form.email}
            name={"email"}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            onChange={handleChange}
            value={form.password}
            name={"password"}
            placeholder="Senha"
            required
          />
          <Input
            type="password"
            onChange={takeConfirmSenha}
            value={userConfirmSenha}
            name={"password"}
            placeholder="Confirmar"
            required
          />
          <Button onClick={() => registrationUser()}>Criar</Button>
        </form>
      </Main>
    </div>
  );
};

export default CadastroPage;
