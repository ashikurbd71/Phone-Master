import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Socaile from '../../Socile/Socaile';
import UseAuth from './../../Socile/Useauth/UseAuth';
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
const Register = () => {

  const {createUser,updateuser} = UseAuth()
  const [showpass,setShowpass] = useState(false)
  const navigate = useNavigate()

    const handlesubmit = e => {

        e.preventDefault()
        
        const name = e.target.name.value
        const email = e.target.email.value 
        const img = e.target.img.value
        const password = e.target.password.value
        
       if(password.length < 6){

           toast.error('password must be 6 chracter!')
       }



        
    
        console.log(email,password)

         createUser(email,password)

         .then(( ) => {
           
             updateuser(name,img)

              .then( () => {

                toast.success('Create successfuly')
                
                navigate('/')
            
              })
          }).catch((error) => {
        
           toast.error(error.message)
       
          });

         
       }


    return (
        <div className='flex justify-center items-center min-h-screen'>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
                
                <form onSubmit={handlesubmit}>

                <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>

                <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>

         
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" name='img' placeholder="Url" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showpass ? "text":"password"} name='password' placeholder="password" className="input input-bordered" />
        
          <div className='-mt-8 pr-3 flex justify-end'>

<h1 onClick={() => setShowpass(!showpass)}>{

showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

}</h1>

</div>

        </div>

              <div className='flex gap-2 items-center mt-6'>
                   <input type="checkbox" name="checkbox" id=""  required/>
                    <p>Acpect our trams and condetion !</p>
              </div>


        <div className="form-control mt-3">
          <button className="btn btn-primary">Register Now</button>
        </div>

              <div className='text-center mt-3'>

                 <p className='text-lg font-semibold'>Already Account Please <Link to={"/login"}> <span className='text- text-blue-800'>LogIn</span></Link></p>
              </div>

           <Socaile></Socaile>
                </form>
      </div>
    </div>
  </div>
</div>
       


        </div>
    );
};

export default Register;