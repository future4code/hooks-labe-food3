import styled from "styled-components";

export const Main = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
`;

export const Img = styled.img`
  width: 104px;
  height: 58px;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: red;
  font-weight: 600;
  font-size: 18px;
`;
