import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../../constants/links";
import { useProtected } from "../../hooks/useProtected";
import { exemplo } from "./styledRestaurantePage";

const RestaurantePage = () =>{
  const params = useParams()
  const [products , setProducts] = useState()
  
  useEffect(()=>{
    const headers = {
      headers : {
      auth : localStorage.getItem("tokenEndereco")
     }
    }
    axios.get(`${URL_BASE}/restaurants/${params.id}` , headers).then((res)=>{
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
