import React from 'react'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom';
import { LuOrbit , LuGrip, LuWallet, LuLandmark, LuNotebookText } from "react-icons/lu";

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname.split('/').reverse()[0]

    return (
        <aside className='min-h-screen sticky top-0 w-[250px] bg-white border-r-2 border-gray-200'>
            <h1 className='flexx mt-3 text-2xl font-bold text-primary pl-10'>
                <LuOrbit className='mr-2 text-2xl'/>
                Financee
            </h1>

            <section className='mt-10 space-y-1 px-5'>
                <section className='flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100' onClick={() => navigate("/dashboard")}>
                    <LuGrip className='text-lg text-gray-500'/>
                    <p className='text-gray-500 text-[15px] font-medium'>Dashboard</p>
                </section>
                <section className='flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100' onClick={() => navigate("/incomes")}>
                    <LuLandmark className='text-lg text-gray-500'/>
                    <p className='text-gray-500 text-[15px] font-medium'>Incomes</p>
                </section>
                <section className='flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100' onClick={() => navigate("/expenses")}>
                    <LuWallet className='text-lg text-gray-500'/>
                    <p className='text-gray-500 text-[15px] font-medium'>Expenses</p>
                </section>
                <section className='flexx cursor-pointer space-x-2 px-4 py-2 rounded-md hover:bg-gray-100' onClick={() => navigate("/plans")}>
                    <LuNotebookText className='text-lg text-gray-500'/>
                    <p className='text-gray-500 text-[15px] font-medium'>Plans</p>
                </section>
            </section>
        </aside>
    )
}

export default Sidebar