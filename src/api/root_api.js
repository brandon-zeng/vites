import axios from 'axios'


const axiosConfig = {
  baseURL: '/api'
}
const axiosInstance = axios.create(axiosConfig);


export const readDb = () => {
  let getConfig = {
    url: '/db',
    method: 'get'
  }
  return axiosInstance.request(getConfig);
}