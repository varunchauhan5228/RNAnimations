import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import apiconstant from './apiconstants';
// import {toggleLoader} from '../subcomponent/loader/action';
// import { uniToken, setInternet } from '../util/constants';
// import stringData from '../config/string';
let uniToken = '';
const instance = axios.create({
  baseURL: apiconstant.baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: uniToken,
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = uniToken;
    return config;
  },
  (err) => Promise.reject(err),
);

const internet = async (dispatch) => {
  const netState = await NetInfo.fetch();
  if (!netState.isConnected) {
    // dispatch(toggleLoader());
    // setInternet(false);
    return Promise.reject(new Error('No Internet connected!'));
  }
  // setInternet(true);
};

export const sendGetRequest = async (url, params, dispatch) => {
  await internet(dispatch);

  return instance
    .get(url, {
      params,
    })
    .then((response) => {
      console.log('api response: ', response);
      return response.data;
    })
    .catch((err) => {
      if (err.response === undefined) {
        throw new Error('Error');
      }
      console.log('api err', err.response.data);
      throw err.response.data;
    })
    .finally(() => {
      // hide loader
      // dispatch(toggleLoader());
    });
};

export const sendPostRequest = async (url, body, dispatch) => {
  await internet(dispatch);

  return instance
    .post(url, body)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response === undefined) {
        throw new Error('Error');
      }
      console.log(' api err: ', err.response.data);
      throw err.response.data;
    })
    .finally(() => {
      // hide loader
      // dispatch(toggleLoader());
    });
};

export const sendPutRequest = async (url, body, dispatch) => {
  await internet(dispatch);

  return instance
    .put(url, body)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response === undefined) {
        throw new Error('Error');
      }
      console.log(' api err: ', err.response.data);
      throw err.response.data;
    })
    .finally(() => {
      // hide loader
      // dispatch(toggleLoader());
    });
};

export const deleteRequest = async (url, body, dispatch) => {
  await internet(dispatch);

  return instance
    .delete(url, body)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response === undefined) {
        throw new Error('Error');
      }
      console.log(' api err: ', err.response.data);
      throw err.response.data;
    })
    .finally(() => {
      // hide loader
      // dispatch(toggleLoader());
    });
};
