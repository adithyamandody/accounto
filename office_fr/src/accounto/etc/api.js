import axios from 'axios';

import { getToken, removeUserSession } from './auth_hanlder';
const request_config_capture = function (config) {
  config['headers']['Authorization'] = getToken();
  //   Toast.loading('synchronizing', 0, true);
  return config;
};
const request_error_capture = function (error) {
  return Promise.reject(error);
};
const response_capture = function (response) {
  return response;
};
const response_error_capture = function (error) {
  var err = '';
  try {
    err = error.response.data;
    if (error.response.status === 401) {
      console.log(err);
      removeUserSession();
      window.location.reload();
    } else if (error.response.status === 403) {
      console.log(err);
    } else {
      console.log(err);
    }
  } catch (e) {
    err = ' - ';
    console.log(err, error);
  }
  return Promise.reject(error);
};
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
let baseURL = API_ENDPOINT;
let config = {
  baseURL: baseURL,
};
let infoxAPI = axios.create(config);
infoxAPI.interceptors.request.use(
  request_config_capture,
  request_error_capture
);
infoxAPI.interceptors.response.use(response_capture, response_error_capture);
export { infoxAPI };
