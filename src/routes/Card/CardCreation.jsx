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
      <select className="form-select" required aria-label="select example" id="inputContinent"
      
        {
          ...register('continente',{
          required:'debe ingresar Latitud',})
        }>
        <option>America</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>Europe</option>
        <option >Oceanic</option>          
        
      </select>
      <br/>       
        
      <select className="form-select" required aria-label="select example" id="inputCountry"
      {
        ...register('pais',{
        required:'debe ingresar provincia',})
      }>
                      <optgroup label="Europe">
              <option selected="" >Berlin</option>
              <option>Paris</option>
              <option>London</option>
              <option>Madrid</option>
              <option>Vienna</option>
              <option >Brussels</option>
              <option >Moscow</option>
              <option >Sofia</option>
              <option >Copenhagen</option>
              <option >Athens</option>
              <option >Budapest</option>
              <option >Reykjavik</option>
              <option >Dublin</option>
              <option >Rome</option>
              <option >Amsterdam</option>
              <option >Oslo</option>
              <option >Warsaw</option>
              <option >Lisabon</option>
              <option >Bern</option>
              <option >Kiev</option>
              <option >Stockholm</option>
            </optgroup>
            <optgroup label="America">
              <option >Washington</option>
              <option >New York</option>
              <option >Sacramento</option>
              <option >Los Angeles</option>
              <option >Chicago</option>
              <option >Houston</option>
              <option >Phoenix</option>
              <option >Philadelphia</option>
              <option >Vancouver</option>
              <option >Ottawa</option>
              <option >Argentina</option>
              <option >Brasilia</option>
              <option >Santiago</option>
              <option >Bogota</option>
              <option >Ciudad de Mexico</option>
              <option >Asuncion</option>
              <option >Lima</option>
              <option >Montevideo</option>
            </optgroup>
            <optgroup label="Asia">
              <option >Kabul</option>
              <option >Dhaka</option>
              <option >Peking</option>
              <option >Tiflis</option>
              <option >New Delhi</option>
              <option >Jakarta</option>
              <option >Teheran</option>
              <option >Baghdad</option>
              <option >Jerusalem</option>
              <option >Tokyo</option>
              <option >Kuala Lumpur</option>
              <option >Ulan Bator</option>
              <option >Kathmandu</option>
              <option >Singapore</option>
              <option >Seoul</option>
              <option >Ankara</option>
              <option >Abu Dhabi</option>
            </optgroup>
            <optgroup label="Africa">
              <option >Algiers</option>
              <option >Luanda</option>
              <option >Cairo</option>
              <option >Nairobi</option>
              <option >Tripoli</option>
              <option >Windhoek</option>
              <option >Pretoria</option>
            </optgroup>
            <optgroup label="Oceanic">
              <option >Canberra</option>
              <option >Wellington</option>
            </optgroup>

      </select>
      <br />        

      <select className="form-select" required aria-label="select example" id="inputCity"
      
        {
          ...register('provincia',{
          required:'debe ingresar pais',})
        }>
        <option>Beni</option>
        <option>Canberra</option>
        <option>Jujuy</option>
        <option>Salta</option>
        <option>Tucuman</option>
        <option>Buenos Aires</option>
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
/*
return (
  <div className=''>
  <div className='fo contenedor text-white'>
  <span>Crear una nueva Tarjeta</span>
    <h1 className='logoUbicacion'><RiMapPinLine/></h1>            
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>Ingresar Ubicación</span>
      <br/>
      <div className='mb-3'>
      
      
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

export default CardCreation;*/