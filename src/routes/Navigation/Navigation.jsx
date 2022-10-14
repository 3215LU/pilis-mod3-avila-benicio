import './Navigation.css'
import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import {GiAbstract097} from "react-icons/gi";
import {VscSymbolEnum} from "react-icons/vsc";
import {VscSymbolConstant} from "react-icons/vsc";
import {AiOutlineLogin} from "react-icons/ai";
import {BiLogOutCircle} from "react-icons/bi";


const Navigation = () => {  
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])
  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
    <nav className=" navbar navbar-expand-lg text-white bg-black">
  <div className="container-fluid">
  <a className="navbar-brand text-white logo" href="#"><GiAbstract097/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
      <li className="nav-item">                  
          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              <BiLogOutCircle/> Cerrar Sesión
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
               <AiOutlineLogin/> Iniciar Sesión
            </Link>
          )}
        </li>
        <li className="nav-item">
        { currentUser ? (
            <Link className='nav-link' to='/card/create'>
               Nueva Tarjeta <b><VscSymbolConstant/></b>
            </Link>
            
            ):(
              <span className='nav-link'>Nueva Tarjeta  <b><VscSymbolConstant/></b></span>
            )}          
        </li>
        <li className="nav-item" >
            <Link className='nav-link' to='/jujuy'>
               Clima Jujuy <b><VscSymbolEnum/></b>
            </Link>                    
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />

</>
  );};
  
export default Navigation;