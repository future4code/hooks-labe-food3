import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  align-items: center;
  background-color: #e8222e;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  /* animation: bounce 2s infinite alternate; */
  /* animation-duration: 2s; */
  /* animation-fill-mode: backwards; */
  /* opacity: 0; */
  @keyframes opacity {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 7.875rem;
  height: 4.063rem;
  /* background-color: #e8222e; */
  animation: bounce 2s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-15px);
    }
  }
`;

export const Button = styled.button`
  font-size: 18px;
  letter-spacing: -0.39px;
  color: black;
  background-color: #e8f0fe;
  border: none;
  border-radius: 3px;
  font-weight: 600px;
  width: 20.5rem;
  height: 48px;
  margin-top: 1rem;
`;
