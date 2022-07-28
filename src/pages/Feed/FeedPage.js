import React, { useContext, useEffect, useState } from "react";
import { useProtected } from "../../hooks/useProtected";
import CardRestaurantFeed from "../../components/CardRestaurantFeed";
import { GlobalContext } from "../../global/GlobalContext";
import * as S from "./styledFeedPage";
import * as M from "@mui/material"
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import MenuBotton from "../../components/MenuBotton";
import { StepContext } from "@mui/material";
import notSearched from "../../components/notSearched";
import NotSearched from "../../components/notSearched";



// ================================= inicio do componente

const FeedPage = (props) => {
  const navigate = useNavigate()

  // useProtected()
  const [seletectCategory, setSeletectCategory] = useState('')
  const [filtredRestaurant, setFiltredRestaurant] = useState([])
  const [searchRestaurant, setSearchRestaurant] = useState([])
  const [query , setQuery] = useState('')
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
      <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })


// ===============================================
  
  useEffect(() => {
    const array = restaurants && restaurants.map((lojas) => {
      return lojas
    }).filter((lojas) => {
      return lojas.name.toLowerCase().includes(query.toLowerCase())
    })
    setSearchRestaurant(array)
  }, [query])

    
  const mapSearch = searchRestaurant && searchRestaurant.map((lojas) => {
    return (
      <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })



// =============================================================

  const filterRestaurantsMap = filtredRestaurant && filtredRestaurant.map((lojas) => {
    return (
       <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })

  console.log(states)
  // console.log(restaurants)


  // 


  
  // ======================== filtro categoria

  const categoryRestaurantMap = restaurants && restaurants.map(rest => {
    return <S.DivMenuPrincipal onClick={() => getCategory(rest.category)} seletectCategory={seletectCategory} restCategory={rest.category} >
      <S.Pa>{rest.category}</S.Pa>
      </S.DivMenuPrincipal>
  })


  //================= onclick
  const getCategory = (paramCategory) => {
    if (paramCategory === seletectCategory) {
      setSeletectCategory('')
    } else {
      setSeletectCategory(paramCategory)
    }
  }

  //==================== input controlado
  const [form, onChange, clear] = useForm({
    value:""    
  });

  //================ necessário no input para evitar atualizar a página
  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };



  return (
    <S.Master> 
      <S.Title id="top">Ifuture</S.Title>  
      <S.Form onSubmit={onSubmitForm}>
      {/* <S.ContTextField> */}
      {/* ================================= */}
      <M.TextField      
      fullWidth
      placeholder="Restaurante"
      name="value"
      value={query}
      onChange={e => setQuery((e).target.value)}
      ></M.TextField>
      {/* </S.ContTextField> */}
      </S.Form> 
      {/* ================================= */}
    
      <S.ContainerCategory>  
        {categoryRestaurantMap}      
        </S.ContainerCategory>
     { query ? (mapSearch.length > 0 ?  mapSearch : <NotSearched/> ) :  (  seletectCategory ? filterRestaurantsMap :  mapRestaurants   )  }
      <MenuBotton  />
    </S.Master>
  );
}

export default FeedPage