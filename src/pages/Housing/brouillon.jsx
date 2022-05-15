import Carousel from "../../components/Carousel"
import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


export default function Housing(){
  
const [data, setData]= useState(null)
const[error, setError]= useState("")
const[loading, isLoading]= useState(false)

   useEffect (()=>{
const getData= async()=>{
   try{
      axios.get("../data.json")
   .then((res)=> setData(res.data))}
}



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
              <div className="housing details">
              <div className="housing_infos">
                 <h1 className="housing_name" >{housing.title}</h1>
                 <h2 className="housing_location"> {housing.location} </h2>
                 <ul className="housing_tags">
                    {housing.tags.map((tag)=>(
                       <li className="tag" >{tag}</li>
                    ))}
                 </ul>
              </div>
            <div className="owner_description">
               <h2 className="housing_owner">{housing.host.name}</h2>
               <img src={housing.host.picture} alt="owner_picture" />
            </div>
              </div>      
<div className="housing_description"></div>
           </section>
       </main>
    )
}