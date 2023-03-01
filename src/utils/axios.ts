import axios from 'axios';
// import { setRequestError } from '../app/slices/errorsSlice';
// import store from '../app/store';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {'Authorization': 'Client-ID LjctsD_NbOQwbl_04OxgWVhfQzBUVkGt3mOV7o16V84'}
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
