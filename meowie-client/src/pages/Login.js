import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const Login = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' alt="" src='https://wallpaper.dog/large/5543708.jpg'/>
      <div className='absolute bg-black/60 top-0 left-0 w-full h-full'></div>
      <div className='fixed w-full px-4 py-24 z-50 mt-10'>
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/80 text-white rounded'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>LOGIN</h1>
            <form onSubmit={loginUser} className='w-full flex flex-col py-4'>
              <input className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='User or Email' name='usernameOrEmail' autoComplete='email'/>
              <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' name='password' autoComplete='off'/>
              <button className="bg-red-600 py-3 my-6 rounded font-bold">Login</button>
              <p className='py-4'>
                <span className="text-gray-600 pr-2">New to Meowie?</span>
                <Link to="/register">
                Register
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

export default Login
