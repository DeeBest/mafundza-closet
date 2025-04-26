import axios from 'axios';

const DEV_BACKEND_URL = 'http://localhost:5000/api';

const PROD_BACKEND_URL = 'https://mafundzaclosetbackend.onrender.com/api';

const myAxios = axios.create({
  baseURL: DEV_BACKEND_URL,
  // baseURL: PROD_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

export default myAxios;
