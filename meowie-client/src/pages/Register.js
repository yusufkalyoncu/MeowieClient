import React from 'react'
import {Link} from 'react-router-dom'
import RegisterForm from '../components/form/RegisterForm'

const Register = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' alt="" src='https://wallpaper.dog/large/5543708.jpg'/>
        <div className='absolute bg-black/60 top-0 left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-24 z-50 mt-10'>
          <div className='max-w-[450px]  mx-auto bg-black/80 text-white rounded'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>REGISTER</h1>
              <RegisterForm></RegisterForm> 
              <form className='w-full flex flex-col py-4'>

                                 
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
