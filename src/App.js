import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/CheckOut';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';
import productSlice from './features/product/productSlice';


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
//import ProductDetail from './features/product-list/components/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
 
  {  
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {  
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {  
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
