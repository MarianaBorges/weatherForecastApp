import axios from 'axios';

const apiOpenWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params:{
        appid: process.env.API_KEY_OPEN_WEATHER,
        cnt: '5',
        units: 'metric', 
        lang: 'pt_br'
    }
});

export default apiOpenWeather;