import styled from "styled-components";
import tela_inicial from "../../imagens/tela_inicial.png";

export const Main = styled.div`
  background-image: url(${tela_inicial});
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  * {
    margin: 0;
  }
  @media (max-width: 375px) {
    background-image: url(${tela_inicial});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    * {
      margin: 0;
    }
  }
`;
