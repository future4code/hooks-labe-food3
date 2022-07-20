import React, { useContext, useEffect, useState } from "react";
import { exemplo } from "./styledFeedPage1"
import { useProtected } from "../../hooks/useProtected";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import RestaurantsComponents from "../../components/CardRestaurantFeed";
import { GlobalContext } from "../../global/GlobalContext";
import {ContainerCategory,
  Main,
} from "./styledFeedPage1";





// ================================= inicio do componente

const FeedPage = (props) => {

  // useProtected()

  const [categoria, setCategoria] = useState('')
  // const [restaurants, setRestaurants] = useState([])
  const states = useContext(GlobalContext)
  const setters = useContext(GlobalContext)
  const { restaurants }  = states
  const  {setRestaurants} = setters
  
  
  // useEffect(() => {

  //   const array = restaurants && restaurants.map((lojas) => {
  //     return lojas
  //   }).filter((lojas) => {
  //     return lojas.category === categoria
  //   })

  //   // setRestaurants(array)

  // }, [categoria])

    
  const mapRestaurants = restaurants && restaurants.map((lojas) => {
    return (
      <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })

  const filterRestaurants = restaurants && restaurants.map((lojas) => {
    return (
       <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })

  console.log(states)
  console.log(restaurants)
  
  // ======================== filtro categoria

  const categorias = restaurants && restaurants.map(rest => {
    return <div onClick={() => getCategory(rest.category)} >{rest.category}</div>
  })

  const getCategory = (paramCategory) => {
    if (paramCategory === categoria) {
      setCategoria('')
    } else {
      setCategoria(paramCategory)
    }
  }



  return (
    <div>
      Feed Page
      <ContainerCategory>  
        {categorias}      
        </ContainerCategory>
      {mapRestaurants}
    </div>
  );
}

export default FeedPage