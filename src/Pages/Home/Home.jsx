import React from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Phones from '../../Component/Phones/Phones';


const Home = () => {

        const phones = useLoaderData()

         
    return (
        <div>
          <Banner></Banner>
          <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;