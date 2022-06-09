import { FaRegStar,  FaStar} from "react-icons/fa";
import s from "../styles/StarRating.module.css";

const StarRating = ({review}) => {
    return(
        <div>
        {[...Array(5)].map((star, index) => {
            return index < review.rating ? <FaStar className={s.faStar}/> : <FaRegStar className={s.faRegStar}/> ;
          })}
        </div>
    )
}

export default StarRating;