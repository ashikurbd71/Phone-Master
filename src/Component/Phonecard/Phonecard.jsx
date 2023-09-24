import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
const Phonecard = ({phone}) => {

      console.log(phone)

       const {brand_name,image,phone_name,price,rating,id} = phone || {}
    return (
        <div>
               <div className="relative flex lg:w-96 flex-col rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt="Product Image"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-3xl font-bold leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>

         

          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}$
          </p>
        </div>

           <div className='my-1 space-y-1'>
           <p className="block font-sans text-2xl font-medium leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
          </p>

          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       
          <Rating



  initialRating={rating}
  readonly


/>

          </p>
           </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an
          available wireless charging case.
        </p>
      </div>
      <div className="p-6 pt-0">
       <Link to={`/phones/${id}`} state={phone_name}>
       
       <button
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 bg-slate-300 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          See Details
        </button>

       </Link>
      </div>
    </div>
        </div>
    );
};

export default Phonecard;