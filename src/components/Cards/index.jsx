import { Link } from "react-router-dom"
import styled from "styled-components";
import colors from "../../utils/style/colors";



//---- Card style ----//
 const CardContainer= styled(Link)`
 
 text-decoration: none;
 `

  const Card= styled.div`
position:relative;
  width:340px;
  height: 340px;
  border-radius: 25px;

  @media(max-width: 375px){
    position:relative;
    width:335px;
    height: 255px;
    border-radius: 10px;
}
  
  `
  const CardImage= styled.img`
  object-fit: cover;
  width:340px;
  height: 340px;
  border-radius:25px;

  @media(max-width: 375px){
    
    width:335px;
    height: 255px;
    border-radius: 10px;
}
  `
 const CardTitle= styled.p`
 font-size:18px;
 font-weight:500;
 position: absolute;
 bottom:1rem;
 left: 1rem;
 color: ${colors.white};


 `

//---- Creation gallery cards ----//
 function Cards(data){
//console.log(data);
 return(
    <CardContainer to={`/housing/` + data.id} >
<Card className="housing_card_container">
<CardImage src={data.cover} alt="cover_picture" />
<CardTitle>{data.title}</CardTitle>
</Card>

    </CardContainer>
 )

}




export default Cards