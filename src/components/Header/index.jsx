import Logo from "../../assets/images/LOGO.png"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors"

//------ Header Style ------//
const NavContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 0px;

@media(max-width: 375px){

padding: 20px 20px;
 }
`
const ImageLogo= styled.img`
@media(max-width: 375px){
    width:145px;
    height:47px;
}
`

const NavBar= styled.ul`
width:220px;
display:flex;
justify-content: space-between;
list-style-type: none;
@media(max-width: 375px){
    width:130px;  
}
`
const StyledLink= styled(NavLink)` 

text-decoration: none;
font-size: 24px;
text-align: center;
color: ${colors.primary};

&.active{
    border-bottom: 1px solid ${colors.primary};
}
@media(max-width: 375px){
    font-size: 12px;
}


`
//------ Header Function ------//
export default function Header(){
   return(
<NavContainer className="navigation">
    <NavLink to="/">
    <ImageLogo src={Logo} alt="logo Kasa" />
    </NavLink>

 {/* NavBar links */}
    <NavBar className="navbar">
        <StyledLink to= "/"><li>Accueil</li></StyledLink>
        <StyledLink to= "/about"   ><li>A propos</li></StyledLink>
    </NavBar>
</NavContainer>

   ) 
}