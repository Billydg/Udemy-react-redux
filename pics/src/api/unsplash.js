import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 60eb11feddcd1ef3597ca7b7252d2c71bfb925d84976fdb79ca82cecac4f7d28'
    }
});