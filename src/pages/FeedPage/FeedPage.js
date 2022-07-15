import React, { useContext, useEffect, useState } from "react";
import {exemplo} from "./styledFeedPage1"
import { useProtected } from "../../hooks/useProtected";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import RestaurantsComponents from "../../components/CardRestauranteFeed";
import { GlobalContext } from "../../global/GlobalContext";


const FeedPage = (props) => {
 
  // useProtected()

  const restaurants = useContext(GlobalContext)
  
  console.log(restaurants)

  const mapRestaurants = restaurants && restaurants.map((lojas)=>{
    return(
      <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category}/>
    )
  })

  
  const categorias = restaurants && restaurants.map(rest =>{
    return <li >{rest.category}</li>
  })

  console.log(categorias)

  return (
    <div>
       Feed Page
      <ul>{categorias}</ul>
      {mapRestaurants}
    </div>
  );
}

export default FeedPage