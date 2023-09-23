import './App.css'
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';


const EMAIL = 'hola@gmail.com';
const PASSWORD = '123asd';

const App=()=> {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState (false);
  const navigate = useNavigate ();

  const onSearch = (id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
      })
      .catch (() => {
       alert('¡No hay personajes con este ID!');
      
      })
  };

  const onClose = (id) => {
     const charactersFiltered = characters.filter((character)=>{
        return character.id !== id
     })
     setCharacters(charactersFiltered);
  }

  function login (userData) {
   if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home');
   };
  };
  
  useEffect(() => {
   !access && navigate('/');
}, [access]);

  return (
    <div className='App'>

         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
  )

}

export default App
