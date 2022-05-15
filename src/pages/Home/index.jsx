
import Cards from "../../components/Cards";
import BackgroundImage from "../../assets/images/background-image.png"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import React, {useEffect, useState} from "react"
import axios from "axios"


const Section= styled.section`
padding: 20px 0px;
`
const BackgroundContainer= styled.div `
display: flex;
justify-content: center;
align-items: center;
`
const BackImage= styled.img `
width: 1440px;
height: 225px;
border-radius: 25px;
object-fit: cover;

`

const BackgroundText= styled.p `
position: absolute;
font-size: 48px;
font-weight: 500;
color:${colors.white}
`

const GalleryContainer= styled.div`
border-radius: 25px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 3rem 3rem ;
gap:2rem;
background-color: ${colors.lightGrey};


`
export default function Home(){

    
    const [data, setData]= useState([])
   useEffect (()=>{
axios.get("./data.json")
.then((res)=> setData(res.data))

   },[])

// console.log(data);




return (
    <main>
    
  
       <Section className="section">
           <BackgroundContainer className="background_container">
               <BackImage src={BackgroundImage} alt="section background" className="bg_photo" />
               <BackgroundText>Chez vous, partout et ailleurs</BackgroundText>
           </BackgroundContainer>
       </Section>
    
       <Section className="gallery">
       
           <GalleryContainer className="gallery_container">
           
           {data.map((housing, id)=>(
                   
                   <Cards
                   key={`${housing.title}-${id} `}
                   id= {housing.id}
                   cover={housing.cover}
                   title={housing.title}
                   />
                 ))}
    
           </GalleryContainer>

       </Section>
     
    
    </main>
)

}