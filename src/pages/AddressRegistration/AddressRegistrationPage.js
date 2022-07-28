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

const CadastroEnderecoPage = () => {
  // const [userStreet, setUserStreet] = useState("");
  // const [userNumber, setUserNumber] = useState("");
  // const [userBairro, setUserBairro] = useState("");
  // const [userState, setUserState] = useState("");
  // const [userCity, setUserCity] = useState("");
  // const [userComplement, setUserComplement] = useState("");
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

  // const takeStreet = (event) => {
  //   setUserStreet(event.target.value);
  // };
  // const takeNumber = (event) => {
  //   setUserNumber(event.target.value);
  // };
  // const takeBairro = (event) => {
  //   setUserBairro(event.target.value);
  // };
  // const takeState = (event) => {
  //   setUserState(event.target.value);
  // };
  // const takeCity = (event) => {
  //   setUserCity(event.target.value);
  // };
  // const takeComplement = (event) => {
  //   setUserComplement(event.target.value);
  // };

  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const notifySucessUser = () => {
    const customId = "custom-id-yes";
    toast.success("Sucesso!", {
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

    // useProtected()
    
    // const body = {
    //   street: userStreet,
    //   number: userNumber,
    //   neighbourhood: userBairro,
    //   city: userCity,
    //   state: userState,
    //   complement: userComplement,
    // };
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
        navigate('/feed')
      })
      .catch((err) => {
        console.log(err.response);
        notifyWarnUser()
      });
  };
  return (
    <div>
    <Top>
        {/* <BtBack onClick={()=>navigate(-1)}>{backIcon}</BtBack> */}
      </Top>      
      <Main>
        <form onSubmit={onSubmitForm}>
          <Pa>Meu endereço</Pa>
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

export default CadastroEnderecoPage;
