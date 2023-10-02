import React, { useContext } from 'react';
import { Authcontext } from '../../Authprovider/Authprovider';

const UseAuth = () => {


      const all = useContext(Authcontext)
    return  all
};

export default UseAuth;