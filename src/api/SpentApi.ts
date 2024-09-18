import axios from 'axios';


const SpentApi = axios.create({
    baseURL: 'https://nuclear-annalee-spentapi-e8d34daf.koyeb.app:8000',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
    },
  });

export default SpentApi;
