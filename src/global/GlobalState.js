import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from 'axios'
import {URL_BASE} from "../constants/links"



export const GlobalState = (props) => {

    const [restaurants , setRestaurants] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
      const headers = {
        headers : {
        auth : localStorage.getItem("token")
       }
      }
  
      axios.get(`${URL_BASE}/restaurants`,headers)
      .then((res)=>{
       setRestaurants(res.data.restaurants)
       
      }).catch((err)=>{
        console.log(err)
      })
    } , [])

    // const getCart = () =>{
    //   const carrinho = 
    // }
    const addToCart = () =>{
      console.log("oiii")
    }
    const states = { restaurants , cart}
    const setters ={ setRestaurants , setCart }
    const functions = {addToCart}
    return (
        <GlobalContext.Provider
        value={{states , setters , functions}}
        >
            {props.children} 
        </GlobalContext.Provider>
    )
}