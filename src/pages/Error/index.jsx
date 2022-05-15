import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors"


export default function Error(){

    const Section= styled.section`
    margin-top:2rem;
    `
    const ErrorContainer= styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
    const ErrorNumber=styled.p`
    font-size: 288px;
    color: ${colors.primary}

    `
const ErrorText= styled.p`
font-size: 36px;
font-weight:500;
margin-top:1rem;
color: ${colors.primary}
`

const BackToHomepage= styled(Link)`
margin-top: 9rem;
margin-bottom: 3rem;
color: ${colors.primary}
`
const LinkText= styled.p`
font-size: 18px;
font:weight:500:
`

    return(
<main className="main">
        <Section className="section">
            <ErrorContainer className="error_container">
<ErrorNumber className="error_number">404</ErrorNumber>
<ErrorText className="error_text">OUPS! La page que vous demandez n'existe pas</ErrorText>
           
           
<BackToHomepage to="/"> 
            <LinkText className="back_to_homepage">Retour vers la page d'accueil</LinkText>
            </BackToHomepage>
            </ErrorContainer >
           
           
        </Section>
        </main>
    )
}