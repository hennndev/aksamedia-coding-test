import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const MainWrapper = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)
    return (
        <main className='min-h-screen lg:flex bg-gray-100 dark:bg-[#222]'>
            <Sidebar openSidebar={openSidebar} closeSidebarHandler={() => setOpenSidebar(false)}/>
            <section className='flex-1'>
                <Navbar openSidebarHandler={() => setOpenSidebar(!openSidebar)}/>
                <Outlet/>
            </section>
        </main>
    )
}

export default MainWrapper