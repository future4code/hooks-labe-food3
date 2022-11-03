import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";
import { exemplo } from "./styledError";


export default function ErrorPage() {

  const navigate = useNavigate()

  const teste = useContext(GlobalContext)


    return (
    <div>
      Error {teste}
      <button onClick={()=>navigate("/feed")}>Início</button>
    </div>
  );
}
