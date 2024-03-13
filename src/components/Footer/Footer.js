import React from 'react'
import logo from '../../images/footerlogo.png'


const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row pl-10 justify-center bg-[#edefee] text-gray-700 pb-10'>
      <div className='hidden lg:block'style={{width : '400px', margin : '20px'}}>
        <img className='w-28 pt-5' src={logo} alt="" />
      </div>
      <div style={{height : '200px', width : '400px',margin : '20px'}}>
        <h1 className='font-bold text-xl'>Contact Us</h1>
        <div className='pl-2'>
          <div>
            <h2 className='font-bold pl-1'>Address :</h2>
            <p className='pl-1'>123 Town Street, Chicago</p>
          </div>
          <div>
            <h2 className='font-bold pl-1'>Phone :</h2>
            <p className='pl-1'>+00 123 4455 678</p>
          </div>
          <div>
            <h2 className='font-bold pl-1'>Email :</h2>
            <p className='pl-1'>contact@littlelemon.com</p>
            <p className='pl-1'>support@littlelemon.com</p>
          </div>
        </div>
      </div>
      <div style={{height : '150px', width : '400px', margin : '20px'}}>
        <h1 className='font-bold'>Follow us on :</h1>
        <div className='pl-2'>
          <a href="https://www.instagram.com"><p><i class="ri-instagram-line"></i> Instagram</p></a>
          <a href="https://www.youtube.com"><p><i class="ri-youtube-line"></i> YouTube</p></a>
          <a href="https://www.facebook.com"><p><i class="ri-facebook-fill"></i> Facebook</p></a>
          <a href="https://www.pinterest.com"><p><i class="ri-pinterest-line"></i> Pinterest</p></a>
        </div>
      </div>
    </div>
  )
}

export default Footer