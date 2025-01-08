import React from 'react'
import { LuSearch, LuCircleUserRound, LuMoon } from "react-icons/lu";


const Navbar = () => {
    return (
        <header className='flex-between bg-white px-4'>
            <section className='flexx space-x-2 w-[600px]'>
                <LuSearch className='text-gray-500 text-lg mr-2'/>
                <input type="text" placeholder='Search anything...' className='flex-1 outline-none text-gray-600 text-[15px]'/>
            </section>

            <section className='flexx space-x-5'>
                <LuMoon className='text-xl text-gray-600 cursor-pointer'/>
                <section className='flexx space-x-2 border-l-2 border-gray-100 pl-3 py-4 cursor-pointer'>
                    <p className='text-sm text-gray-600'>Hendra Adri</p>
                    <LuCircleUserRound className='text-xl text-gray-600'/>
                </section>
            </section>
        </header>   
    )
}

export default Navbar