import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import PageHeader from '../components/PageHeader'

const MainWrapper = () => {
    return (
        <main className='min-h-screen flex bg-gray-100'>
            <Sidebar/>
            <section className='flex-1'>
                <Navbar/>
                <PageHeader/>
                <Outlet/>
            </section>
        </main>
    )
}

export default MainWrapper