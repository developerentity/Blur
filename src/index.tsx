import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './app/store'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './routes/main';

const theme = createTheme({
  palette: {
    primary: {
      main: '#61dafb',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={rootRouter} />
        </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
