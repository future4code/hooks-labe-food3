import React, { useState } from "react";
import { navigate, useNavigate, useParams } from "react-router-dom";
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

const CadastroPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userSenha, setUserSenha] = useState("");
  const [userConfirmSenha, setUserConfirmSenha] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const params = useParams()

  const takeName = (event) => {
    setUserName(event.target.value);
  };
  const takeSenha = (event) => {
    setUserSenha(event.target.value);
  };
  const takeConfirmSenha = (event) => {
    setUserConfirmSenha(event.target.value);
  };
  const takeEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const takeCpf = (event) => {
    setUserCpf(event.target.value);
  };
  const registrationUser = () => {
    const body = {
      name: userName,
      email: userEmail,
      cpf: userCpf,
      password: userSenha,
    };

    axios
      .post(`${URL_BASE}/signup`, body)
      .then((res) => {
        console.log(res.data.token);
        navigate("cadastro-endereco")
        localStorage.setItem("token",  res.data.token);
       
      
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <Top>
        <BtBack>{"<"}</BtBack>
      </Top>
      <hr />
      <Main>
        <Img src={logo} />
        <Gap>
          <Pa>Cadastrar</Pa>
          <Input
            onChange={takeName}
            value={userName}
            type="text"
            placeholder="Nome"
            required
          />
          <Input
            onChange={takeCpf}
            value={userCpf}
            type="number"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="111.111.111-11"
            placeholder="CPF"
            required
          />
          <Input
            type="email"
            onChange={takeEmail}
            value={userEmail}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            onChange={takeSenha}
            value={userSenha}
            placeholder="Senha"
            required
          />
          <Input
            type="password"
            onChange={takeConfirmSenha}
            value={userConfirmSenha}
            placeholder="Confirmar"
            required
          />
          <Button onClick={() => registrationUser()}>Criar</Button>
        </Gap>
      </Main>
    </div>
  );
};

export default CadastroPage;
