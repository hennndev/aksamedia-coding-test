import React from 'react'
import { useLocation } from 'react-router-dom'
import { LuListFilter, LuArrowDownZA  } from "react-icons/lu"

type PropsTypes = {
    pageTitle: string
    isTables?: boolean
    children: React.ReactNode
}

const PageHeader = ({pageTitle, isTables, children}: PropsTypes) => {
    return (
        <section className='flex-between border-t-2 border-gray-100 bg-white py-3 px-4 shadow-box-primary'>
            <h1 className='text-primary font-medium capitalize'>{pageTitle}</h1>
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