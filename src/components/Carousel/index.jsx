import { useState } from "react"
import styled from "styled-components"
import ArrowLeft from"../../assets/images/arrow-left.png"
import ArrowRight from "../../assets/images/arrow-right.png"


 //---- Carousel Style----//
const CarrouselContainer= styled.div`
display:flex;
position:relative;

@media(max-width: 375px){
    margin: 0 20px;
   
 }
`

const PreviousArrow= styled.img`
position:absolute;
top:40%;
left:1rem;
@media(max-width: 375px){
    width: 11px;
    height:19px;
    top:45%;
   
 }
`
const NextArrow= styled.img`
position:absolute;
top:40%;
right:2rem;
@media(max-width: 375px){
    width: 11px;
    height:19px;
     top:45%;
     right:1rem;
`
const CarrouselImage= styled.img`
width:1440px;
height:405px;
border-radius: 25px;
object-fit:cover;
@media(max-width: 375px){
    width: 335px;
    height:255px;
    border-radius: 10px;
 }
`


    //------Carousel function------//

export default function Carousel({slides}){

    // functions to navigate through different photos while clicking on previous/next buttons
    const [current, setCurrent]= useState(0)
    const length=slides.length;

    const nextPicture= ()=>{
        setCurrent(current=== length-1?0:current+1)
    }
    const previousPicture= ()=>{
        setCurrent(current===0?length-1: current -1)
    }

return(

   <CarrouselContainer className="carrousel_container">

       <PreviousArrow src={ArrowLeft} alt="arrow-left" className="left-arrow"onClick={previousPicture} />

 {/* map method to display every picture according his index */}
{slides.map((slide, index)=>
  index===current &&(<CarrouselImage src={slide} alt="img" key={index} />)
     
)}
      <NextArrow src={ArrowRight} alt="arrow-right" className="right-arrow" onClick={nextPicture}/>
   </CarrouselContainer>
)
   
}

