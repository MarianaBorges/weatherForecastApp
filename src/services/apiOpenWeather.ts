import axios from 'axios';

const apiOpenWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default apiOpenWeather;