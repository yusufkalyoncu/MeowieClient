import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

  const submitForm = e =>{
    e.preventDefault();
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' alt="" src='https://wallpaper.dog/large/5543708.jpg'/>
        <div className='absolute bg-black/60 top-0 left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-24 z-50 mt-10'>
          <div className='max-w-[450px] h-[650px] mx-auto bg-black/80 text-white rounded'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>REGISTER</h1>
              <form onSubmit={submitForm} className='w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='Full Name' name='fullname' autoComplete='name'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='Username' name='username' autoComplete='username'/> 
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' name='email' autoComplete='email'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' name='password' autoComplete='off'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password Confirm' name='passwordconfirm' autoComplete='off'/>
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Register</button>
                <p className='py-4'>
                  <span className="text-gray-600 pr-2">Already registered to Meowie?</span>
                  <Link to="/login">
                  Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Register
