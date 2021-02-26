import axios from 'axios';

export const fetchData = () => {
  return axios.get('/').then(res => res.data);
}