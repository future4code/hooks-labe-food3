import styled from "styled-components";
import TextField from "@mui/material"

export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-top: 15px;
`;

export const FieldSize = styled.form`
width: 22rem;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
  /* width: 22rem; */
`;


export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3.2rem;
  border: none;
  padding: 5px;
  margin: 0;
  
`;

export const Img = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 22rem;
  height: 48px;
  border-radius: 3px;
  background-color: red;
  font-weight: 600;
  font-size: 18px;
  border: none;
  margin-top: 5px;
`;

export const Pa = styled.p`
font-weight: 600;
`