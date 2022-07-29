import axios from "axios"
import { useEffect, useState } from "react"
import { headers, URL_BASE } from "../constants/links"






const useCustomProfile = (url) =>{
    const [data , setData] = useState({})
    const [address,setAdress] = useState([])
    
   
    useEffect(()=>{
        axios.get(url,headers ).then((res)=>{
            setData(res.data.user)
            setAdress(res.data.address)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [data , address]
    
}

export default useCustomProfile