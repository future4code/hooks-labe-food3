import React, { useContext, useEffect, useState } from "react";
import { exemplo } from "./styledFeedPage1"
import { useProtected } from "../../hooks/useProtected";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import RestaurantsComponents from "../../components/CardRestauranteFeed";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";
import ProductsComponents from "../../components/ProductsComponents";


const ContainerCategory = styled.div`
 display: flex;
 overflow-x: scroll;
 
 div{
  padding: 10px;
  font-size: 2rem;
 }
`

// ================================= inicio do componente

const FeedPage = (props) => {

  // useProtected()

  const [categoria, setCategoria] = useState('')
  const restaurantsApi = useContext(GlobalContext)
  const [restaurants, setRestaurants] = useState([])

  
  useEffect(() => {

    const array = restaurantsApi && restaurantsApi.map((lojas) => {
      return lojas
    }).filter((lojas) => {
      return lojas.category === categoria
    })

    setRestaurants(array)

  }, [categoria])

    
  const mapRestaurants = restaurantsApi && restaurantsApi.map((lojas) => {
    return (
      <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })

  const filterRestaurants = restaurants && restaurants.map((lojas) => {
    return (
       <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })


  // ======================== filtro categoria

  const categorias = restaurantsApi && restaurantsApi.map(rest => {
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
      <ContainerCategory>{categorias}</ContainerCategory>
      { categoria ? filterRestaurants : mapRestaurants}
    </div>
  );
}

export default FeedPage