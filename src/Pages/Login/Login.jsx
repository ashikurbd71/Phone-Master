import React, { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Socaile from '../../Socile/Socaile';
import UseAuth from '../../Socile/Useauth/UseAuth';
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from 'react-icons/fa';

const Login = () => {

  const {siginuser, resetpass,} = UseAuth()
    const emailRef = useRef(null)

    const [showpass,setShowpass] = useState(false)

  const navigate = useNavigate



   const handlesubmit = e => {

    

    e.preventDefault()

    const email = e.target.email.value 
    const password = e.target.password.value

    


    if(password.length < 6){

      toast.error('password must be 6 chracter!')
  }


    console.log(email,password)
     siginuser(email,password)

     .then( () => {

      toast.success('login successfuly')
      navigate('/')
    })

  .catch((error) => {

 toast.error(error.message)

});




   }

   const handlereset = () => {

      const emails = emailRef.current.value

      if(!emails){

         toast.error("provide email")
         return
      } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emails)){

         return toast.error('provide right email!')
      }

       resetpass(emails)

       .then( () => {

        toast.success('Check Mailbox')
        navigate('/')
      })
  
    .catch((error) => {
  
   toast.error(error.message)

  
  });


  }

 
    return (
        <div className='flex items-center justify-center min-h-screen'>
          

          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
                
                <form onSubmit={handlesubmit}>


                <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" ref={emailRef} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
         
          <input type={showpass ? "text":"password"} name='password' placeholder="password" className="input input-bordered" />
          

           <div className='-mt-8 pr-3 flex justify-end'>

           <h1 onClick={() => setShowpass(!showpass)}>{

showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

}</h1>

           </div>

          
          <label className="label mt-4">
            <a onClick={handlereset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login Now</button>
        </div>

              <div className='text-center mt-3'>

                 <p className='text-lg font-semibold'>New Here Please <Link to={"/register"}> <span className='text- text-blue-800'>Register</span></Link></p>
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

export default Login;