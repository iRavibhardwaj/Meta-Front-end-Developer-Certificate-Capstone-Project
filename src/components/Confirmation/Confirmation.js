import React from 'react'
import logo from '../../images/headerlogo1.png'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='flex justify-center'>
      <div style={{height : '400px'}} className="flex flex-col items-between justify-between m-10 w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-[#edefee]/30">
        <div className='flex justify-center'>
          <img className='w-60' src={logo} alt="" />
        </div>
        <h1 className='font-bold text-3xl text-center'>Thank you for booking a Table at Little Lemon.</h1>
        <Link to='/'>
        <button className='w-full font-bold bg-[#f4ce15] py-3 rounded-md mt-7'>Home</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Confirmation