import React from 'react'
import "./index.css"
import { FcGoogle } from "react-icons/fc"
import { FaBars } from "react-icons/fa"

export default function Google() {
    return (
        <div className='Google_cta flex justify-around items-center'>
            <input className='w-[60%] h-[60px] px-5 border-1 border-gray-500' placeholder='Your Email' />
            <button className='px-4 py-3 bg-black text-white'>Sign up</button>
            <p>or</p>
            <button className='flex gap-4 shadow-md py-2 px-8 shadow-gray-500'><FcGoogle size={30} /> <span>Sign up with Google</span></button>
            <div className="Icons">
                <FaBars size={35} spacing={1} />
            </div>
        </div>
    )
}
