import './Jujuy.css';
import React, { useEffect, useState } from "react";
import getClima from "../../service";
import getClim from "../../service";
import getCli from "../../service";
import { FiTrash2 } from "react-icons/fi";
import {RiWindyLine} from "react-icons/ri";
import {RiTempHotLine} from "react-icons/ri";
import {RiMapPinLine} from "react-icons/ri";


const Jujuy = () => {
    const [data, setData]= useState({                
        lugar: '',  
        latitud: '',
        longitud: '',
        temperatura: '',
        vientos:'',
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
            }))
        })
    },[])
/* */    
const [dato1, setDato1]= useState({                
    lugar: '',  
    latitud: '',
    longitud: '',
    temperatura: '',
    vientos:'',
})

useEffect(()=>{
    getClim().then(dato1 =>{
        console.log(dato1)
        setDato1( prevState => ({
                
        lugar: dato1.timezone,  
        latitud: dato1.latitude,
        longitud: dato1.longitude,
        temperatura: dato1.current_weather.temperature,
        vientos: dato1.current_weather.windspeed,
        }))
    })
},[])
/** */
/* */    

const [dato2, setDato2]= useState({                
    lugar: '',  
    latitud: '',
    longitud: '',
    temperatura: '',
    vientos:'',
})

useEffect(()=>{
    getCli().then(dato2 =>{
        console.log(dato2)
        setDato2( prevState => ({
                
        lugar: dato2.timezone,  
        latitud: dato2.latitude,
        longitud: dato2.longitude,
        temperatura: dato2.current_weather.temperature,
        vientos: dato2.current_weather.windspeed,
        }))
    })
},[])

return (
        <>
        

        <div className="fondot1 tarjeta card">
        <div className="card-body">        
            <h1 className='text-center'><RiMapPinLine/></h1>
            <h2 id="provincia"className="card-title text-center"> {data.provincia}</h2>                        
            <br/>
            <p id="viento" className="card-text text-end"> <b><RiWindyLine/> Vientos : {data.velocidadViento} km/h</b></p>            
            <h2 id="temperatura" className="card-text"> <RiTempHotLine/> <b>{data.temperatura}</b> ºC.</h2>
            <p id="cordenada" className="card-text text-center">Latitud : <b>{data.latitud}º </b>- Longitud :<b> {data.longitud}º</b></p>                        
            <p className="card-text text-end">Continente : {data.continente}
            <br/>País : {data.pais}
            </p>
        </div>            </div>

        </>
      )
}
export default Jujuy
