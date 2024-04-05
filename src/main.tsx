import ReactDOM from 'react-dom/client';
import './main.css';
import { Provider } from 'react-redux';
import { persistor, store } from './Store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
    // </React.StrictMode>
);
