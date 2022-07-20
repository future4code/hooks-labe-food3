import React from "react";
import InitialPage from "./pages/Initial/InitialPage";
import Router from "./routes/Router";
import GlobalStyled from "./GlobalStyled";
import { GlobalContext } from "./global/GlobalContext";
import { GlobalState } from "./global/GlobalState";

export default function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}
