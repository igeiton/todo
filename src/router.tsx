import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Edit from './Components/Edit';

export const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<App />}></Route>,
        <Route path="/edit" element={<Edit />} />,
    ])
);
