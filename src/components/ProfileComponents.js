import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { headers, URL_BASE } from "../constants/links";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button, Form } from "../pages/Login/styledLoginPage";
import { BtBack, Pa, Top } from "../pages/Registration/styledRegistrationPage";
import { navigate, useNavigate } from "react-router-dom";
import backIcon from "../imagens/icons/back-icon.png"

// ===================== styled =================================

// ========================= control input ============================
const ProfileComponents = () => {

  const AlingPa = styled.div`
display: flex;
justify-content: center;
padding-top: 1rem;
`

const navigate = useNavigate();

  const [form, handleChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  // ========================= axios requisition ======================
  const updateProfile = () => {
    axios
      .put(`${URL_BASE}/profile`, form, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //================= prevent form ================================
  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <Top>
          <BtBack src={backIcon} onClick={()=>navigate(-1)}/>          
          </Top> 
      <Form onSubmit={onSubmitForm}>
      <AlingPa>        
        <Pa>Mudar Dados Cadastrais</Pa>
      </AlingPa>
        <TextField
          onChange={handleChange}
          value={form.name}
          label="Nome"
          inputProps={{ pattern: "[A-Za-z]{2,} [A-Z,a-z]{2,}" }}
          name={"name"}
          placeholder="Antônio(a) Silva"
          focused
          required
        />
        <TextField
          onChange={handleChange}
          value={form.email}
          name={"email"}
          label="Email"
          placeholder="email@exemplo.com"
          required
        />
        <TextField
          onChange={handleChange}
          value={form.cpf}
          name={"cpf"}
          label="CPF"
          inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$" }}
          placeholder="888.888.888-88"
          required
        />
        <Button onClick={() => updateProfile()}>Enviar</Button>
      </Form>
    </div>
  );
};

export default ProfileComponents;
