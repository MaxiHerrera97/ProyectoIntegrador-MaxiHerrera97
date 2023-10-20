import { Link } from "react-router-dom"
import style from "./Button.module.css"
const Button = ({link, text, isRickMorty})=>{
  const buttonClasses = isRickMorty ? `${style.buttonContainer} ${style.rickMortyButton}` : style.buttonContainer;
    return (
      
    <Link to={link} >
      <button className={buttonClasses}>
         {text}
      </button>
    </Link>
    
    )
}

export default Button;