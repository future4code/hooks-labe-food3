import React from "react";
import TelaInicialPage from "./pages/TelaInicialPage/TelaInicialPage";
import Router from "./routes/Router";
import  GlobalStyled  from "./GlobalStyled";

export default function App() {
  return (
    <div>
      <GlobalStyled />
        <Router />      
    </div>
  );
}
