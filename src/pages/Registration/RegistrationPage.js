import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { exemplo } from "./styledRegistrationPage";
import axios from "axios";
import * as S from "./styledRegistrationPage";
import logo from "../../imagens/logo.png";
import useForm from "../../hooks/useForm"
import * as M from "@mui/material";
import { toast } from "react-toastify";
import backIcon from "../../imagens/icons/back-icon.png"

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


  const notifyWarnUser = () => {
    const customId = "custom-id-yes";
    toast.warn("Registre seu endereço!", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,
      
    });
  }
 
 
  const notifyErrorUser = () => {
    const customId = "custom-id-yes";
    toast.warn("Email ou CPF já cadastrado.", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,      
    });
  }

  const registrationUser = () => {
  if(form.password === userConfirmSenha){
    axios
      .post(`${URL_BASE}/signup`, form)
      .then((res) => {
        // console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        notifyWarnUser();
        // em caso de sucesso quando preencher o formulário vai pra loginpage        
        navigate("/registration/address-registration")
      })
      .catch((err) => {
        notifyErrorUser()
        console.log(err.response);
      });
  }
  else{
    const customId = "custom-id-yes";
    toast.warn("As senhas não são correspondentes.", {
      toastId: customId,
      position: toast.POSITION.TOP_RIGHT,      
    });
  }
}


  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };
  // console.log(form)
  return (
    <div>
      <S.Top>
        <S.BtBack onClick={()=>navigate(-1)} src={backIcon}/>
      </S.Top>
      <S.Main>
        <S.Img src={logo} />
        <S.Form onSubmit={onSubmitForm}>
          <S.Pa>Cadastrar</S.Pa>
          <M.TextField
            label="Nome"
            placeholder="Antonio(a) Silva"
            onChange={handleChange}
            value={form.name}
            name={"name"}
            // type="text"
            autoFocus
            fullWidth
            required
          />
          <M.TextField
            onChange={handleChange}
            value={form.cpf}
            name={"cpf"}
            type="number"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            // title="111.111.111-11"
            label="CPF"
            placeholder="88822233311"  
            fullWidth          
            required
          />
          <M.TextField
            type="email"
            onChange={handleChange}
            value={form.email}
            inputProps={{ pattern: "^[A-Za-z0-9.]+@[A-Za-z0-9]+\.([a-z]+)?$" }}
            name={"email"}
            label="E-mail"
            placeholder="email@email.com"
            fullWidth
            required
          />
           <M.TextField
            placeholder="PasSS01"
            label="Senha"
            inputProps={{ pattern: "[A-Za-z0-9]{6,}" }}            
            name={"password"}
            value={form.password}
            onChange={handleChange}
            type="password"          
            fullWidth
            required
          /> 
          <M.TextField
            type="password"
            onChange={takeConfirmSenha}
            value={userConfirmSenha}
            name={"password"}
            placeholder="Confirmar"
            fullWidth
            required
          />
          <S.Button onClick={() => registrationUser()}>Criar</S.Button>
        </S.Form>
      </S.Main>
    </div>
  );
};

export default CadastroPage;
