// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { URL_BASE } from "../constants/links";


// const ProductsComponents = (props) =>{
//     // const {
//     //     name,
//     //     logoUrl,
//     //     id,
//     //     description,
//     //     deliveryTime,
//     //     category,
//     //     address,
//     //     shipping,
//     //   } = props.restaurants
//     //   console.log(name)
//     const [product , setProducts] = useState()
    
//     const {id , categorias} = props
   
   
//     console.log(categorias)
   

//     useEffect(()=>{
//         getProducts()
//     }, [])
//     const getProducts = () =>{
//         const headers = {
//          headers : {
//          auth : localStorage.getItem("token")
//                  }
//                 }
//         axios.get(`${URL_BASE}/restaurants/${id}`, headers).then((res)=>{
//             console.log(res.data.restaurant)
//             setProducts(res.data.restaurant.products)
//         }).catch((err)=>{
//             console.log(err.response)
//         })
//     }
    
   
//     const mapProducts = product && product.filter((product)=>{
//        console.log(product.category === "Refeição")
//     })
 
    
//     // useEffect(()=>{
//     //     const headers = {
//     //       headers : {
//     //       auth : localStorage.getItem("token")
//     //      }
//     //     }
//     //     axios.get(`${URL_BASE}/restaurants/${id}` , headers).then((res)=>{
//     //       console.log(res.data.restaurant.products)
//     //       setProducts(res.data.restaurant.products)
//     //     }).catch((err)=>{
//     //       console.log(err)
//     //     })
//     //   } , [product])
//     return(
//         <div>
//            {mapProducts}
//         </div>
//     )
// }

// export default ProductsComponents