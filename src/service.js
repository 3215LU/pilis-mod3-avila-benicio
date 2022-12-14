// const   SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.18334987471809&longitude=-65.33129361050375&timezone=America/Argentina/Jujuy'
export const getCards = async (latitud,longitud,continente,pais,provincia) => {
  try {
    const SERVER_DOMAIN = 
    `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud || 24.179134}&longitude=${longitud || 65.319269}&timezone=${continente || 'America'}/${pais || 'Argentina'}${pais === "Argentina" ? '/'+provincia:""}`
    //`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${ latitud || 24.179134 }&longitude=${ longitud || 65.319269 }&timezone=${ ciudad || 'America/Argentina/Jujuy' }   
    const response = await fetch(`${SERVER_DOMAIN}`);
    return response.json();
  } catch {
    throw new Error('could not fetch color palettes');
  }
};


const getClima = async () => {
  try {
    const data = await fetch(`
    https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.179134&longitude=-65.319269&timezone=America/Argentina/Jujuy    
    `);
    return data.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};
export default getClima;
