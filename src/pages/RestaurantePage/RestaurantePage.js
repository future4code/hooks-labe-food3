import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledRestaurantePage";

const RestaurantePage = () =>{
  const params = useParams()
  const [products , setProducts] = useState()

  const restaurants = useContext(GlobalContext)

  const filterRest = restaurants.filter(rest=>{
    return rest.name === params.id
  })

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
  
  const mapProducts = products && products.map((product)=>{
    return(
      <div>
        <img src={product.photoUrl}/>
          <div key={product.id}> {product.name} -
          Preço: R${product.price} </div>

      </div>
      
    )
  })
  return(<div>
   Restaurante Page
    {mapProducts}
  </div>)
}

export default RestaurantePage
