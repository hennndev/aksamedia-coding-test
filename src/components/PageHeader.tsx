import React from 'react'
import { useLocation } from 'react-router-dom'
import { LuListFilter, LuArrowDownZA  } from "react-icons/lu"

type PropsTypes = {
    isTables?: boolean
    children: React.ReactNode
}

const PageHeader = ({isTables, children}: PropsTypes) => {
    const location = useLocation()
    const pathname = location.pathname.split('/').reverse()[0]

    return (
        <section className='flex-between border-t-2 border-gray-200 bg-white py-3 px-4'>
            <h1 className='text-primary font-medium capitalize'>{pathname.replace("-", " ")}</h1>
            <section className='flexx space-x-3'>
                {isTables && (
                    <>
                        <button className='flexx border border-gray-300 text-gray-600 rounded-md py-2 px-3 text-sm'>
                            <LuArrowDownZA  className='mr-2 text-lg'/>
                            Sort
                        </button>
                        <button className='flexx border border-gray-300 text-gray-600 rounded-md py-2 px-3 text-sm'>
                            <LuListFilter className='mr-2 text-lg'/>
                            Filter
                        </button>
                    </>
                )}
                {children}
            </section>
        </section>
    )
}

export default PageHeader