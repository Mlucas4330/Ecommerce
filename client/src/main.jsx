import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateProduct from './pages/Product/CreateProduct.jsx';
import IndexAdmin from './pages/Admin/IndexAdmin.jsx';
import IndexProduct from './pages/Product/IndexProduct.jsx';
import CreateAuth from './pages/Auth/CreateAuth.jsx';
import CreateUser from './pages/User/CreateUser.jsx';
import ViewUser from './pages/User/ViewUser.jsx';
import CreateCollection from './pages/Collection/CreateCollection.jsx';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'products',
        element: <IndexProduct />
    },
    {
        path: 'product/create',
        element: <CreateProduct />
    },
    {
        path: 'collection/create',
        element: <CreateCollection />
    },
    {
        path: 'admin/index',
        element: <IndexAdmin />
    },
    {
        path: 'signin',
        element: <CreateAuth />
    },
    {
        path: 'signup',
        element: <CreateUser />
    },
    {
        path: 'user/profile',
        element: <ViewUser />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
