import axios from 'axios';

const apiMapBox = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    params:{
        access_token: process.env.TOKEN_MAP_BOX,
    }
});

export default apiMapBox;