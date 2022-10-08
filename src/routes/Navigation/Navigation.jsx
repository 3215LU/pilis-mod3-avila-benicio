import './Navigation.css'
import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

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
      <div className='navigation bg-secondary'>
        <div className='nav-links-container'>
          { currentUser ? (
            <Link className='nav-link ' to='/card/create'>
              Nueva Tarjeta
            </Link>
            ):(
              <span className='nav-link'>Nueva Tarjeta</span>
            )     
          }

          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );};
  
export default Navigation;