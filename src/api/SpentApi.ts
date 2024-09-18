import axios from 'axios';


const SpentApi = axios.create({
    baseURL: 'nuclear-annalee-spentapi-e8d34daf.koyeb.app/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
    },
  });

export default SpentApi;
