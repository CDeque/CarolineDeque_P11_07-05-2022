
import Cards from "../../components/Cards";
import BackgroundImage from "../../assets/images/background-image.png"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import useAxios from "../../utils/hooks";

//------ Homepage Style ------//
const Section= styled.section`
padding: 20px 0px;
@media(max-width: 375px){
   padding:5px 0px;
}
`
const BackgroundContainer= styled.div `
display: flex;
justify-content: center;
align-items: center;

`
const BackImage= styled.img `
width: 1440px;
height: 225px;
border-radius: 25px;
object-fit: cover;

@media(max-width: 375px){
    width:335px;
    height:111px;
    border-radius: 10px;
}

`

const BackgroundText= styled.p `
position: absolute;
font-size: 48px;
font-weight: 500;
color:${colors.white};

@media(max-width: 375px){
    width: 217px;
    font-size: 24px;
    left: 10%;
}
`

const GalleryContainer= styled.div`
border-radius: 25px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 3rem 3rem ;
gap:2rem;
background-color: ${colors.lightGrey};

@media(max-width: 375px){
   flex-direction: column;
   padding: 20px 20px ;
   background-color: ${colors.white};
}
`

//------ Function Homepage ------//
export default function Home(){

     // const to get the data from the useAxios Hook //
    const data= useAxios()

 //console.log(data);

return (
    <main>
    
   {/* Section Background */}
       <Section className="section">
           <BackgroundContainer className="background_container">
               <BackImage src={BackgroundImage} alt="section background" className="bg_photo" />
               <BackgroundText>Chez vous, partout et ailleurs</BackgroundText>
           </BackgroundContainer>
       </Section>
    
     {/* Section gallery showing the different cards of housing */}
       <Section className="gallery">
       
           <GalleryContainer className="gallery_container">
            {/* method map  to display every cards */}
           {data.map((housing, id)=>(
                   
                   <Cards
                   key={`${housing.title}-${id} `}
                   id= {housing.id}
                   cover={housing.cover}
                   title={housing.title}
                   />
                 ))}
    
           </GalleryContainer>

       </Section>
     
    
    </main>
)

}