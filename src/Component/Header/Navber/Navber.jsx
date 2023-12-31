import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import UseAuth from '../../../Socile/Useauth/UseAuth';
const Navber = () => {

  const {logout,user} = UseAuth()

  const handlelogout = () => {

    logout()
    .then((result) => {
           
      const user = result.user;
       console.log(user)
    }).catch((error) => {
  
      const errorCode = error.code;
      console.log(errorCode)
 
    });
  }
    return (
        <div>
             

             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-blue-700 underline" : ""
  }
>
 HOME
</NavLink>
            </li>
            <li>
            <NavLink
  to="/favorite"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-blue-700 underline" : ""
  }
>
 FAVORITE
</NavLink>
           
            </li>
          
          </ul>
      </ul>
    </div>
    <Link to={'/'}><a className="lg:text-2xl text-lg font-bold">Phone Master</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-blue-700 underline" : ""
  }
>
 HOME
</NavLink>
            </li>
            <li>
            <NavLink
  to="/favorite"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-blue-700 underline" : ""
  }
>
 FAVORITE
</NavLink>
          
            </li>
          
          </ul>
    </ul>
  </div>
  <div className="navbar-end">



{

  user?.email ?
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src= {user?.photoURL}/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>{user?.displayName}</a></li>
        <li><a onClick={handlelogout}>Logout</a></li>
      </ul>
    </div>
  :  <Link to={'/login'}><button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button></Link>
}

  </div>
</div>

        </div>
    );
};

export default Navber;