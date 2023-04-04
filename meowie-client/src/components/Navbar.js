import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {

  let {user, logoutUser} = useContext(AuthContext);

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
      <h1 className='text-orange-600 text-4xl font-bold cursor-pointer'>MEOWIE</h1>
      </Link>
      <div>
        {user ? (
        <button onClick={logoutUser} className=' pr-4 px-6 py-4 rounded cursor-pointer text-white'>LOGOUT</button>
        ) : 
        (<Link to="/login">
        <button className=' pr-4 px-6 py-4 rounded cursor-pointer text-white'>LOGIN</button>
        </Link>)
        }
        
        <Link to="/register">
        <button className='bg-orange-600 px-6 py-4 rounded cursor-pointer text-white'>Register</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
