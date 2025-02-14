import clsx from 'clsx'
import { sidebarItems } from '../utils/sidebarItems'
import { useLocation, useNavigate } from 'react-router-dom'
// components
import { LuOrbit, LuX } from "react-icons/lu"

type PropsTypes = {
    openSidebar: boolean
    closeSidebarHandler: () => void
}

const Sidebar = ({openSidebar, closeSidebarHandler}: PropsTypes) => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname.split('/').reverse()[0]

    return (
        <aside className={clsx("h-screen top-0 w-[250px] bg-white dark:bg-primary border-r-2 border-gray-200 dark:border-gray-700", openSidebar ? "fixed xl:sticky z-[999]" : "hidden xl:sticky xl:inline")}>
            <h1 className='flexx mt-3 text-2xl font-bold text-primary dark:text-gray-50 pl-10'>
                <LuOrbit className='mr-2 text-2xl'/>
                Financee
            </h1>
            <LuX className='text-xl absolute top-4 right-4 text-red-600 xl:hidden' onClick={closeSidebarHandler}/>
            <section className='mt-10 space-y-2 px-5'>
                {sidebarItems.map(({Icon, ...item}) => (
                    <section className={clsx("flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600", pathname === item.slug ? "bg-gray-100 dark:bg-gray-600" : "")} key={item.id} onClick={() => navigate(`/${item.slug}`)}>
                        <Icon className='text-xl text-gray-500 dark:text-gray-200'/>
                        <p className='text-gray-500 dark:text-gray-200 font-medium'>{item.name}</p>
                    </section>
                ))}
            </section>
        </aside>
    )
}

export default Sidebar