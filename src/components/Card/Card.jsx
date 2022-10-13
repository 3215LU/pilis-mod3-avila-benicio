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
            <h1 className='text-center'><RiMapPinLine/></h1>
            <h5 id="provincia"className="card-title text-center"> {card.provincia}</h5>            
            <p id="continente"className="card-text">Continente : {card.continente}</p>
            <p id="pais"className="card-text">País : {card.pais}</p>
            <p id="cordenada" className="card-text">Latitud : {card.latitud}º - Longitud : {card.longitud}º</p>            
            <h2 id="temperatura" className="card-text"> <RiTempHotLine/>{card.temperatura} ºC.</h2>
            <p id="viento" className="card-text"> <b><RiWindyLine/> Vientos : {card.velocidadViento} km/h</b></p>            
            <button        
            className='text-end eliminar'
            onClick={
                ()=>{
                    eliminarCard(card.id)
                }
                } 
            
            ><FiTrash2/>
            </button>
        </div>    
        </div>
        </div>

    );
}

export default Card
