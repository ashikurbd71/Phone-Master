import React from 'react';
import { useRouteError, Link } from 'react-router-dom';


const Error = () => {

       const error = useRouteError()
    return (
        <div className=' min-h-screen flex justify-center items-center  mx-auto'>

             {

                error.status == 404 && <div>

                      <h1 className='text-7xl font-semibold mb-5'>opps!</h1>

                       <p className='text-5xl font-bold text-red-700 py-5'>
                        pages not found
                       </p>

                       <Link to={"/"}> 
         
                               <button className='px-10 py-1 bg-slate-800 text-white'>Bcak home</button>
                       
                       </Link>
                </div>
             }
            
        </div>
    );
};

export default Error;