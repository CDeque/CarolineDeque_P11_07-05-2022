import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors"
import ArrowDown from  "../../assets/images/arrow-down.png"
import ArrowUp from "../../assets/images/arrow-up.png"

  //------ Collapse Style------//

 const CollapseBtn= styled.button`

 //to style buttons on about Page//
&.about_btn{
    width: 1203px;
    @media(max-width: 375px){
        width: 335px;
        height: 30px;
        margin: 10px 20px;
        font-size: 13px;
     }
}
//to style buttons on housing page//

&.housing_btn {
    width:650px;

    & +.collapse_text{
        width:650px;
    }
    @media(max-width: 375px){
        
        width: 335px;
        height: 30px;
        margin: 10px 20px;
        font-size: 13px;

        & +.collapse_text{
            width:335px;
            margin-left: 20px;
        }
     }  
}
height: 47px;
border:none;
margin-bottom:30px;
padding-left:18px;
border-radius:5px;
font-size: 24px;
text-align: left;
background-color: ${colors.primary};
color:${colors.white};
`

const Arrow= styled.img`
float: right;
margin-right: 20px;
margin-top: 8px;

@media(max-width: 375px){
    margin-top: 4px;
    height: 9px;
   
 }
`

const ArrowExpanded= styled.img`
float: right;
margin-right: 20px;
margin-top: 8px;

@media(max-width: 375px){
    margin-top: 4px;
    height: 9px;
   
 }
`
const CollapseText= styled.div`

max-width:1203px;
border-radius: 0 0 5px  5px;
font-size: 24px;
font-weight:400;
padding: 27px 18px;
margin-top:-35px;
margin-bottom: 30px;
background-color: ${colors.lightGrey};
color:${colors.primary};
@media(max-width: 375px){
   width: 335px;
   font-size: 12px;
   margin-left: 20px;
   
 }
`

//------Collapse Function------//

export default function  Collapse({title, text, className}){

const [isOpen, setIsOpen]= useState(false)

    return(
<div className="collapse">
    
     {/* condition to check if the collapse is open or not and display the text container or not */}

        <CollapseBtn className={className} onClick={()=>setIsOpen(!isOpen)} >{title} {isOpen ? (<ArrowExpanded src={ArrowUp} alt="arrow-up" className="arrow"   />): (<Arrow src={ArrowDown} alt="arrow-down" className="arrow"   />)} </CollapseBtn>
        {isOpen && <CollapseText className="collapse_text">{text }</CollapseText>}
        
        </div>
    )
}