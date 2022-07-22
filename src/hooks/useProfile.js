import axios from "axios"
import { useEffect, useState } from "react"
import { headers, URL_BASE } from "../constants/links"



const useCustomProfile = (url) =>{
    const [data , setData] = useState([])
    const [handleProfile , setUpdateProfile] = ("")
   
    useEffect(()=>{
        axios.get(url,headers ).then((res)=>{
            setData(res.data.user)
        }).catch((err)=>{
            console.log(err.response)
        })
    } , [url])
   
   
    return [data ]
    
}

export default useCustomProfile