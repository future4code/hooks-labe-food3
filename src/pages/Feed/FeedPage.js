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
import search from "../../imagens/icons/search.png"
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import Loading from "../../components/Loading";


// ================================= inicio do componente

const FeedPage = (props) => {
  const navigate = useNavigate()
  useProtected()
  
  const [seletectCategory, setSeletectCategory] = useState('')
  const [filtredRestaurant, setFiltredRestaurant] = useState([])
  const [searchRestaurant, setSearchRestaurant] = useState([])
  const [query , setQuery] = useState('')
  const {states,setters, functions} = useContext(GlobalContext)
  const { restaurants, token }  =  states
  const  {setRestaurants} = setters
  const {getRestaurants} = functions

  
  useEffect(()=>{
    localStorage.getItem("token") && getRestaurants()
  },[])


  useEffect(() => {
    const array = restaurants && restaurants.map((lojas) => {
      return lojas
    }).filter((lojas) => {
      return lojas.category === seletectCategory
    })
    setFiltredRestaurant(array)
  }, [seletectCategory])

    
  const mapRestaurants = restaurants && restaurants.map((lojas) => (
      <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category} />
    )
  )


// ============================ filtro pelo search
  
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



// ================================ reataurantes filtrados por nome

  const filterRestaurantsMap = filtredRestaurant && filtredRestaurant.map((lojas) => {
    return (
       <CardRestaurantFeed key={lojas.id} restaurants={lojas} categorias={lojas.category}  />
    )
  })




  
  // ======================== filtro categoria
  const [categoryRestaurants, setCategoryRestaurants] = useState([])

  restaurants && restaurants.map(rest => {
    if (categoryRestaurants.includes(rest.category)) {
      return false;
    } else {
      return setCategoryRestaurants([...categoryRestaurants, rest.category]);
    }
  })

  console.log(categoryRestaurants)

  const categoryRestaurantMap = categoryRestaurants && categoryRestaurants.map(category => {
    return <S.DivMenuPrincipal onClick={() => getCategory(category)} seletectCategory={seletectCategory} restCategory={category} key={category.id}>
      <S.Pa>{category}</S.Pa>
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
      <M.TextField      
      fullWidth      
      placeholder="Restaurante"      
      name="value"
      value={query}
      onChange={e => setQuery((e).target.value)}
      InputProps={{
        startAdornment: (
          <M.InputAdornment position="start">
            <S.Img src={search}/>
          </M.InputAdornment>
        ),
      }}
      />      

      </S.Form>        
      <S.Menu>  
        <S.SubMenu>
        {categoryRestaurantMap}      
        </S.SubMenu>
        </S.Menu>
     { query ? (mapSearch.length > 0 ?  mapSearch : <NotSearched/> ) :  (  seletectCategory ? filterRestaurantsMap :  (mapRestaurants.length > 0 ? mapRestaurants : <Loading/> )  )   }
      <MenuBotton  />
    </S.Master>
  );
}

export default FeedPage