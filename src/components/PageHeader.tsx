import React from 'react'
// components
import { LuListFilter, LuArrowDownZA  } from "react-icons/lu"

type PropsTypes = {
    pageTitle: string
    children: React.ReactNode
}

const PageHeader = ({pageTitle, children}: PropsTypes) => {
    return (
        <section className='flex-between border-t-2 border-gray-100 bg-white py-3 px-4 shadow-box-primary'>
            <h1 className='text-primary font-medium capitalize'>{pageTitle}</h1>
            <section className='flexx space-x-3'>
                {children}
            </section>
        </section>
    )
}

export default PageHeader