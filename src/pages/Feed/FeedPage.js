import React, { useContext, useEffect, useState } from "react";
import { useProtected } from "../../hooks/useProtected";
import CardRestaurantFeed from "../../components/CardRestaurantFeed";
import { GlobalContext } from "../../global/GlobalContext";
import * as S from "./styledFeedPage";
import * as M from "@mui/material"
import { navigate, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";



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
      <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  })

  const filterRestaurantsMap = filtredRestaurant && filtredRestaurant.map((lojas) => {
    return (
       <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })

  console.log(states)
  // console.log(restaurants)
  
  // ======================== filtro categoria

  const categoryRestaurantMap = restaurants && restaurants.map(rest => {
    return <div onClick={() => getCategory(rest.category)} ><S.Pa>{rest.category}</S.Pa></div>
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
    value:"",
  });

  //================ necessário no input para evitar atualizar a página
  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };


  return (
    <div>
      Feed Page
      <button onClick={()=>navigate('/shoppingcart')}>carrinho</button>
      <S.Title>Ifuture</S.Title>  
      {/* <S.Form onSubmit={onSubmitForm}> */}
      <S.ContTextField>
      <M.TextField
      onSubmit={onSubmitForm}
      fullWidth
      name="value"
      placeholder="Restaurante"
      value={form.value}
      onChange={onChange}
      ></M.TextField>
      </S.ContTextField>
      {/* </S.Form>  */}
      <S.ContainerCategory>  
        {categoryRestaurantMap}      
        </S.ContainerCategory>
      { seletectCategory ? filterRestaurantsMap :  mapRestaurants }
    </div>
  );
}

export default FeedPage