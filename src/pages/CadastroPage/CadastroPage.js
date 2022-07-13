import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import {exemplo} from "./styledCadastroPage"

export default function CadastroPage () {
  const navigate = useNavigate();

  return (
    <div>
        Cadastro Page
        <button onClick={()=>navigate('cadastro')}>BOTÃO</button>



    </div>
  );
}