import React from 'react'
import "./index.css"

export default function Navbar() {
  return (
    <div className='Header lg:px-24 md:px-0 sm:px-0 border-b-2 border-black my-4 '>
        <h2 className='text-4xl font-bold'>WellFound</h2>

        <ul className='NavLink flex gap-6'>
            <li><a href="#" className='Links'>Discover</a></li>
            <li><a href="#" className='Links' >For Jobseeker</a></li>
            <li><a href="#" className='Links' >For Companies</a></li>
            <li><a href="#"><button className='Login px-3 py-2'>Login In</button></a></li>
            <li><a href="#"><button className='Register px-3 py-2'>Sign up</button></a></li>
        </ul>
    </div>
  )
}
