import Button from "../button/Button";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch})=>{
    return (
        <nav>
            <Button link='/home' text='Home'/>
            <Button link='/about' text='About'/>
            <Button link='/favorites' text='Favorites'/>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;