import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Span = styled.div`
  display: flex;
  flex-direction: row;
  color: green;
  width: 100vw;
`;
const Div = styled.div`
  width: 50%;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;
const Img = styled.img`
  width: 50%;
  height: 50%;
`;
const RestaurantsComponents = (props) => {
  const {
    name,
    logoUrl,
    id,
    description,
    deliveryTime,
    category,
    address,
    shipping,
  } = props.restaurants;
  const navigate = useNavigate();
  console.log(shipping);
  return (
    <Div onClick={() => navigate(`${name}`)}>
      <Img src={logoUrl} />
      <br />
      <p>{name}</p>

      <p>{shipping? shipping : "Frete grátis"}</p>
    </Div>
  );
};

export default RestaurantsComponents;
