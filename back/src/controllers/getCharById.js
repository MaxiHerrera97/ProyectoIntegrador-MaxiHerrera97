const axios = require ('axios');

const getCharById = (response, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
    
    const character = {
        id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        status: data.status
    }
    return response
           .writeHead(200, {'Content-type': 'application/json'})
           .end(JSON.stringify(character));
 })
    .catch((error)=>{
        return response
        .writeHead(500, {'Content-type': 'text/plain'})
        .end(error.message);
    })

}

module.exports = {
    getCharById
}