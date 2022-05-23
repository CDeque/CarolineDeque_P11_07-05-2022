import axios from "axios";
import { useState, useEffect } from "react";


export default function useAxios(){

    const [data, setData]= useState([])

    useEffect (()=>{
 axios.get("../data.json")
 .then((res)=> setData(res.data))
 
    },[])
return (data)
}