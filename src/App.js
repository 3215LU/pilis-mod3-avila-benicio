import './App.css'
import { useContext, useEffect } from 'react';
import { getCards } from './service';
import { CardsContext} from './context/CardsContext'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation'
import Home from './routes/Home/Home'
import Login from './routes/Login/Login';
import CardCreation from './routes/Card/CardCreation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import * as myReactDOM from "react-dom/client";
import Footer from "./routes/Footer/Footer"

import Jujuy from './routes/Jujuy/Jujuy';
function App() {
  const { setCards } = useContext(CardsContext)

  // el profe no pondria la llamada a la api en el useEffect
  // useEffect(()=> { 
  //   getCards()
  //   .then((data) => {
  //     setCards(data);
  //   })
  //   .catch((err) => console.log(err));
  // }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>          
          <Route path='card/create' element={<CardCreation/>}/>
          <Route path='jujuy' element={<Jujuy/>}/>
          </Route>
      </Routes>
      
    </div>
    
    
    

  );
}

export default App
