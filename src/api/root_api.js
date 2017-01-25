import axios from 'axios'
import cryptoer from '../../server/cryptoer.js'


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
  let data = {
      name: name,
      email: email,
      message: message
    };

  let dataEnc = cryptoer.encrypt(JSON.stringify(data));

  let getConfig = {
    url: '/feedback',
    method: 'post',
    data: {
      data: dataEnc
    }
  }
  return axiosInstance.request(getConfig);
}

export const subscribe = (email) => {
  let data = {
      email: email
    };
  let dataEnc = cryptoer.encrypt(JSON.stringify(data));
  let getConfig = {
    url: '/subscribe',
    method: 'post',
    data: {
      data: dataEnc
    }
  }
  return axiosInstance.request(getConfig);
}