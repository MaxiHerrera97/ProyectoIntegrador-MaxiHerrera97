import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";



const Card =({ id, name, image, onClose, gender}) => {

   const dispatch = useDispatch();
   const myFavorites = useSelector((state)=>state.myFavorites);
   const {pathname} = useLocation();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      }else{
         setIsFav(true);
         dispatch(addFav({id, name, image, onClose, gender}));
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
           isFav ? (
         <button onClick={handleFavorite}>💗</button>
           ) : (
         <button onClick={handleFavorite}>💛</button>
          )
        }

        {
         pathname !== '/favorites' 
         ? <button onClick={() => onClose(id)}>X</button>
         : ''
        }

         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <p>{gender}</p>
         <img src={image} alt={name} /> 
      </div>
   );
}
export default Card;