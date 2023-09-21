import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch})=>{
    return (
        <nav>
            <Link to='/about'>
                <button>
                About
               </button>
            </Link>
            
                <Link to='/home'>
                    <button>
                    Home
                    </button>
                </Link>
            
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;