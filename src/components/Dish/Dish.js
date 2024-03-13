import React from 'react'

const Dish = ({name = 'Name',price = '12.99', image}) => {
  return (
    <div className='rounded-lg bg-[#fbdabb] border-2 border-[#edefee]'style={{width : '400px', height : '450px', margin : '20px'}}>
      <div className='rounded-lg relative' style={{height : '55%'}}>
        <img className=' h-full w-full rounded-md' src={image} alt="" />
      </div>
      <div className='flex justify-between px-3 pt-3 pb-2'>
        <h1 className='text-2xl font-bold text-[#333333]'>{name}</h1>
        <h1 className='text-2xl text-[#333333] font-bold'>${price}</h1>
      </div>
      <p className='text-lg mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus similique labore consequatur excepturi!</p>
      <button className='bg-[#495e57] px-4 py-2 my-4 mx-3 rounded-md text-[#edefee] font-bold'>Order</button>
    </div>
  )
}

export default Dish