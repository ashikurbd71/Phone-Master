import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Socaile = () => {

   const navigate = useNavigate()
      const {googleSigin, user,githubSign} = useContext(Authcontext)


       const handlemedia = (media) => {

        media()

        .then( () => {

          toast.success('login successfuly')
          navigate('/')
        })
    
      .catch((error) => {
    
     toast.error(error.message)
    
    });
        
       }

      

    return (
        <div>

              <div>
               

            

                <h1 className='text-lg font-bold text-center mt-3'>
                    Continue With
                </h1>

                <hr />


                  <div className='flex mt-2 gap-3 justify-center items-center'>

                   <button onClick={() => handlemedia(googleSigin)}> <img src="../../public/google.png" alt="" className='w-8' /></button>

                   <button onClick={() => handlemedia(githubSign)}> <img src="../../public/git.png" alt="" className='w-8' /></button>


                  </div>

            
              </div>
            
        </div>
    );
};

export default Socaile;