import React, {Children} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Item from './pages/item/Item';

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
      },
      {
        path: '/categories',
        element: <Categories/>
      },
      {
        path: '/item/:id',
        element: <Item/>
      },
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
