 import Carousel from "../../components/Carousel"
import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


export default function Housing(){
  
const [data, setData]= useState([])
   useEffect (()=>{
axios.get("../data.json")
.then((res)=> setData(res.data))

   },[])
   console.log(data);
// pour récuperer l'id dans l'url est la comparer avec l'id du .json pour l'afficher 
   const{id}= useParams();
   const housing= data.find((d)=>d.id===id)

  console.log(housing);

  
    return(

       <main>
           <section className="carrousel_section">
{/* condition pour être sur que la data est présente au chargement du composant */}
{Boolean(housing?.pictures)&&<Carousel slides={housing.pictures}/>}
           </section>
           <section className="housing_section">


           </section>
       </main>
    )
}