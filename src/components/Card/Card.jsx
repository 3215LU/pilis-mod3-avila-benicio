import './Card.css'
import { FiTrash2 } from "react-icons/fi";
import {RiWindyLine} from "react-icons/ri";
import {RiTempHotLine} from "react-icons/ri";
import {RiMapPinLine} from "react-icons/ri";


const Card = ({card, eliminarCard }) => {
    return(    
        <div className='conteiner'>                    
        <div className="tarjeta card">
        <div className="card-body">
        <button        
            className='text-end eliminar'
            onClick={
                ()=>{
                    eliminarCard(card.id)
                }}             
            ><FiTrash2/>
            </button>
            <h1 className='text-center'><RiMapPinLine/></h1>
            <h2 id="provincia"className="card-title text-center"> {card.provincia}</h2>                        
            <br/>
            <p id="viento" className="card-text text-end"> <b><RiWindyLine/> Vientos : {card.velocidadViento} km/h</b></p>            
            <h2 id="temperatura" className="card-text"> <RiTempHotLine/> <b>{card.temperatura}</b> ºC.</h2>
            <p id="cordenada" className="card-text text-center">Latitud : <b>{card.latitud}º </b>- Longitud :<b> {card.longitud}º</b></p>                        
            <p className="card-text text-end">Continente : {card.continente}
            <br/>País : {card.pais}
            </p>
        </div>    
        </div>
        </div>

    );
}

export default Card
