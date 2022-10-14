import './Jujuy.css';
import React, { useEffect, useState } from "react";
import getClima from "../../service";
import getClim from "../../service";
import getCli from "../../service";
import { FiTrash2 } from "react-icons/fi";
import {RiWindyLine} from "react-icons/ri";
import {WiThermometer} from "react-icons/wi";
import {RiMapPinLine} from "react-icons/ri";


const Jujuy = () => {
    const [data, setData]= useState({                
        lugar: '',  
        latitud: '',
        longitud: '',
        temperatura: '',
        vientos:'',
        ubicacion:'',
        hora:''
    })

    useEffect(()=>{
        getClima().then(data =>{
            console.log(data)
            setData( prevState => ({                    
            lugar: data.timezone,  
            latitud: data.latitude,
            longitud: data.longitude,
            temperatura: data.current_weather.temperature,
            vientos: data.current_weather.windspeed,
            ubicacion:data.timezone,
            
            }))
        })
    },[])
return (
        <>
        <div className="fondot1 tarjeta card">
        <div className="card-body">        
            <h1 className='icono text-center'><RiMapPinLine/></h1>
            <h4 id="provincia"className="card-title text-center">{data.ubicacion}</h4>                        
            <br/>
            <p id="viento" className="card-text text-end"> <b><RiWindyLine/> Vientos : {data.vientos} km/h</b></p>            
            <h2 id="temperatura" className="card-text text-white"> <WiThermometer/> <b>{data.temperatura}</b> ºC.</h2>
            <p id="cordenada" className="card-text text-center">Latitud : <b>{data.latitud}º </b>- Longitud :<b> {data.longitud}º</b></p>                        
            
            
        </div>            </div>

        </>
      )
}
export default Jujuy
