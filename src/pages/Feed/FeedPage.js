import React, { useContext, useEffect, useState } from "react";
import { useProtected } from "../../hooks/useProtected";
import RestaurantsComponents from "../../components/CardRestaurantFeed";
import { GlobalContext } from "../../global/GlobalContext";
import {ContainerCategory,
  Main,
} from "./styledFeedPage";
import { navigate, useNavigate } from "react-router-dom";



// ================================= inicio do componente

const FeedPage = (props) => {
  const navigate = useNavigate()

  // useProtected()
  const [seletectCategory, setSeletectCategory] = useState('')
  const [filtredRestaurant, setFiltredRestaurant] = useState([])
  const {states,setters} = useContext(GlobalContext)
  const { restaurants }  =  states
  const  {setRestaurants} = setters
  


  useEffect(() => {
    const array = restaurants && restaurants.map((lojas) => {
      return lojas
    }).filter((lojas) => {
      return lojas.category === seletectCategory
    })
    setFiltredRestaurant(array)
  }, [seletectCategory])

    
  const mapRestaurants = restaurants && restaurants.map((lojas) => {
    return (
      <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })

  const filterRestaurantsMap = filtredRestaurant && filtredRestaurant.map((lojas) => {
    return (
       <RestaurantsComponents key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })

  console.log(states)
  // console.log(restaurants)
  
  // ======================== filtro categoria

  const categoryRestaurantMap = restaurants && restaurants.map(rest => {
    return <div onClick={() => getCategory(rest.category)} >{rest.category}</div>
  })


  //================= onclick
  const getCategory = (paramCategory) => {
    if (paramCategory === seletectCategory) {
      setSeletectCategory('')
    } else {
      setSeletectCategory(paramCategory)
    }
  }



  return (
    <div>
      Feed Page
      <button onClick={()=>navigate('/shoppingcart')}>carrinho</button>
      <ContainerCategory>  
        {categoryRestaurantMap}      
        </ContainerCategory>
      { seletectCategory ? filterRestaurantsMap :  mapRestaurants }
    </div>
  );
}

export default FeedPage