import styled from "styled-components";

export const Master = styled.div`
margin-bottom: 3.5rem;
`


export const ContTextField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.3rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  `;
export const SubMenu = styled.div`
  display: flex;
  /* background-color:red; */
  overflow-x: scroll;
  width: 20.5rem;
  gap: 2rem;
`

export const DivMenuPrincipal = styled.div`
  color: ${(props) =>
    props.restCategory === props.seletectCategory ? "red" : "black"};
  border-bottom: ${(props) =>
    props.restCategory === props.seletectCategory ? "2px solid red" : "none"};
  cursor: pointer;
`;

export const Pa = styled.p`
  /* width: 5.438rem; */
  height: 1.125rem;
  text-align: center;
  letter-spacing: -0.39px;
  /* color: ${(props) =>
    props.restCategory === props.seletectCategory ? "red" : "black"}; */
`;


export const Title = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  letter-spacing: -0.39px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  /* padding-bottom: 0.75rem; */
  margin-bottom: 0.5rem;
  height: 2.75rem;
  /* width: 22.5rem; */
  /* background-color: red; */
`;



export const Img = styled.img`
width: 1rem;
`

export const Form = styled.form`
margin: 0 auto;
/* align-items: center; */
width: 20.5rem;
`;



