import './Card.css'

const Card = ({card}) => {
    return(
        <div>
            <button className='card'>
            <h1>Tarjeta</h1>
            <p>Ubicacion : {card.continente+'/'+card.pais+'/'+card.provincia}</p>
            <p>Latitud : {card.latitud}</p>
            <p>Longitud : {card.longitud}</p>
            <p>Temperatura : {card.temperatura}</p>
            <p>Velocidad Viento : {card.velocidadViento}</p>
            </button>
        </div>
    );
}

export default Card