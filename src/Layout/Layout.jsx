import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../Component/Header/Navber/Navber';
import Footer from '../Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {

      const loc = useLocation()

      useEffect(() => {


        

           if(loc.pathname === "/"){

              document.title = `Phone Master`
           } else{

            document.title = `phone Master ${loc.pathname.replace("/" , "-")}`

           }
           if(loc.state){

            document.title = `${loc.state}`
         }


      } ,[loc.pathname])


    
    return (
        <div className='max-w-screen-xl mx-auto px-5 lg:px-0 '>
          <Navber></Navber>

             <div className=' min-h-screen'>
             <Outlet></Outlet>

             </div>
            
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Layout;