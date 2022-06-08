import BackgroundImage from "../../assets/images/background-about.png"
import Collapse from "../../components/Collapse"
import styled from "styled-components";

//------About page Style------//

const AboutSection= styled.section`
padding: 20px 0px;
`
const Background= styled.img` 
width: 1440px;
 border-radius: 25px;
  margin-bottom: 45px;
object-fit: cover;

 @media(max-width: 375px){
   width: 335px;
   height: 223px;
   margin: 0px 20px;
}
`

const CollapseContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

//------About  page Function------//

export default function About(){
return (

    <main className="main">
         {/* Section Background */}
        <AboutSection className="about_section">
            <div className="background_container">
                <Background src={BackgroundImage} alt="background_cover" />
            </div>

        {/* Section Collapse Container */}
            <CollapseContainer className="collapse_container">
<Collapse title= "Fiabilité" className={"about_btn"}  text={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
<Collapse title="Respect" className={"about_btn"}  text={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
<Collapse title="Service" className={"about_btn"}   text={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
<Collapse title="Sécurité"className={"about_btn"}    text={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </CollapseContainer>
        </AboutSection>

    </main>
)
}