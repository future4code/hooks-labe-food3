import { useEffect, useState,  } from "react"
import { toast } from 'react-toastify';
import { GlobalContext } from "./GlobalContext"
import axios from 'axios'
import {URL_BASE, headers} from "../constants/links"
import LoginPage from "../pages/Login/LoginPage";
import { Icon } from "@mui/material";
import { navigate, useNavigate } from "react-router-dom";





export const GlobalState = (props) => {
    const [restaurants , setRestaurants] = useState([])
    const [cart , setCart] = useState([])

    
//=================================    
    const header = {
     headers : {
         auth :  localStorage.getItem("token")        
     }
    }


// =========================== axios q busca todos os restaurantes 
   const getRestaurants = ( ) =>{  
      axios.get(`${URL_BASE}/restaurants`, header)
      .then((res)=>{
       setRestaurants(res.data.restaurants)       
      }).catch((err)=>{
        console.log(err);
      })
  } 
    

//==================== enviar o produto
let stateId = ('')

const productsArray = cart.map(item=>{
    stateId = item.idRestaurant

   return{id: item.id,
  quantity: item.quantity}
 })

const body = {
  products: productsArray,
  paymentMethod: "creditcard"
}

// const idRestRequest = cart && cart[0]
const postOrder = (id) => {
  axios.post(`${URL_BASE}/restaurants/${id}/order`, body, headers)
  .then((res)=>{
    toast.success("Pedido realizado com sucesso.")
    toast.success("Pedido em andamento"(res.data.order.restaurantName)("Preço Total:")(res.data.order.totalPrice))
  })
  .catch((err)=>{
   toast.error("Existe um pedido em andamento.")
  })
}


//=========== zera o localstorage ao entrar
  useEffect(()=>{
    localStorage.setItem('idRes', '')
  },[])

  useEffect(()=>{
    cart.length === 0 && localStorage.setItem('idRes', '')
  },[cart])

  console.log(cart)

//=================== adicionar item ao carrinho
    const addToCart = (product, idRestaurant)=>{
      if(idRestaurant === localStorage.getItem('idRes') || localStorage.getItem('idRes') === ''){

      const index = cart.findIndex((qtd)=>{
          if(qtd.name === product.name){
           return true
       }else{
           return false
       }
      })

      if(index === -1){
        const obj = {...product, quantity:1, idRestaurant: idRestaurant}
        setCart([...cart, obj])
        localStorage.setItem('idRes', `${idRestaurant}`)
        toast.success("Produto adicionado.",{
          autoClose: 1000 , 
          icon:'😋'          
         }); 
      }else{    
       const array = cart && cart.map(item=>{
          if(item.id === product.id){
            return {...product, quantity: item.quantity +1 }
          }        
          return item      
        })
        toast.success("Produto adicionado.",{
          autoClose: 1000 , 
          icon:'😋'          
         });   
        setCart(array)  
      }

      console.log(idRestaurant)
    }else{
      toast.warn('Não permitido adicionar produto de lojas diferentes.',
     { autoClose: 1000})
    }
    
  }
    
    //=================== função de alert para item removido do carrinho
  const notifyWarmProduct = () => {    
    toast.warn("Produto removido.", { autoClose: 1000 }, {     
      position: toast.POSITION.TOP_RIGHT      
    });
  }


//=================== remove item ao carrinho
   const removeToCart = (product)=>{ 
      const array = cart && cart.map(item=>{
         if(item.id === product.id){
          if(item.quantity > 0){
            return {
              ...product, quantity: item.quantity -1 }
          }          
        }
         return item
       })
       const newArray = array.filter(item=>{
        return item.quantity > 0
       })
       notifyWarmProduct()
       setCart(newArray)
       console.log(cart)
      }


//======================== retorno dos estados globais
    const states = { restaurants , cart }
    const setters ={ setRestaurants , setCart }
    const functions = {addToCart , removeToCart, postOrder, getRestaurants}

    return (
        <GlobalContext.Provider
        value={{states,setters,functions}}
        >
            {props.children} 
        </GlobalContext.Provider>
    )
}