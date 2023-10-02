import React from 'react';
import UseAuth from '../Socile/Useauth/UseAuth';
import { Navigate } from 'react-router-dom';

const Privtepages = ({children}) => {

     const {user ,loader} = UseAuth()
  
      if(loader){

        return <span className="loading loading-dots loading-lg"></span>
      }

     if(!user?.email){
       
       return <Navigate to={'/login'}/>

     }

     return children
};

export default Privtepages;