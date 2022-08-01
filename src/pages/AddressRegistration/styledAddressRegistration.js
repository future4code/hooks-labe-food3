import styled from "styled-components";




export const BtBack = styled.img`
background: none;
height: 2rem;
border: none;
padding-left: 1rem;
padding-top: 0.5rem;
cursor: pointer;
`

export const Top = styled.div`
display: flex;
height: 2.75rem;
/* background-color: red; */
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`


export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
padding: 20px;

`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 3px;
  background-color: red;
  font-weight: 600;
  font-size: 18px;
  border: none;
`;

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Pa = styled.p`
  display: flex;
  margin: 0;
  font-weight: 600;
`;