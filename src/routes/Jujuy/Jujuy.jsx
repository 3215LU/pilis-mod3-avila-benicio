import './Jujuy.css';
import React, { useEffect, useState } from "react";
import getClima from "../../service";
import getClim from "../../service";
import getCli from "../../service";
import getCl from "../../service";

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

const [dato, setDato]= useState({                
    lugar: '',  
    latitud: '',
    longitud: '',
    temperatura: '',
    vientos:'',
})

useEffect(()=>{
    getClima().then(dato =>{
        console.log(dato)
        setDato( prevState => ({
                
        lugar: dato.timezone,  
        latitud: dato.latitude,
        longitud: dato.longitude,
        temperatura: dato.current_weather.temperature,
        vientos: dato.current_weather.windspeed,
        }))
    })
},[])
/** */
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

/** */
/* */    

const [dato3, setDato3]= useState({                
    lugar: '',  
    latitud: '',
    longitud: '',
    temperatura: '',
    vientos:'',
})

useEffect(()=>{
    getCl().then(dato3 =>{
        console.log(dato3)
        setDato3( prevState => ({
                
        lugar: dato3.timezone,  
        latitud: dato3.latitude,
        longitud: dato3.longitude,
        temperatura: dato3.current_weather.temperature,
        vientos: dato3.current_weather.windspeed,
        }))
    })
},[])

return (
        <>
        <div>
        <h5 className='text-center '><b> {dato2.lugar}</b></h5>
    <div className="t card-group ">        
    
    <br/>
    <br/>
    <div className="fondot1">
            <h5>SAN SALVADOR DE JUJUY</h5>            
            <p className="card-text"><b>Latitud: </b>{data.latitud} º</p>
            <p className="card-text"><b>Longitud: </b>{data.longitud} º</p>        
            <p className="card-text"><b>Temperatura: </b>{data.temperatura} º C.</p>
            <p className="card-text"><b>Vientos: </b>{data.vientos} Km/h</p>    
            
        </div>
        <div className="fondot2">          
            <h5>RINCONADA</h5>            
            <p className="card-text"><b>Latitud: </b>{dato1.latitud} º</p>
            <p className="card-text"><b>Longitud: </b>{dato1.longitud} º</p>        
            <p className="card-text"><b>Temperatura: </b>{dato1.temperatura} º C.</p>
            <p className="card-text"><b>Vientos: </b>{dato1.vientos} Km/h</p>    
            
        </div>
        <div className=" fondot3">
            <h5>SUSQUES</h5>
            <p className="card-text"><b>Latitud: </b>{dato2.latitud} º</p>
            <p className="card-text"><b>Longitud: </b>{dato2.longitud} º</p>        
            <p className="card-text"><b>Temperatura: </b>{dato2.temperatura} º C.</p>
            <p className="card-text"><b>Vientos: </b>{dato2.vientos} Km/h</p>    
            
        </div>
        </div>
        </div>
        </>
      )
}
export default Jujuy
