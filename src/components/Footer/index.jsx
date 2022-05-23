import SmallLogo from "../../assets/images/Small-logo.png"
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// footer Style

const Foot= styled.footer `

padding: 0 ;
`
const FooterContainer= styled.div`
padding: 30px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
background-color: ${colors.black}
`
const FooterLogo= styled.img`
width: 122px;
height: 40px;
margin: 10px;

`
const Rights= styled.p `
margin: 10px
font-size: 24px;
color: ${colors.white};

@media(max-width: 375px){
    font-size: 12px;
}
`

// Footer Function
export default function Footer(){

    return(

        <Foot className="footer-section">
<FooterContainer>
<Link to="/">
    <FooterLogo src={SmallLogo} alt="logo Kasa blanc" />
    </Link>

<Rights>2020 Kasa. All rights reserved.</Rights>
</FooterContainer>
        </Foot>
    )
}