import { render, screen } from '@testing-library/react';
// import App from './products';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SnackbarProvider } from 'notistack';

const initialState = {
    order: {
        orderList: []
    },
    pokemon: {
        pokemonList: []
    },
    loading: {
        mainLoading: false
    },
    notifier: {
        notifications: []
    },
    errors: {
        messages: []
    }
}

// describe('Provider test', () => {
//     const mockStore = configureStore()
//     let store

//     it('renders "Blur" text', () => {
//         store = mockStore(initialState)
//         render(<Provider store={store}>
//             <SnackbarProvider maxSnack={5}>
//                 <App />
//             </SnackbarProvider>
//         </Provider>);
//         const linkElement = screen.getByText(/blur/i);
//         expect(linkElement).toBeInTheDocument();
//     });
// })


