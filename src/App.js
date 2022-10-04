import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation'
import Home from './routes/Home/Home'
import Login from './routes/Login/Login';
import CardCreation from './routes/Card/CardCreation';

function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='card/create' element={<CardCreation/>}/>
          </Routes>
    </div>
  );
}

export default App
