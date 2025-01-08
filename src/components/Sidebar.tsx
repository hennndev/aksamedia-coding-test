import React from 'react'
import clsx from 'clsx'
import { LuOrbit } from "react-icons/lu";
import { sidebarItems } from '../utils/sidebarItems'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname.split('/').reverse()[0]

    return (
        <aside className='h-screen sticky top-0 w-[250px] bg-white border-r-2 border-gray-200'>
            <h1 className='flexx mt-3 text-2xl font-bold text-primary pl-10'>
                <LuOrbit className='mr-2 text-2xl'/>
                Financee
            </h1>

            <section className='mt-10 space-y-2 px-5'>
                {sidebarItems.map(({Icon, ...item}) => (
                    <section className={clsx("flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100", pathname === item.slug ? "bg-gray-100" : "")} onClick={() => navigate(`/${item.slug}`)}>
                        <Icon className='text-xl text-gray-500'/>
                        <p className='text-gray-500 font-medium'>{item.name}</p>
                    </section>
                ))}
            </section>
        </aside>
    )
}

export default Sidebar