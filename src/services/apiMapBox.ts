import axios from 'axios';

const apiMapBox = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
});

export default apiMapBox;