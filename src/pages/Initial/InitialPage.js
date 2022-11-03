import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import * as S from "./styledInitialPage";
import futureLogo from "../../imagens/logo-future-eats.png"
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";

export default function InitialPage() {
  const navigate = useNavigate();

  const ToastLogin = () => {
    navigate('login')
    toast.success("Oi seja bem-vindo!", {
      autoClose: 1000,
      icon: '😍'
  });
  }



  return (
    <S.Main>
      <S.Div>
      <S.Img src={futureLogo}/>
      </S.Div>    
       <S.Button
       color="primary"
       variant="contained"
      //  fullWidth
       onClick={()=>ToastLogin()}>Login</S.Button>
    </S.Main>
  );
}
