import RedStar from "../../assets/images/red-star.png"
import GreyStar from "../../assets/images/grey-star.png"
export default function Ratings({rating}){
    
const starsNumber= [1,2,3,4,5]


    return(

        <div>
            {starsNumber.map((star)=> rating>= star? (<img key={star.toString()} src={RedStar} alt="red-star-icon" />):(<img  key={star.toString()}src={GreyStar} alt="grey-star-icon" />))}
        </div>
    )
}