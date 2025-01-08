import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainWrapper = () => {
    return (
        <main className='flex'>
            <Sidebar/>
            <section>
                <Navbar/>
                <Outlet/>
            </section>
        </main>
    )
}

export default MainWrapper