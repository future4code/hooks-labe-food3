import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


const Global = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22.5rem;
  height: 12.25rem;
`;

const Card = styled.div`
  width: 20.5rem;
  height: 11.75rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 20.5rem;
  height: 7.5rem;
  object-fit: cover;
`;

const DeliveryTime = styled.div`
  display: flex;
  height: 1.125rem;
  font-size: 1rem;
  justify-content: space-between;
  letter-spacing: -0.39px;
`;

const ContText = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  color: #b8b8b8;
`;
const Title = styled.div`
  color: #e8222e;
  width: 18.5rem;
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  margin-bottom: 0.25rem;

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
  // console.log(shipping);
  return (
    <Global>
    <MainCard>
      <Card onClick={() => navigate(`${name}`)}>
        <div>
          <Img src={logoUrl} />
        </div>

        <ContText>
          <Title>{name}</Title>
          <DeliveryTime>
            <div>{deliveryTime} min</div>
            <div>{shipping ? `Freteee R$${shipping},00` : "Frete grátis"}</div>
          </DeliveryTime>
        </ContText>
      </Card>
    </MainCard>
    </Global>
  );
};

export default RestaurantsComponents;
