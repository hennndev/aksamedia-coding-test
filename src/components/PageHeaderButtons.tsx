import React from 'react'
// components
import { LuListFilter, LuArrowDownZA  } from "react-icons/lu"

type PropsTypes = {
    openModalSortHandler: () => void
    openModalFilterHandler: () => void
}

const PageHeaderButtons = ({openModalSortHandler, openModalFilterHandler}: PropsTypes) => {
    return (
        <>
            <button className='flexx border border-gray-300 text-gray-600 rounded-md py-2 px-3 text-sm' onClick={openModalSortHandler}>
                <LuArrowDownZA  className='mr-2 text-lg'/>
                Sort
            </button>
            <button className='flexx border border-gray-300 text-gray-600 rounded-md py-2 px-3 text-sm' onClick={openModalFilterHandler}>
                <LuListFilter className='mr-2 text-lg'/>
                Filter
            </button>
        </>
    )
}

export default PageHeaderButtons