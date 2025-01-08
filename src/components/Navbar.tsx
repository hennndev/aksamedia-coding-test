import React from 'react'
import { LuSearch, LuCircleUserRound, LuMoon } from "react-icons/lu";


const Navbar = () => {
    return (
        <header className='flex-between bg-white px-4'>
            <section className='flexx space-x-2 w-[600px]'>
                <LuSearch className='text-gray-600 text-lg mr-1'/>
                <input type="text" placeholder='Search anything...' className='flex-1 outline-none placeholder:text-gray-500 text-gray-700 text-[15px]'/>
            </section>

            <section className='flexx space-x-5'>
                <LuMoon className='text-xl text-gray-600 cursor-pointer'/>
                <section className='flexx space-x-2 border-l-2 border-gray-100 pl-3 py-[17px] cursor-pointer'>
                    <p className='text-primary text-[15px]'>Hendra Adri</p>
                    <LuCircleUserRound className='text-xl text-gray-600'/>
                </section>
            </section>
        </header>   
    )
}

export default Navbar