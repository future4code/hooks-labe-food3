import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loading from "../imagens/carregando.gif"

const Main = styled.div`
display: flex;
justify-content: center;
`

const Img = styled.img`
width: 22.5rem;
height: auto;
margin: 0 auto;
`

const Loading = () => {
    const navigate = useNavigate()

  return (
    <Main>
    <Img src={loading}/>
    </Main>
  );
};

export default Loading;
