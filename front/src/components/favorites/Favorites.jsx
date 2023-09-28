import {  useSelector } from "react-redux/es/hooks/useSelector";
import Cards from "../cards/Cards";

const Favorites = ()=>{
 const myFavorites = useSelector((state)=>state.myFavorites)



    return (
        <div>
          <Cards characters={myFavorites}/>
        </div>
    )
}
export default Favorites;