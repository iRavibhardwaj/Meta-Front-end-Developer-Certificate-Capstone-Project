import React from 'react'
import logo from '../../images/headerlogo1.png'
import {useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/confirmation')
  }
  return (
    <div className='flex justify-center'>
      <div style={{height : '500px'}} className="m-10 w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-[#edefee]/30">
        <div className='flex justify-center'>
          <img className='w-40' src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <label className='font-bold text-lg' htmlFor="date">Select a Date :</label>
          <input id='date' className='w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 focus:border-[#495e57] focus:outline-none' type="date" min={new Date().toISOString().split('T')[0]} required />
          <label className='font-bold text-lg' htmlFor="time">Select a Time Slot :</label>
          <select className='w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 focus:border-[#495e57] focus:outline-none' id="time" required>
            <option className='font-bold'>4-6</option>
            <option className='font-bold'>5-7</option>
            <option className='font-bold'>6-8</option>
            <option className='font-bold'>7-9</option>
            <option className='font-bold'>8-10</option>
            <option className='font-bold'>9-11</option>
          </select>
          <label className='font-bold text-lg' htmlFor="diners">No. of Diners :</label>
          <input id='diners' className='w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#495e57] focus:outline-none' type="number" placeholder='No. of Diners' min={1} max={20} required />
          <label className='font-bold text-lg' htmlFor="ocassion">Ocassion :</label>
          <select className='w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#495e57] focus:outline-none' id="ocassion">
            <option className='font-bold'>Birthday</option>
            <option className='font-bold'>Anniversary</option>
            <option className='font-bold'>Promotion</option>
          </select>
          <button className='w-full font-bold bg-[#f4ce15] py-3 rounded-md mt-7' type='submit'>Reserve</button>
        </form>
      </div>
    </div>
  )
}

export default Reservation