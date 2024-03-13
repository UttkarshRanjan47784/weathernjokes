import env from 'dotenv';
import axios from 'axios';

env.config();

let outputInfo = {};

const optionsI = {
    method: 'GET',
    url: process.env.IP_URL,
    params: {
      apikey: process.env.IP_API_KEY
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAP_API_KEY,
      'X-RapidAPI-Host': process.env.IP_HOST
    }
};


const optionsJ = {
    method: 'GET',
    url: process.env.JOKE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.RAP_API_KEY,
      'X-RapidAPI-Host': process.env.JOKE_HOST
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
            url: process.env.WEATHER_URL + outputInfo.city,
            headers: {
                'X-RapidAPI-Key': process.env.RAP_API_KEY,
                'X-RapidAPI-Host': process.env.WEATHER_HOST
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