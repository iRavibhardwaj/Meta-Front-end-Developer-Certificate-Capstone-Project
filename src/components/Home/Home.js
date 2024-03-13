import React from 'react'
import { Link } from 'react-router-dom'
import Dish from '../Dish/Dish'
import bannerImage from '../../images/restauranfood.jpg'
import greekSalad from '../../images/salad.jpg'
import brushetta from '../../images/Brushetta.jpg'
import pasta from '../../images/pasta.jpg'

const Home = () => {
  return (
    <>
    <div className='bg-[#495e57] pl-10 md:pl-40 relative'>
      <h1 className='font-bold text-[#f4ce15] text-5xl py-5'>Little Lemon</h1>
      <h1 className='text-white font-bold text-xl py-3'>Chicago</h1>
      <p className=' max-w-screen-sm text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit ex explicabo ipsa voluptates excepturi perspiciatis praesentium fuga necessitatibus. Molestias!</p>
      <button className='font-bold bg-[#f4ce15] px-3 py-2 rounded-md my-5'>
        <Link to='/reservations'>Reserve A Table</Link>
      </button>
      <div className='h-80 w-60 absolute top-14 right-32 hidden xl:block'>
        <img src={bannerImage} alt="" />
      </div>
    </div>
    <h1 className='text-4xl font-bold px-10 xl:px-20 m-5 xl:my-16'>Today's Special :</h1>
    <div className='flex justify-center items-center flex-col xl:flex-row mb-10'>
      <Dish name='Greek Salad' price='12.99' image = {greekSalad}/>
      <Dish name='Brushetta' price='7.99' image={brushetta}/>
      <Dish name='Pasta' price='4.99' image={pasta}/>
    </div>
    </>
  )
}

export default Home