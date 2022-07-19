import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledRestaurantePage";
import styled from "styled-components";

const ContainerCategory = styled.div`
 display: flex;
 overflow-x: scroll;
 
 div{
  padding: 10px;
  font-size: 2rem;
 }
`

const RestaurantePage = () =>{
  // passei o nome do restaurante pelo path
  const params = useParams()

  const [products , setProducts] = useState()
  const [filterProducts, setFilterProducts] = useState([])
  const [selectCategory, setSelectCategory] = useState('')


  // está puxando todos os restaurantes do globalState
  const restaurants = useContext(GlobalContext)


// filtrando o restautante do estado global pelo nome
  const filterRest = restaurants.filter(restaurantes=>{
    return restaurantes.name === params.name
  })

  // desistruturei para ficar um objeto em vez de array
  const [objRestaurante] = filterRest 

  useEffect(()=>{
    const headers = {
      headers : {
      auth : localStorage.getItem("token")
     }
    }
    axios.get(`${URL_BASE}/restaurants/${objRestaurante.id}` , headers).then((res)=>{
      console.log(res.data.restaurant.products)
      setProducts(res.data.restaurant.products)
    }).catch((err)=>{
      console.log(err)
    })
  } , [])
  

  // rederizando todos os productos
  const mapProducts = products && products.map((product)=>{
    return(
      <div>

        <img src={product.photoUrl}/>
          <div key={product.id}> {product.name} -
          Preço: R${product.price} </div>

      </div>
      
    )
  })



  // ==================== filtro =============================


  // estado q pega todas as categorias dos produtos 
  const [categoriasProduct, setCategoriasProduct]  = useState([])
  
  // codigo elimina as repeticões das categorias 
  products && products.map((product)=>{
    if(categoriasProduct.includes( product.category)){
      return false
    }else{
      return setCategoriasProduct([...categoriasProduct, product.category])
    }
  })

  // para renderizar a mudança dos filtros
  useEffect(()=>{

    const array = products && products.filter(product=>{
      return product.category === selectCategory
      
    })

    setFilterProducts(array)

  }, [selectCategory])

 
// onclick q seta a categoria clicada para o estado
  const getCategory = ( category) =>{
    if(selectCategory === category){
    setSelectCategory('')
    }else{
      setSelectCategory(category)
    }
  }

  // rederizando os productos filtrados
  const productsFilter = filterProducts && filterProducts.map((product)=>{
    return(

      <div>
        <img src={product.photoUrl}/>
          <div key={product.id}> {product.name} -
          Preço: R${product.price} </div>

      </div>
      
    )
  })
  
  // rederiza as categorias
  const categoriasRedered = categoriasProduct && categoriasProduct.map(category=>{
    return (
      <div onClick={() => getCategory(category)}>{category}</div>
    )
  })
   
 
  return(<div>
   Restaurante Page
   <ContainerCategory >{categoriasRedered}</ContainerCategory>
    {selectCategory ? productsFilter : mapProducts}
  </div>)
}

export default RestaurantePage
