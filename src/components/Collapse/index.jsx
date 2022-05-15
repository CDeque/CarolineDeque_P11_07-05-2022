import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors"
import ArrowDown from  "../../assets/images/arrow-down.png"
import ArrowUp from "../../assets/images/arrow-up.png"


const CollapseBtn= styled.button`
width:1203px;
height: 47px;
border:none;
margin-bottom:30px;
padding-left:18px;
border-radius:5px;
font-size: 24px;
text-align: left;
background-color: ${colors.primary};
color:${colors.white}
`

const Arrow= styled.img`
float: right;
padding-right: 18px;
padding-top: 8px;
`

const ArrowExpanded= styled.img`
float: right;
padding-right: 18px;
padding-top: 8px;
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
color:${colors.primary}

`
export default function  Collapse({title, text}){
const [isOpen, setIsOpen]= useState(false)

    return(
<div className="collapse">
        <CollapseBtn className="collapse_btn" onClick={()=>setIsOpen(!isOpen)} >{title} {isOpen ? (<ArrowExpanded src={ArrowUp} alt="arrow-up" className="arrow"   />): (<Arrow src={ArrowDown} alt="arrow-down" className="arrow"   />)} </CollapseBtn>
        {isOpen && <CollapseText className="collapse_text">{text}</CollapseText>}
        
        </div>
    )
}