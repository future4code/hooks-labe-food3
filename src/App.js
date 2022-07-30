import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InitialPage from "./pages/Initial/InitialPage";
import Router from "./routes/Router";
import GlobalStyled from "./GlobalStyled";
import { GlobalContext } from "./global/GlobalContext";
import { GlobalState } from "./global/GlobalState";
import styled from "styled-components";

const Main = styled.div`
font-family: 'Roboto', sans-serif;
` 

export default function App() {
  return (
    <Main>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
        <ToastContainer />
    </Main>
  );
}
