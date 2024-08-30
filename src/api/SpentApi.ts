import axios from 'axios';


const SpentApi = axios.create({
    baseURL: 'https://spent-api.up.railway.app',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
    },
  });

export default SpentApi;
