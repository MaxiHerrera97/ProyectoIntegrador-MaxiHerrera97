import {  useSelector, useDispatch } from "react-redux"
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";
import style from "./Favorites.module.css"


const Favorites = ()=>{
  const dispatch = useDispatch();
  const {myFavorites} = useSelector((state)=>state)
  const [aux, setAux] = useState (false);



 const handleOrder = (event)=>{
   dispatch(orderCards(event.target.value));
   setAux(true);
 };

 const handleFilter = (event)=>{
  dispatch(filterCards(event.target.value))
 };


    return (
        <div>
          <Cards characters={myFavorites}/>
        <div className={style.selectContainer}>
          <select className={style.select} onChange={handleOrder}>
            <option value='A'>Ascendente</option>
            <option value='D'>Descendente</option>
          </select>
          <select className={style.select} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderles">Genderles</option>
            <option value="unknown">unknown</option>
          </select>
        </div>  
        </div>
    )
}
export default Favorites;