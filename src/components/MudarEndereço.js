import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL_BASE } from "../constants/links";
import useForm from "../hooks/useForm";
import {
    Main,
    Input,
    Button,
    Gap,
    Pa,
    Cont,
    Top,
    BtBack,
  } from "../pages/AddressRegistration/styledAddressRegistration";
import { Form } from "../pages/Login/styledLoginPage";
import styled from "styled-components";
import MenuBotton from "./MenuBotton";
import backIcon from "../imagens/icons/back-icon.png"

const AlingPa = styled.div`
display: flex;
justify-content: center;
`


const MudarEndereço = ()=>{
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
    
      const onSubmitForm = (ev) => {
        ev.preventDefault();
      };
    
      const notifySucessUser = () => {
        const customId = "custom-id-yes";
        toast.success("Endereço Modificado com Sucesso!", {
          toastId: customId,
          position: toast.POSITION.TOP_RIGHT,
          
        });
      }
    
      const notifyWarnUser = () => {
        const customId = "custom-id-yes";
        toast.warn("Tente novamente.", {
          toastId: customId,
          position: toast.POSITION.TOP_RIGHT,
          
        });
      }
    
    
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
            notifySucessUser()
            navigate('/profile')
          })
          .catch((err) => {
            console.log(err.response);
            notifyWarnUser()
          });
      };
      return (
        <div>
        <Top>
          <BtBack src={backIcon} onClick={()=>navigate(-1)}/>          
          </Top>      
          <Main>
            <Form onSubmit={onSubmitForm}>
              <AlingPa>
              <Pa>Editar Endereço</Pa>
              </AlingPa>
              <TextField 
              placeholder={"   Rua / Av."} 
              label="Rua / Av."
              onChange={handleChange}
              value={form.street}
              name={"street"}
              required
              autoFocus
               />
              <TextField placeholder={"   Número"} 
              label="Número"
              onChange={handleChange}
              value={form.number}
              name={"number"}
              required
               />
              <TextField placeholder={"    Apto. / Bloco"} 
              label="Apto. / Bloco"
              onChange={handleChange}
              value={form.complement}
              name={"complement"}
              required
              />
              <TextField placeholder={"    Bairro"} 
              label="Bairro"
              onChange={handleChange}
              value={form.neighbourhood} 
              name={"neighbourhood"}
              required
              />
              <TextField placeholder={"    Cidade"} 
              label="Cidade"
              onChange={handleChange}          
              value={form.city}
              name={"city"}
              required
              />
              <TextField placeholder={"    Estado"} 
              label="Estado"
              onChange={handleChange}
              value={form.state} 
              name={"state"}
              required
              />
              <Button onClick={()=>takeAdress()} >Enviar </Button>
            </Form>
          </Main>
          <MenuBotton/>
        </div>
      );
    };

export default MudarEndereço