import React from "react";
import { exemplo } from "./styledLoginPage";
import { Email } from "@mui/icons-material";
import styled from "styled-components";
import { navigate, useNavigate } from "react-router-dom";
import logo from "../../imagens/logo.png";
import { Main, Form, Input, Img, Button } from "./styledLoginPage";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <Img src={logo} />
      <h3>Entrar</h3>
      <Form>
        <Input placeholder="Email" type="email" required />
        <Input placeholder="Senha" type="password" required />
        <Button>Entrar</Button>
      </Form>
      <p>
        Não possui cadastro?
        <span onClick={() => navigate("/cadastro")}> Clique aqui.</span>
      </p>
    </Main>
  );
}
