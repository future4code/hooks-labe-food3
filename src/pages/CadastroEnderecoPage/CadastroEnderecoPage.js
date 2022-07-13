import { LineAxisOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import {exemplo} from "./styledCadastroEnderecoPage"
import axios from "axios"
import { URL_BASE } from "../../constances/links";

const  CadastroEnderecoPage = () => {
  const [userStreet , setUserStreet] = useState("")
  const [userNumber , setUserNumber] = useState("")
  const [userBairro , setUserBairro] = useState("")
  const [userState , setUserState] = useState("")
  const [userCity , setUserCity] = useState("")
  const [userComplement , setUserComplement ] = useState("")



  const takeAdress = () =>{
    const body = {
      "street": userStreet,
      "number": userNumber,
      "neighbourhood": userBairro,
      "city": userCity,
      "state": userState,
      "complement": userComplement,
    }
    const headers = {
      headers :{
        auth : localStorage.getItem("token")
      }
    }
    axios.put(`${URL_BASE}/address` , body , headers).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err.response)
    })
  }
  return (
   
    <div>
        <input placeholder="Rua"/>
        <input placeholder="Numero" />
        <input placeholder="Bairro"/>
        <input placeholder="Cidade"/>
        <input placeholder="Estado" />
        <input placeholder="Complemento"/>
        <button onClick={()=>takeAdress() }>Enviar </button>

    </div>
  );
}

export default CadastroEnderecoPage