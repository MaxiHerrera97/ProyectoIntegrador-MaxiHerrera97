/* Style */
import './App.css'

/* Components to render */ 
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';

/* Hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

/* Dependencies */
import axios from 'axios';




const EMAIL = 'hola@gmail.com';
const PASSWORD = '123asd';

const App=()=> {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState (false);
  const navigate = useNavigate ();

  const onSearch = async (id) =>{
   try{
    const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      
     if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
   }catch (error){
      alert('¡No hay personajes con este ID!');
   }
      
  };

  const onClose = (id) => {
     const charactersFiltered = characters.filter((character)=>{
        return character.id !== id
     })
     setCharacters(charactersFiltered);
  }

  const login = async (userData)=> {
   try{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(`${URL}?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   }catch (error){
     throw Error (error.message);
   }
}
  
  useEffect(() => {
   !access && navigate('/');
}, [access]);

  return (
    <div className='App'>

         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
  )

}

export default App
