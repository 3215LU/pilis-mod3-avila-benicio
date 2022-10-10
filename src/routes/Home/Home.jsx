import React, { useEffect, useState } from "react"
import getClima from "./../../service"

const Home = () => {
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
    

return (
        <>
        <h1>Este es el Home</h1>            
        <h3> Lugar: {data.lugar}</h3>
        <h5><b>Latitud: </b>{data.latitud} º</h5>
        <h5><b>Longitud: </b>{data.longitud} º</h5>
        <img src="" alt=""/>
        <h5><b>Temperatura: </b>{data.temperatura} º C.</h5>
        <h5><b>Vientos: </b>{data.vientos} Km/h</h5>    

        </>
      )
}
export default Home