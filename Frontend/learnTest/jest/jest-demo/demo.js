import axios from 'axios';

export const runCallback = (callback) => {
  callback()
}

export const getData = () => {
  return axios.get('/suibina')
}