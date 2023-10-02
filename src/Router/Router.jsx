import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Favorite from '../Pages/Favorite/Favorite';
import Login from '../Pages/Login/Login';
import Error from '../Pages/Error/Error';
import Phoneinfo from '../Component/PhoneInfo/Phoneinfo';
import Register from '../Pages/Login/Register';
import Privtepages from '../privte/Privtepages';
 const router  = createBrowserRouter([

    {

        path:"/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
         children:[

         {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/phones.json'),
         },

         {
            path:"/favorite",
            element:<Favorite></Favorite>
         },
         {
            path:"/login",
            element:<Login></Login>
         },

         {
            path:'/phones/:id',
            element: <Privtepages> <Phoneinfo></Phoneinfo> </Privtepages>,
            loader: () => fetch('/phones.json')
         },

         {
            path:'/register',
            element:<Register></Register>
         
         }



         ]
         
    }

 ])

export default router;