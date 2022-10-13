import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'
import { RiUser3Line, RiHandbagLine} from "react-icons/ri";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }
  return (
    <div className='sign-in-container'>
      <div className='loginFo'>
      <h3 className='login'>Login</h3>
      <span className='tn'>Ingresa con tu usuario y contraseña</span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <br/>        
        <h6><RiUser3Line /> Usuario</h6>
        
        <input
          className='form-control'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            })}        
         />
        
         <br/>
         
         <h6><RiHandbagLine />  Contraseña </h6>
         
        {/* <p>{errors.username?.message}</p> */}
        <input
          className='form-control'
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Debe ingresar su contraseña'
              }
            )
          }
        />
        {/* <p>{errors.password?.message}</p> */}
        <br/>
        <div className="d-grid gap-2">
        <button className='btn-form btn btn-secondary' type='submit'>Iniciar Sesión</button>
        </div>

      </form>
      </div>
    </div>
  )
}

export default Login