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

export const submitFeedback = (name, email, message) => {
  let getConfig = {
    url: '/feedback',
    method: 'post',
    data: {
      name: name,
      email: email,
      message: message
    }
  }
  return axiosInstance.request(getConfig);
}

export const subscribe = (email) => {
  let getConfig = {
    url: '/subscribe',
    method: 'post',
    data: {
      email: email
    }
  }
  return axiosInstance.request(getConfig);
}