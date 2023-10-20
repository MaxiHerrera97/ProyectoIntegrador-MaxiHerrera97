import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import styles from "./Card.module.css";


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
      <div className={styles.card}>
         {
           isFav ? (
         <button onClick={handleFavorite} className={styles.cardButton}>💗</button>
           ) : (
         <button onClick={handleFavorite} className={styles.cardButton}>💛</button>
          )
        }

        {
         pathname !== '/favorites' 
         ? <button onClick={() => onClose(id)} className={styles.cardButton}>❌</button>
         : ''
        }

         <Link to={`/detail/${id}`} >
         <h2 className={styles.cardTitle}>{name}</h2>
         </Link>
         <p className={styles.cardDescription}>{gender}</p>
         <img src={image} alt={name} className={styles.cardImage}/> 
      </div>
   );
}
export default Card;