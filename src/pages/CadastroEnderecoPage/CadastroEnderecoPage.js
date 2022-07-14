import { LineAxisOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { exemplo } from "./styledCadastroEnderecoPage";
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
} from "./styledCadastroEnderecoPage";

const CadastroEnderecoPage = () => {
  const [userStreet, setUserStreet] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userBairro, setUserBairro] = useState("");
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userComplement, setUserComplement] = useState("");

  const takeStreet = (event) => {
    setUserStreet(event.target.value);
  };
  const takeNumber = (event) => {
    setUserNumber(event.target.value);
  };
  const takeBairro = (event) => {
    setUserBairro(event.target.value);
  };
  const takeState = (event) => {
    setUserState(event.target.value);
  };
  const takeCity = (event) => {
    setUserCity(event.target.value);
  };
  const takeComplement = (event) => {
    setUserComplement(event.target.value);
  };

  const takeAdress = () => {

    useProtected()
    
    const body = {
      street: userStreet,
      number: userNumber,
      neighbourhood: userBairro,
      city: userCity,
      state: userState,
      complement: userComplement,
    };
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .put(`${URL_BASE}/address`, body, headers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <Top>
        <BtBack>{"<"}</BtBack>
      </Top>
      <hr />
      <Main>
        <Gap>
          <Pa>Meu endereço</Pa>

          <Input placeholder={"   Rua / Av."} value={userStreet} />
          <Input placeholder={"   Número"} value={userNumber} />
          <Input placeholder={"    Apto. / Bloco"} value={userComplement} />
          <Input placeholder={"    Bairro"} value={userBairro} />
          <Input placeholder={"    Cidade"} value={userCity} />
          <Input placeholder={"    Estado"} value={userState} />
          <Button onClick={() => takeAdress()}>Enviar </Button>
        </Gap>
      </Main>
    </div>
  );
};

export default CadastroEnderecoPage;
