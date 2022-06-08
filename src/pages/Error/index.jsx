import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors"

//------ Error Page Style ------//
const Section= styled.section`
margin-top:2rem;
@media(max-width: 375px){
    margin-bottom:3.4rem;
 }
`
const ErrorContainer= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const ErrorNumber=styled.p`
font-size: 288px;
color: ${colors.primary};
@media(max-width: 375px){
    font-size: 96px;
 }
`
const ErrorText= styled.p`
font-size: 36px;
font-weight:500;
margin-top:1rem;
color: ${colors.primary};
@media(max-width: 375px){
    width:260px;
    text-align:center;
    margin: 0 20px;
    font-size: 18px;
 }
`

const BackToHomepage= styled(Link)`
margin-top: 9rem;
margin-bottom: 3rem;
color: ${colors.primary}
`
const LinkText= styled.p`
font-size: 18px;
font:weight:500;
@media(max-width: 375px){
    font-size: 14px;
 }
`
//------ Error page Function ------//

export default function Error(){


    return(
<main className="main">

     {/* Section Error Message */}
        <Section className="section">
            <ErrorContainer className="error_container">
<ErrorNumber className="error_number">404</ErrorNumber>
<ErrorText className="error_text">OUPS! La page que vous demandez n'existe pas.</ErrorText>
           
          {/* link back to homepage */}  
<BackToHomepage to="/"> 
            <LinkText className="back_to_homepage">Retour vers la page d'accueil</LinkText>
            </BackToHomepage>
            </ErrorContainer >
           
           
        </Section>
        </main>
    )
}