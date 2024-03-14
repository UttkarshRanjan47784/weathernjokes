import axios from 'axios';
import { RAP_API_KEY, IP_HOST, IP_API_KEY, IP_URL, WEATHER_URL, WEATHER_HOST, JOKE_URL, JOKE_HOST } from './keys.js'

let outputInfo = {};

const optionsI = {
    method: 'GET',
    url: IP_URL,
    params: {
      apikey: IP_API_KEY
    },
    headers: {
      'X-RapidAPI-Key': RAP_API_KEY,
      'X-RapidAPI-Host': IP_HOST
    }
};


const optionsJ = {
    method: 'GET',
    url: JOKE_URL,
    headers: {
      'X-RapidAPI-Key': RAP_API_KEY,
      'X-RapidAPI-Host': JOKE_HOST
    }
};
  
try {
    const response = await axios.request(optionsI);
    outputInfo['city'] = response.data.city;
    outputInfo['country'] = response.data.country;
    outputInfo['lat'] = response.data.latitude;
    outputInfo['long'] = response.data.longitude;     

    try {
        const optionsW = {
            method: 'GET',
            url: WEATHER_URL + outputInfo.city,
            headers: {
                'X-RapidAPI-Key': RAP_API_KEY,
                'X-RapidAPI-Host': WEATHER_HOST
            }
        };
        
        const responseW = await axios.request(optionsW);
        outputInfo['weather'] = responseW.data.weather[0]["main"];
        outputInfo['temp'] = Math.round((responseW.data.main["temp"] - 32)*5/9);
        outputInfo['tempFeel'] = Math.round((responseW.data.main["feels_like"] - 32)*5/9);
        outputInfo['humidity'] = responseW.data.main["humidity"];
        console.log(outputInfo);
    } catch (error) {
        console.error(error);
    }

} catch (error) {
    console.error(error);
}


try {
    const response = await axios.request(optionsJ);
	outputInfo["joke"] = response.data[0]["joke"];
    
} catch (error) {
    console.log(error)
}

console.log(outputInfo);