import { useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from '../../context/CardsContext';
import { getCards } from '../../service';
import {RiMapPinLine} from "react-icons/ri";
import "./CardCreation.css"
import { CONTINENTE, PAIS_O_CIUDAD, PROVINCIAS } from './list_of_database_time_zone';


const CardCreation = () => {
  const { cards, setCards } = useContext( CardsContext )
  const [ region, setRegion ] = useState(0)
  const [ provincia, setProvincia] = useState(0)
  const navigate = useNavigate()

  const handleCargarContinente = (e) => {setRegion(CONTINENTE.indexOf(e.target.value)) ;if(e.target.value !== "America") setProvincia(0)};

  const handleCargarPaisArgentina = (e) => {if(e.target.value === "Argentina") {setProvincia(1)} else {setProvincia(0)} }

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

      setCards([...cards,newCard])
      navigate('/')      
    } )
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

        {/*  SELECCIONA EL CONTINENTE  */}
        <select className="form-select" required aria-label="select example" id="inputContinent" onClick={handleCargarContinente }
        
          {
            ...register('continente',{
            required:'debe ingresar Latitud',})
          }>

          {CONTINENTE.map((continente,i) => <option key={"continente"+i} onClick={() => console.log("contienentes") } >{continente}</option> ) }
        </select>
        <br/>   

        {/*  SELECCIONA EL PAIS O LA CIUDAD  */}
        <select className="form-select" required aria-label="select example" id="inputCountry" onClick={handleCargarPaisArgentina}
        
          {
            ...register('pais',{
            required:'debe ingresar pais',})
          }>
            
          {PAIS_O_CIUDAD[region].map( (pais_o_ciudad,i) => <option key={"pais_o_ciudad"+i} >{pais_o_ciudad}</option>)} 
          
        </select>
        <br />

        {/*  SELECCIONA LA PROVINCIA EN CASO DE HABER SELECCIONADO EL PAIS ARGENTINA  */}
        <select className="form-select" required aria-label="select example" id="inputCity"
          {
            ...register('provincia',{
            required:'debe ingresar provincia',})
          }>
            {PROVINCIAS[provincia].map( (provincia,i) => <option key={"provincia"+i}>{provincia}</option>)}
        </select>
        <br />

        {/*  SELECCIONA LA LATITUD  */}
        <input className="form-control"   placeholder='Ingresar la Latitud'
          {
            ...register('latitud',{
            required:'debe ingresar Latitud',})
          }
        />
        <br/>
        
        {/*  SELECCIONA LA LONGITUD  */}
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

