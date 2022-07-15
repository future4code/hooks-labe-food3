import React, { useEffect, useState } from "react";
import {exemplo} from "./styledFeedPage1"
import { useProtected } from "../../hooks/useProtected";
import axios from "axios";
import { URL_BASE } from "../../constants/links";
import FeedComponents from "../../components/FeedComponents";


const FeedPage = (props) => {
 
  const [restaurants , setRestaurants] = useState([])
  // useProtected()

  useEffect(()=>{
    const headers = {
      headers : {
      auth : localStorage.getItem("tokenEndereco")
     }
    }

    axios.get(`${URL_BASE}/restaurants`,headers).then((res)=>{
     setRestaurants(res.data.restaurants)
    }).catch((err)=>{
      console.log(err)
    })
  } , [])
  

  const mapRestaurants = restaurants && restaurants.map((lojas)=>{
    return(
      <FeedComponents key={lojas.id} restaurants={lojas} categorias={lojas.category}/>
    )
  })
  return (
    <div>
       Feed Page
      {mapRestaurants}
    </div>
  );
}

export default FeedPage