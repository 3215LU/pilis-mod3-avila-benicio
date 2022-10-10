import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

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
      <h3>Login</h3>
      <span>Ingresa con tu usuario y contraseña</span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-form'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            }
          )
        }
         />
         <br/>
         <br/>
        {/* <p>{errors.username?.message}</p> */}
        <input
          className='input-form'
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
        <br/>
         <button className='btn-form btm btn-secondary' type='submit'>Iniciar Sesión</button>
      </form>
      </div>
    </div>
  )
}

export default Login