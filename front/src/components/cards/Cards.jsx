import Card from "../card/Card";
import style from "./Cards.module.css"


const Cards = ({characters, onClose})=> {
   return (
   <div className={style.cardsContainer}>
    {characters.map(({id, name, image, gender}) => {
        return <Card
        key= {id}
        id= {id}
        name= {name}
        image= {image}
        onClose= {onClose}
        gender= {gender}
        />
    })}

   </div>
   )
}
export default Cards;