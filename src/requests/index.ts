import { setRequestError } from '../app/slices/errorsSlice';
import store from '../app/store';
import axios from '../utils/axios';

export type ID = string | number;

export const getDataByUrl = async (url: string, params?: object) => {
  try {
    const reqParams = params ? { params } : {};
    const response = await axios.get(url, reqParams);
    return response.data;
  } catch (error) {
    const { dispatch } = store;
    return dispatch(setRequestError(error));
  }
};

export const postDataByUrl = async (
  url: string,
  data: object,
  params?: object
) => {
  try {
    const reqParams = params ? { params } : {};
    const response = await axios.post(url, data, reqParams);
    return response.data;
  } catch (error) {
    const { dispatch } = store;
    return dispatch(setRequestError(error));
  }
};

export const patchDataByUrl = async (
  url: string,
  data: object,
  params?: object
) => {
  try {
    const reqParams = params ? { params } : {};
    const response = await axios.patch(url, data, reqParams);
    return response.data;
  } catch (error) {
    const { dispatch } = store;
    return dispatch(setRequestError(error));
  }
};

export const putDataByUrl = async (
  url: string,
  data: object,
  params?: object
) => {
  try {
    const reqParams = params ? { params } : {};
    const response = await axios.put(url, data, reqParams);
    return response.data;
  } catch (error) {
    const { dispatch } = store;
    return dispatch(setRequestError(error));
  }
};

export const deleteDataByUrl = async (url: string) => {
  try {
    const response = await axios.delete(url);
    return response.status === 204;
  } catch (error) {
    const { dispatch } = store;
    return dispatch(setRequestError(error));
  }
};
