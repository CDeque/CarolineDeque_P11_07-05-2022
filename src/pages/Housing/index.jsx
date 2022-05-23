 import Carousel from "../../components/Carousel"
import { useParams } from "react-router-dom"
import useAxios from "../../utils/hooks"
import Ratings from "../../components/Ratings"
import Collapse from "../../components/Collapse"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const DetailsContainer= styled.div`

display:flex;
justify-content: space-between;

   @media(max-width: 375px){
   display:flex;
   flex-direction:column;
   margin: 0 20px;
}
`

const HousingInfos= styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
color: ${colors.primary};
@media(max-width: 375px){
 padding-bottom: 10px;
}

`
const HousingTitle= styled.h1`
font-size:36px;
font-weight:500;
margin-bottom:10px;

   @media(max-width: 375px){
   font-size:18px;
}
`
const HousingLocation= styled.h2`
font-size:18px;
font-weight:500;

@media(max-width: 375px){
   font-size:14px;
}
`
const HousingTagContainer= styled.ul`
display:flex;

`
const HousingTag= styled.li`
width:115px;
list-style-type: none;
font-size:14px;
margin: 20px 10px 20px 0;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.primary};
border-radius:10px;
color:${colors.white};

@media(max-width: 375px){
   width:85px;
   font-size:10px;
}
`
const OwnerInfos= styled.div`
display:flex;
flex-direction: column;
padding: 20px 0px;
@media(max-width: 375px){
   
   flex-direction: row-reverse;
   justify-content: space-between;
   padding-top: 10px

}
`
const OwnerContainer=styled.div`
display:flex;
margin-bottom: 1rem;

`
const HousingOwner= styled.h2`
font-size: 18px;
font-weight: 500;
width:80px;
padding-top:12px;
text-align: right;
color:${colors.primary};


@media(max-width: 375px){
   font-size:12px;
   padding-top:2px;
}
`
const OwnerPicture= styled.img`
border-radius:50%;
width:64px;
height:64px;
margin-left: 10px;
@media(max-width: 375px){
   width:32px;
height:32px;
}
`
const CollapsesContainer= styled.div`
display:flex;
justify-content:space-between;
@media(max-width: 375px){
   display:flex;
   flex-direction:column;
}
`
const EquipmentList= styled.li`
list-style-type: none;
`

export default function Housing(){
  // on récupère la data
   const data= useAxios()
   //console.log(data);
  
// pour récupérer l'id dans l'url est la comparer avec l'id du .json pour l'afficher 
   const{id}= useParams();
   const housing= data.find((d)=>d.id===id)


    return  (

       <main>
           <section className="carrousel_section">
{/* condition pour être sur que la data est présente au chargement du composant */}
{(housing?.pictures)&&<Carousel slides={housing.pictures}/>}
           </section>
           <section className="housing_section">
     <DetailsContainer className="housing_details">
              < HousingInfos className="housing_infos">
              {(housing?.title)&&<HousingTitle className="housing_name" >{housing.title}</HousingTitle>} 
              {(housing?.location)&&<HousingLocation className="housing_location"> {housing.location} </HousingLocation>}
                 {(housing?.tags)&&<HousingTagContainer className="housing_tags">
                    {housing.tags.map((tag, index)=>(
                       <HousingTag className="tag" key={index}>{tag}</HousingTag>
                    ))}
                 </HousingTagContainer>}
              </ HousingInfos>
            <OwnerInfos className="owner_description">
               <OwnerContainer>
              {(housing?.host.name)&&<HousingOwner className="housing_owner">{housing.host.name}</HousingOwner>}
            {(housing?.host.picture)&&<OwnerPicture src={housing.host.picture} alt="owner_picture" className="owner_portrait" />}
            </OwnerContainer>
          {(housing?.rating)&&<Ratings  rating={housing.rating} />}
            </OwnerInfos>
              </DetailsContainer>      
<CollapsesContainer className="housing_description">
<Collapse title= "Description"className="housing_btn"text={housing?.description}  />
<Collapse   title= "Equipements" className="housing_btn" type="housing" text={(housing?.equipments)&& <ul>
   {housing?.equipments.map((equipment, index)=>(
  
  <EquipmentList className="item" key={index}>{equipment}</EquipmentList>

))}
</ul>}/>
</CollapsesContainer>

           </section>
       </main>
    )
}

