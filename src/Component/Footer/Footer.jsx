import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10'>
             <footer className="w-full bg- bg-slate-100 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
         <h1 className='text-3xl font-bold'>Phone Master</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
             <Link to={"/"}>
             <button
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Home
            </button>
             </Link>
          </li>
          <li>
          <Link to={"/favorite"}>
             <button
              href="#"
              className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
            >
              Favorite
            </button>
             </Link>
          </li>
          
          
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        © 2023 Dev-<a href="https://github.com/ashikurbd71" target='blank' className=' text-blue-900'> Ashikur Ovi</a> 
      </p>
    </footer>
        </div>
    );
};

export default Footer;