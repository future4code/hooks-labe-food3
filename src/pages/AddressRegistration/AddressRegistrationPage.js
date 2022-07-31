import { LineAxisOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { exemplo } from "./styledAddressRegistration";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import { useProtected } from "../../hooks/useProtected";
import {
  Main,
  Input,
  Button,
  Gap,
  Pa,
  Cont,
  Top,
  BtBack,
} from "./styledAddressRegistration";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { toast } from "react-toastify";
import backIcon from "../../imagens/icons/back-icon.png"
import { TextField } from "@mui/material";
import { Form } from "../Login/styledLoginPage";
import styled from "styled-components";


const AlignPa = styled.div`
display: flex;
justify-content: center;
`

const CadastroEnderecoPage = () => {
  
  useProtected()
  const params = useParams()
 const navigate = useNavigate()
  const [form, handleChange, clear] = useForm(
    {
      street: '',
      number: '',
      neighbourhood: '',
      city:'',
      state: '',
      complement: ''
    }
  )


  // ========= prevent default

  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };


  const takeAdress = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .put(`${URL_BASE}/address`, form, headers)
      .then((res) => {
        console.log(res)
        localStorage.setItem("tokenEndereco", res.data.token);
        toast.success("Sucesso!", {  
          position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            icon: '✨'
        });
        navigate('/feed')
      })
      .catch((err) => {       
        toast.warn("Tente novamente.", { 
          autoClose: 1000,               
        });
      });
  };


  return (
    <div>
     <Top>
        <BtBack onClick={()=>navigate(-1)} src={backIcon}/>
      </Top>    
      <Main>
        <Form onSubmit={onSubmitForm}>
          <AlignPa>
          <Pa>Meu endereço</Pa>
          </AlignPa>
          <TextField placeholder={"   Rua / Av."} 
          onChange={handleChange}
          value={form.street}
          name={"street"}
          label="Rua / Av."
          required
          autoFocus
           />
          <TextField placeholder={"   Número"} 
          onChange={handleChange}
          value={form.number}
          name={"number"}
           />
          <TextField placeholder={"    Apto. / Bloco"} 
          onChange={handleChange}
          value={form.complement}
          name={"complement"}
          />
          <TextField placeholder={"    Bairro"} 
          onChange={handleChange}
          value={form.neighbourhood} 
          name={"neighbourhood"}
          />
          <TextField placeholder={"    Cidade"} 
          onChange={handleChange}          
          value={form.city}
          name={"city"}
          />
          <TextField placeholder={"    Estado"} 
          onChange={handleChange}
          value={form.state} 
          name={"state"}
          />
          <Button onClick={()=>takeAdress()} >Enviar </Button>
        </Form>
      </Main>
    </div>
  );
};

export default CadastroEnderecoPage;
