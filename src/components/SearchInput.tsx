import { useState } from 'react'
import queryString from 'query-string'
import { LuSearch, LuX } from 'react-icons/lu'
import { useLocation } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import { useQueryParams } from '../hooks/useQueryParams'

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
        <section className='flexx space-x-2 w-[400px]'>
            <section className='flexx space-x-2 flex-1'>
                <LuSearch className='text-gray-600 text-lg mr-1'/>
                <DebounceInput debounceTimeout={100} type="text" value={searchTerm} onChange={changeHandler} placeholder='Search anything...' className='flex-1 outline-none placeholder:text-gray-500 text-gray-700 text-[15px]'/>
            </section>
            {searchTerm && <LuX className='text-red-500 cursor-pointer' onClick={clearHandler}/>}
        </section>
    )
}

export default SearchInput