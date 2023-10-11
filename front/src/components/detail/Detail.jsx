import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const Detail = () =>{
    const params = useParams();
     
    

    const [character, setCharacter] = React.useState([]);
     React.useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${params?.id}`)
        .then(({data})=>{
            if(data.name){
                setCharacter(data);
            }else{
                alert('No hay personajes con ese ID')
            }

        })
         .catch(()=>{
            console.log('Se rompio');
         })

        return setCharacter({});
     },[params?.id])

    return (
        <div>
          <h2>Name: {character?.name}</h2>
          <p>Status: {character?.status}</p>
          <p>Especie: {character?.species}</p>
          <p>Gender: {character?.gender}</p>
          <p>Origin: {character?.origin?.name}</p>
          <img src={character?.image} alt={character?.name}/>
        </div>
    )
}
export default Detail;