import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import * as S from "./styledInitialPage";
import futureLogo from "../../imagens/logo-future-eats.png"
import { Button } from "@material-ui/core";

export default function InitialPage() {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.Div>
      <S.Img src={futureLogo}/>
      </S.Div>    
       <S.Button
       color="primary"
       variant="contained"
      //  fullWidth
       onClick={()=>navigate('login')}>Login</S.Button>
    </S.Main>
  );
}
