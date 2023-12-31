import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Phoneinfocard = ({phones}) => {

    const {brand_name,image,phone_name,price,rating,id} = phones || {}

     console.log(phones)

     const handlefavorite = () =>  {

         console.log(phones)

        //  localStorage.setItem('test' , JSON.stringify([{name : "ovi"}]))
  const addfavoriteitem = []
         const finddata = JSON.parse(localStorage.getItem('favorite'))

             if(!finddata){

                 addfavoriteitem.push(phones)
                 localStorage.setItem('favorite',JSON.stringify(addfavoriteitem))
              
                 
             } else{

                 const exits = finddata.find(phone => phone.id === id)

                 if(!exits){
                    addfavoriteitem.push(...finddata,phones)
                    localStorage.setItem('favorite',JSON.stringify(addfavoriteitem))
                    return(

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add Successfuly',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     )

                 }else{

              return(

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already Added',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
             )

                 }
      
                 
             }
        
     }

    return (
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
       
          <button

           onClick={handlefavorite}
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Add Favorite
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
      
      </div>
    </div>
        </div>
    );
};

export default Phoneinfocard;