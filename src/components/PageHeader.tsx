import React from 'react'
import { useLocation } from 'react-router-dom'
import { LuListFilter, LuArrowDownZA  } from "react-icons/lu"

const PageHeader = () => {
    const location = useLocation()
    const pathname = location.pathname.split('/').reverse()[0]

    return (
        <section className='flex-between border-t-2 border-gray-200 bg-white py-3 px-4'>
            <h1 className='text-primary font-medium capitalize'>{pathname}</h1>
            <section className='flexx space-x-2'>
                <button className='flexx border border-gray-200 text-gray-600 rounded-md py-2 px-3 text-sm'>
                    <LuArrowDownZA  className='mr-2 text-lg'/>
                    Sort
                </button>
                <button className='flexx border border-gray-200 text-gray-600 rounded-md py-2 px-3 text-sm'>
                    <LuListFilter className='mr-2 text-lg'/>
                    Filter
                </button>
            </section>
        </section>
    )
}

export default PageHeader