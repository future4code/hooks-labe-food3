import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import { Main } from "./styledInitialPage";

export default function InitialPage() {
  const navigate = useNavigate();

  return (
    <Main> <button onClick={()=>navigate('login')}>Login Page</button> </Main>
  );
}
