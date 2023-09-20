
const Card =({ id, name, status, origin, species, gender, image, onClose}) => {
   return (
      <div>
          <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}
export default Card;