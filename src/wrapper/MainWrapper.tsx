import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainWrapper = () => {
    return (
        <main className='min-h-screen flex bg-gray-100 dark:bg-[#222]'>
            <Sidebar/>
            <section className='flex-1'>
                <Navbar/>
                <Outlet/>
            </section>
        </main>
    )
}

export default MainWrapper