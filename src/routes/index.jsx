import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Primarylayout from '../layout/primarylayout'
import Home from '../pages/home'
import NotFound from '../pages/notFound'

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element = {<Primarylayout/>}>
                    <Route path='/home' element = {<Home/>}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </>
        )
    )
  return (
    <>
     <RouterProvider router = {router}/> 
    </>
  )
}

export default Routes
