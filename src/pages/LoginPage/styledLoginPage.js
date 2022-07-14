import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-top: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
  
`;

export const TextField = styled.fieldset`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0;
text-align: left;
padding-left: 10px;
legend{
  /* background-color: blue; */
  padding-left: 5px;
  padding-right: 30px;
  margin: 0;
  /* padding: 0; */
}
/* background-color: red; */
/* height: 4.5rem; */
/* padding: 5px; */
/* padding-bottom: 0; */
  /* margin: 0; */
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3.2rem;
  border: none;
  padding: 5px;
  margin: 0;
`;

export const Img = styled.img`
  width: 104px;
  height: 58px;
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 100%;
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