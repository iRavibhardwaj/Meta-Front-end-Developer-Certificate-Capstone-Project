import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/headerlogo1.png'


export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="flex flex-col gap-2 sm:flex-row justify-around items-center bg-[#f4ce15] p-1 ">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <img className='w-48'src={logo} alt="" />
          </Link>
        </div>

        <div
          className=""
        >
          <ul className="flex w-screen justify-evenly sm:justify-center sm:gap-2 sm:w-auto items-center">
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  `${isActive ? "bg-[#495e57] text-[#edefee] font-bold" : "text-[#495e57] bg-[#edefee]"} px-4 py-2 rounded-2xl `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <h1 className='text-[#495e57] bg-[#edefee] px-4 py-2 rounded-2xl'>Menu</h1>
            </li>
            <li>
              <NavLink
                to="/reservations"
                className={({isActive}) =>
                  `${isActive ? "bg-[#495e57] text-[#edefee] font-bold" : "text-[#495e57] bg-[#edefee]"} px-4 py-2 rounded-2xl `
                }
              >
                Reservation
              </NavLink>
            </li>
            <li>
            <li>
              <h1 className='text-[#495e57] bg-[#edefee] px-4 py-2 rounded-2xl'>Order Online</h1>
            </li>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

