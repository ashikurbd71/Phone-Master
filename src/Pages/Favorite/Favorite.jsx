import React from 'react';
import { useState,useEffect } from 'react';
import Favoritecard from '../../Component/Favorite/Favoritecard';
const Favorite = () => {
    const [fevorite,setFavorite] = useState([])
    const [nodata ,setNodata] = useState(false)
  const[isShow , setShow] = useState(false)
   const [total,setTotal] = useState(0)
 
      useEffect(() => { 
 
         const finddata = JSON.parse(localStorage.getItem('favorite'))
           
         const Total = finddata?.reduce(  (pre,crr) => pre + crr.price,0 )
           setTotal(Total)
           
         if(finddata){
             setFavorite(finddata)
         }else{
 
             setNodata('No found data')
         }
          
 
 
      },[])
 
 
     
 
     
   const handleremove = () =>{

        localStorage.clear()
         setFavorite([])
         setNodata('No found data')


   }
 
     return (
         <div>
             <div>{nodata? <p className='text-3xl text-center h-[80vh] text-red-950 justify-center flex items-center'>{nodata}</p> :
       <div>

          <div>

          {
          fevorite?.length > 0 &&   <button onClick={handleremove} className='btn btn-primary bg-gradient-to-r from-cyan-500 text-white to-blue-500 flex justify-center mx-auto mt-10'>All Item Delete</button>}

            <h1 className='lg:text-3xl text-xl font-bold text-center mt-5'>Total Cost : {total} $</h1>
         


          </div>

     
         {
           isShow ? fevorite?.map(favorites => <Favoritecard favorites={favorites} key={favorites.id}></Favoritecard>)    :
           
           fevorite?.slice(0,4).map(favorites => <Favoritecard favorites={favorites} key={favorites.id}></Favoritecard>) 
           
         }
         
         </div>}</div>

       {
        fevorite?.length > 2  &&   <button onClick={() => setShow(!isShow)} className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center text-white mx-auto">{isShow ? "See Less" : "Show All"}</button>
       }
         </div>
     );
};

export default Favorite;