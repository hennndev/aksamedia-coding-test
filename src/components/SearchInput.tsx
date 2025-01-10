import { useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useQueryParams } from '../hooks/useQueryParams'
// components
import { LuSearch, LuX } from 'react-icons/lu'
import {DebounceInput} from 'react-debounce-input'

const SearchInput = () => {
    const location = useLocation()
    const queryStr = queryString.parse(location.search)
    const [searchTerm, setSearchTerm] = useState<string>(queryStr.q as string || "")
    const { setSearchParams, newQueryParameters, handleSetQueries } = useQueryParams()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchTerm(value)
        handleSetQueries(queryStr)
        if(value) {
            newQueryParameters.set('q', value)
        } else {
            newQueryParameters.delete('q')  
        }
        setSearchParams(newQueryParameters)		
    }

    const clearHandler = () => {
        setSearchTerm('')
        handleSetQueries(queryStr)
        newQueryParameters.delete('q')
        setSearchParams(newQueryParameters)
    }

    return (
        <section className='flexx space-x-2 w-[200px] lg:w-[400px]'>
            <section className='flexx space-x-2 flex-1'>
                <LuSearch className='text-gray-600 dark:text-gray-200 text-lg mr-1'/>
                <DebounceInput debounceTimeout={100} type="text" value={searchTerm} onChange={changeHandler} placeholder='Search anything...' className='flex-1 outline-none bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-700 dark:text-gray-200 text-[15px]'/>
            </section>
            {searchTerm && <LuX className='text-red-500 dark:text-red-400 cursor-pointer' onClick={clearHandler}/>}
        </section>
    )
}

export default SearchInput