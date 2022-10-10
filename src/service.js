// const   SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.18334987471809&longitude=-65.33129361050375&timezone=America/Argentina/Jujuy'

export const getCards = async (latitud,longitud,continente,pais,provincia) => {
  try {
    const SERVER_DOMAIN = `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=${continente}/${pais}/${provincia}`
  
    const response = await fetch(`${SERVER_DOMAIN}`);

    return response.json();
  } catch {
    throw new Error('could not fetch color palettes');
  }
};

const getClima = async () => {
  try {
    const data = await fetch(`
    https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=24.179134&longitude=65.319269&timezone=America/Argentina/Jujuy    
    `);
    return data.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};
export default getClima;

export const getClim = async () => {
  try {
    const dato1 = await fetch(`
    https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=24.2363269&longitude=64.889704&timezone=America/Argentina/Jujuy    
    `);
    return dato1.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};


export const getCli = async () => {
  try {
    const dato2 = await fetch(`
    https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=latitud:23.3996312&longitude=66.3736199&timezone=America/Argentina/Jujuy    
    `);
    return dato2.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};


export const getCl = async () => {
  try {
    const dato3 = await fetch(`
    https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=24.3729897&longitude=65.113355&timezone=America/Argentina/Jujuy    
    `);
    return dato3.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};


//-24.18334987471809
//-65.33129361050375