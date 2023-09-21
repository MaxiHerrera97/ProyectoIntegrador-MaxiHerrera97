import Card from "../card/Card";

const Cards = ({characters, onClose})=> {
   return (
   <div>
    {characters.map(({id, name, image}) => {
        return <Card
        key ={id}
        id={id}
        name = {name}
        image = {image}
        onClose={onClose}
        />
    })}

   </div>
   )
}
export default Cards;