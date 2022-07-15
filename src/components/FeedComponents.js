import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Span = styled.div`
    display: flex;
    flex-direction: row;
    color: green;
    width: 100vw;
`
const Div = styled.div `
    width: 50%;
    height: auto;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
`
const Img = styled.img`
    width: 50%;
    height: 50%;
`
const RestaurantsComponents = (props) =>{
const {name , logoUrl , id ,description , deliveryTime , category , address  } = props.restaurants
const navigate = useNavigate()
const params = useParams()
    return(
       
           <Div  onClick={()=> navigate(`${id}`)}>
             <Img src={logoUrl}/>
             <br/>
             {name} 
             </Div >
           
       
    )
}

export default RestaurantsComponents