import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import { Main } from "./styledTelaInicialPage";

export default function TelaInicialPage() {
  const navigate = useNavigate();

  return (
    <Main>{/* <button onClick={()=>navigate('login')}>BOtão</button> */}</Main>
  );
}
