import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  div {
    padding: 10px;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
`;

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  flex-direction: column;
`;
export const MainCard = styled.div`
  height: 7.5rem;
`;

export const Card = styled.div`
  display: flex;
  width: 20.5rem;
  height: 7rem;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
`;

export const Img = styled.img`
  width: 6rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 8px 0px 0px 8px;
`;

export const ContText = styled.div`
  padding-left: 1rem;
`;

export const Title = styled.div`
  margin-top: 1.125rem;
  margin-bottom: 0.25rem;
  height: 1.125rem;
  width: 10.438rem;
  font-size: 1rem;
  color: #e8222e;
`;

export const Description = styled.div`
  margin-bottom: 0.25rem;
  height: 1.875rem;
  font-size: 0.75rem;
  color: #b8b8b8;
`;
export const Price = styled.div`
  margin-bottom: 0.938rem;
  width: 7.375rem;
  height: 1.188rem;
  font-size: 1rem;
`;

export const Add = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  width: 5.625rem;
  height: 1.938rem;
  border: 1px solid #e02020;
  border-radius: 8px 0px 8px 0px;
  font-size: 0.75rem;
  letter-spacing: -0.29px;
  margin-top: 0.344rem;
  margin-left: 0.44rem;
`;

export const OrgPA = styled.div`
  display: flex;
  margin: 0;
`;
