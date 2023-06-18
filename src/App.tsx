import React, {Children} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
