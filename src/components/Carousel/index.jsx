import { useState } from "react"

import styled from "styled-components"
import ArrowLeft from"../../assets/images/arrow-left.png"
import ArrowRight from "../../assets/images/arrow-right.png"

export default function Carousel({slides}){
    const [current, setCurrent]= useState(0)
    const length=slides.length;

    const nextPicture= ()=>{
        setCurrent(current=== length-1?0:current+1)
    }
    const previousPicture= ()=>{
        setCurrent(current===0?length-1: current -1)
    }
const CarrouselContainer= styled.div`
display:flex;
position:relative;
`

const PreviousArrow= styled.img`
position:absolute;
top:40%;
left:1rem
`
const NextArrow= styled.img`
position:absolute;
top:40%;
right:2rem;

`
const CarrouselImage= styled.img`
width:1365px;
height:405px;
border-radius: 25px;
object-fit:cover;
`
return(

   <CarrouselContainer className="carrousel_container">
       <PreviousArrow src={ArrowLeft} alt="arrow-left" className="left-arrow"onClick={previousPicture} />
{slides.map((slide, index)=>
  index===current &&(<CarrouselImage src={slide} alt="img" key={index} />)
     
)}
      
  
      <NextArrow src={ArrowRight} alt="arrow-right" className="right-arrow" onClick={nextPicture}/>
   </CarrouselContainer>
)
   
}

