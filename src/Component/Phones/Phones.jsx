import React from 'react';
import Phonecard from '../Phonecard/Phonecard';

const Phones = ({phones}) => {
    console.log(phones)
    return (

        <>
        <div className='my-10'>
            <h1 className='mb-5 lg:text-4xl text-xl text-center font-bold'>All Phones Catagory</h1>
        </div>

          <div className='grid lg:grid-cols-3 grid-cols-1  gap-4 my-10'>
            
            {
                phones?.map(phone => <Phonecard phone={phone} key={phone.id}></Phonecard>)
            }
          </div>

          </>
    );
};

export default Phones;