import React from 'react'



import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './component/Home';
import Products from './pages/Products';
import Signup from './pages/Signup';
import LOGin from './pages/LOGin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/products' element={<Products/>} > </Route>
      <Route path='/signup' element={<Signup/>} > </Route>
      <Route path='/login' element={<LOGin/>} > </Route>


    </Route>
  )
);


const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App