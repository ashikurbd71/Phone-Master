import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Phoneinfocard from '../Phoneinfocard/Phoneinfocard';
 
const Phoneinfo = () => {
    const [phones , setPhones] = useState({})
      const {id} = useParams()

        const phone = useLoaderData()
  
   useEffect(() => {

     
    const findphone = phone.find(phone => phone.id == id)

       setPhones(findphone)
 

   },[id,phone])
       
    return (
        <>
        <div className='my-10'>
              <h1 className='text-4xl font-bold mb-5 text-center'>Phone Information</h1>
        </div>

          <div>
            <Phoneinfocard phones={phones}></Phoneinfocard>
          </div>

        </>
    );
};

export default Phoneinfo;