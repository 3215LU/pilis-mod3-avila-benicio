import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from '../../context/CardsContext';
import { getCards } from '../../service';


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
    <div>
      <span>Crear una nueva Tarjeta</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Ingresar Ubicación</span>
        <select
          {
            ...register('continente',{
            required:'debe ingresar Latitud',})
          }>
          <option>America</option>
          <option>Africa</option>
        </select>
        <select
          {
            ...register('pais',{
            required:'debe ingresar pais',})
          }>
          <option>Argentina</option>
          <option>Uruguay</option>
        </select>
        <select
          {
            ...register('provincia',{
            required:'debe ingresar provincia',})
          }>
          <option>Jujuy</option>
          <option>Salta</option>
          <option>Tucuman</option>
        </select>
        <input
          placeholder='Ingresar la Latitud'
          {
            ...register('latitud',{
            required:'debe ingresar Latitud',})
          }
        />
        <input
          placeholder='Ingresar la Longitud'
          {
            ...register('longitud',{
            required:'debe ingresar Longitud',})
          }
        />
      <button >
        Crear Tarjeta
      </button>
      </form>
    </div>
  );
};

export default CardCreation;