import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { headers, URL_BASE } from "../constants/links";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button, Form } from "../pages/Login/styledLoginPage";

// ===================== styled =================================

// ========================= control input ============================
const ProfileComponents = () => {
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
      <Form onSubmit={onSubmitForm}>
        <p>Mudar Dados Cadastrais</p>
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
