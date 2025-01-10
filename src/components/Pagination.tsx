import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useQueryParams } from '../hooks/useQueryParams'
import { useNavigate, useLocation } from 'react-router-dom'
import { incomesStore } from '../store/incomesStore'
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import clsx from 'clsx'


const DATA_LIMIT = 10

type PropsTypes = {
    currentDataLength: number
    incomes: IncomesTypes
}

const Pagination = ({currentDataLength, incomes}: PropsTypes) => {
    const location = useLocation()
    const queryStr = queryString.parse(location.search)
    const [page, setPage] = useState<number>(parseInt(queryStr.page as string) || 1)
    const { setSearchParams, newQueryParameters, handleSetQueries } = useQueryParams()

    const handleNext = (value: number) => {
        handleSetQueries(queryStr)
        setPage(value)
        newQueryParameters.set('page', String(value))
        setSearchParams(newQueryParameters)
    }
    const handlePrev = (value: number) => {
        handleSetQueries(queryStr)
        if(page === 2) {
            setPage(value)
            newQueryParameters.delete('page')
        } else {
            setPage(value)
            newQueryParameters.set('page', String(value))
        }
        setSearchParams(newQueryParameters)
    }
    
    const handleClickPageNumber = (value: number) => {
        handleSetQueries(queryStr)
        if(value === 1) {
            setPage(value)
            newQueryParameters.delete("page")
        } else {
            setPage(value)
            newQueryParameters.set('page', String(value))
        }
        setSearchParams(newQueryParameters)
    }

    const isNext = (((page + 1) * DATA_LIMIT) - currentDataLength) < incomes.length
    const isCondition = page < 4 ? false : (((page - 1) * DATA_LIMIT) + currentDataLength) > (((page - 2) * DATA_LIMIT)) 
    let firstNumber = 1 + (isCondition ? Math.floor((((((page - 1)) + currentDataLength) / 3) - 0.1)) * 3 : 0)
    const secondNumber = firstNumber + 1
    const thirdNumber = firstNumber + 2


    useEffect(() => {
        if(queryStr.page && +queryStr.page === 1) {
            setPage(1)
            newQueryParameters.delete("page")
            setSearchParams(newQueryParameters)
        }
    }, [queryStr.page])
    
    useEffect(() => {
        if(queryStr.page && +queryStr.page > 1 && currentDataLength < 1) {
            setPage(1)
            newQueryParameters.delete("page")
            setSearchParams(newQueryParameters)
        }
    }, [queryStr.page, currentDataLength])
    
    return (
        <section className='flex-center my-5'>
            <section className='flexx space-x-8'>
                <button 
                    className={clsx("flexx border-none outline-none", page === 1 ? "cursor-default text-gray-300 hover:text-gray-300 dark:text-gray-700" : "cursor-pointer text-gray-700 dark:text-gray-200")} 
                    onClick={() => page > 1 && handlePrev(page - 1)}>
                    <LuArrowLeft className='mr-2'/>
                    Back
                </button>
                <section className='flexx space-x-5'>
                    <section className={clsx("py-1 px-3 rounded-md", page === firstNumber ? "bg-gray-300 dark:bg-gray-200" : "")}>
                        <p className={`cursor-pointer text-gray-700 dark:text-gray-500`} onClick={() => handleClickPageNumber(firstNumber)}>
                            {firstNumber}
                        </p>
                    </section>
                    {((secondNumber - 1) * DATA_LIMIT) < incomes.length && (
                        <section className={clsx("py-1 px-3 rounded-md", page === secondNumber ? "bg-gray-300 dark:bg-gray-200" : "")}>
                            <p className={`cursor-pointer text-gray-700 dark:text-gray-500`}  onClick={() => handleClickPageNumber(secondNumber)}>
                                {secondNumber}
                            </p>
                        </section>
                    )}
                    {((thirdNumber - 1) * DATA_LIMIT) < incomes.length && (
                        <section className={clsx("py-1 px-3 rounded-md", page === thirdNumber ? "bg-gray-300 dark:bg-gray-200" : "")}>
                            <p className={`cursor-pointer text-gray-700 dark:text-gray-500`} onClick={() => handleClickPageNumber(thirdNumber)}>
                                {thirdNumber}
                            </p>
                        </section>
                    )}
                </section>
                <button
                    disabled={!isNext}
                    className={clsx("flexx border-none outline-none", !isNext ? "cursor-default text-gray-300 hover:text-gray-300 dark:text-gray-700" : "cursor-pointer text-gray-700 dark:text-gray-200")} onClick={() => isNext && handleNext(page + 1)}>
                    Next
                    <LuArrowRight className='ml-1'/>
                </button>
            </section>
        </section>
    )
}

export default Pagination