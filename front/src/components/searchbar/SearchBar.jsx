import { useState } from "react";
import styles from "./SearchBar.module.css"

const SearchBar=({onSearch}) =>{
     
   const [id, setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value);
   }

   return (
      <div>
          <input 
          onChange={handleChange} 
          type='search' 
          value={id}
          />
         <button onClick={()=>onSearch(id)} className={`${styles.addButton}`}>Agregar</button> 
      </div>
   );
}
export default SearchBar