import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-top: 15px;
`;

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
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
`;

export const Pa = styled.p`
font-weight: 600;
`