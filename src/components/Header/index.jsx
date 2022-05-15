import Logo from "../../assets/images/LOGO.png"
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors"


// Pour ajouter du style au header pour la nav et les liens
const NavContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;


`
const StyledLink= styled(Link)` 
padding: 10px 15px;
text-decoration: none;
font-size: 24px;
text-align: center;
color: ${colors.primary}

`
// fonction header
export default function Header(){
   return(
<NavContainer>
    <Link to="/">
    <img src={Logo} alt="logo Kasa" />
    </Link>
    <nav className="navbar">
        <StyledLink to= "/">Accueil</StyledLink>
        <StyledLink to= "/about">A propos</StyledLink>
    </nav>
</NavContainer>

   ) 
}