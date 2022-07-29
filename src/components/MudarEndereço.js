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
          </Top>      
          <Main>
            <form onSubmit={onSubmitForm}>
              <Pa>Editar Endereço</Pa>
              <Input placeholder={"   Rua / Av."} 
              onChange={handleChange}
              value={form.street}
              name={"street"}
               />
              <Input placeholder={"   Número"} 
              onChange={handleChange}
              value={form.number}
              name={"number"}
               />
              <Input placeholder={"    Apto. / Bloco"} 
              onChange={handleChange}
              value={form.complement}
              name={"complement"}
              />
              <Input placeholder={"    Bairro"} 
              onChange={handleChange}
              value={form.neighbourhood} 
              name={"neighbourhood"}
              />
              <Input placeholder={"    Cidade"} 
              onChange={handleChange}          
              value={form.city}
              name={"city"}
              />
              <Input placeholder={"    Estado"} 
              onChange={handleChange}
              value={form.state} 
              name={"state"}
              />
              <Button onClick={()=>takeAdress()} >Enviar </Button>
            </form>
          </Main>
        </div>
      );
    };

export default MudarEndereço