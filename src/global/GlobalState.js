import { useEffect, useState,  } from "react"
import { toast } from 'react-toastify';
import { GlobalContext } from "./GlobalContext"
import axios from 'axios'
import {URL_BASE, headers} from "../constants/links"
import LoginPage from "../pages/Login/LoginPage";





export const GlobalState = (props) => {
    const [restaurants , setRestaurants] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{    
      axios.get(`${URL_BASE}/restaurants`,headers)
      .then((res)=>{
       setRestaurants(res.data.restaurants)
       
      }).catch((err)=>{
        console.log(err);
      })
    } , [])


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
    console.log(res.data)
    toast.success("Pedido em andamento"(res.data.order.restaurantName)("Preço Total:")(res.data.order.totalPrice))
  })
  .catch((err)=>{
   toast.error("Existe um pedido em andamento.")
  })
}


//=================== adicionar item ao carrinho
    const addToCart = (product, idRestaurant)=>{
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
      }else{    
       const array = cart && cart.map(item=>{
          if(item.id === product.id){
            return {...product, quantity: item.quantity +1 }
          }
          return item
        })
        notifySucessProduct()    
        setCart(array)  
      }
      console.log(idRestaurant)
   }

   //=================== função de alert para item adicionado ao carrinho
   const notifySucessProduct = () => {    
     toast.success("Produto adicionado.", { autoClose: 200 }, {     
       position: toast.POSITION.TOP_RIGHT      
      });
    }
    
    //=================== função de alert para item removido do carrinho
  const notifyWarmProduct = () => {    
    toast.warn("Produto removido.", { autoClose: 200 }, {     
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

// useEffect(()=>{
//   axios.then(()=>{},[]);
//   .catch(()=>{},[])
// },[])
        

//======================== retorno dos estados globais
    const states = { restaurants , cart}
    const setters ={ setRestaurants , setCart }
    const functions = {addToCart , removeToCart, postOrder}

    return (
        <GlobalContext.Provider
        value={{states,setters,functions}}
        >
            {props.children} 
        </GlobalContext.Provider>
    )
}