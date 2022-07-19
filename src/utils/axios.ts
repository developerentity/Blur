import axios from 'axios';
// import { setRequestError } from '../app/slices/errorsSlice';
// import store from '../app/store';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  timeout: 1000
});

// axiosInstance.interceptors.request.use((request) => {
//   const accessToken = localStorage.getItem('accessToken');
//   if (accessToken) {
//     request.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return request;
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { dispatch } = store;
//     dispatch(setRequestError(error.response));
//     Promise.reject(
//       error?.response?.data || error?.response || 'Something went wrong'
//     );
//   }
// );

export default axiosInstance;
