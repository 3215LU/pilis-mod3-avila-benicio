import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from '../../context/CardsContext';
import { getCards } from '../../service';
import {RiMapPinLine} from "react-icons/ri";
import "./CardCreation.css"

const CardCreation = () => {
  const { cards, setCards } = useContext( CardsContext )
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors } ,
  } = useForm();

  const onSubmit = (data) => {

    console.log(data)

    getCards(data.latitud,data.longitud,data.continente,data.pais,data.provincia)
    .then( (data1) => {
      const newCard = {
        id : cards.length + 1,
        continente : data.continente,
        pais : data.pais,
        provincia : data.provincia,
        latitud : data1.latitude,
        longitud : data1.longitude,
        temperatura : data1.current_weather.temperature,
        velocidadViento : data1.current_weather.windspeed
      }
      console.log('aqui es el new : ' , newCard)
      console.log('one',cards)
      setCards([...cards,newCard])
      console.log('two',cards)
      navigate('/')
    }

    )
    .catch((err) => console.log(err));
  }

  return (
    <div className=''>
    <div className='fo contenedor text-white'>
    <span>Crear una nueva Tarjeta</span>
      <h1 className='logoUbicacion'><RiMapPinLine/></h1>            
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Ingresar Ubicación</span>
        <br/>
        <div className='mb-3'>
        <select className="form-select" required aria-label="select example" id="inputContinent"
        
          {
            ...register('continente',{
            required:'debe ingresar Latitud',})
          }>
          <option>America</option>
          <option>Africa</option>
        </select>
        <br/>       
          
        <select className="form-select" required aria-label="select example" id="inputCountry"
          {
            ...register('pais',{
            required:'debe ingresar pais',})
          }>
          <option>Argentina</option>
          <option>Uruguay</option>
        </select>
        <br />        
        <select className="form-select" required aria-label="select example" id="inputCity"
          {
            ...register('provincia',{
            required:'debe ingresar provincia',})
          }>
          <option>Jujuy</option>
          <option>Salta</option>
          <option>Tucuman</option>
        </select>
        <br />
        <input className="form-control"   placeholder='Ingresar la Latitud'
          {
            ...register('latitud',{
            required:'debe ingresar Latitud',})
          }
        />
        <br/>
        <input className="form-control"
          placeholder='Ingresar la Longitud'
          {
            ...register('longitud',{
            required:'debe ingresar Longitud',})
          }
        />
        <br/>
        </div>
          <div className="d-grid gap-2">
            <button className='btn-form btn btn-secondary'>
            Crear Tarjeta
            </button>
          </div>
      </form>
    </div>
    </div>
  );
};

export default CardCreation;
