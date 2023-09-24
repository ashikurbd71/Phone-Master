import React from 'react';

const Favoritecard = ({favorites}) => {
      console.log(favorites)

      const {brand_name,image,phone_name,price,rating,id} = favorites || {}
    return (
        <div className='my-10'>
            <div className=' mx-auto flex justify-center h-auto '>
              <div className="relative flex border-2 w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
         {brand_name}
        </h6>
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {phone_name}
        </h4>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part of
          the story
        </p>
       
        
      
      </div>
    </div>
        </div>
        </div>
    );
};

export default Favoritecard;