import styled from "styled-components";


export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  /* margin: 1rem; */
  padding-top: 15px;
  /* background-color: red; */
`;

export const FieldSize = styled.form`
width: 22rem;
padding-bottom: 0.5rem;
/* background-color: blue; */
`


export const Form = styled.form`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-direction: column; 
  gap: 1rem;
  padding-bottom: 1rem;
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
  /* width: 22.5rem; */
  height: 48px;
  border-radius: 3px;
  background-color: red;
  font-weight: 600;
  font-size: 18px;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;

export const Title = styled.p`
font-weight: 600;
`


export const Pa = styled.p`
font-weight: 600;
cursor: pointer;
`