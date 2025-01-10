import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { incomesStore } from '../store/incomesStore'
// components
import HelmetPage from '../components/HelmetPage'
import IncomesTable from '../components/tables/IncomesTable'
import PageHeaderIncomes from '../components/PageHeaderIncomes'

const Incomes = () => {
    const location = useLocation()
    const { incomes, deleteIncome } = incomesStore()
    const [incomesData, setIncomesData] = useState<IncomesTypes>(incomes)
    const queryStr = queryString.parse(location.search)

    useEffect(() => {
        if(queryStr.q) {
            const keyword = queryStr.q as string
            const queryIncomes = incomes.filter((income: IncomeTypes) => income.incomeName.toLowerCase().replace(/\s/g, "").includes(keyword.toLowerCase().replace(/\s/g, "")))
            setIncomesData(queryIncomes)
        } else {
            setIncomesData(incomes)
        }
    }, [queryStr.q])

    const deleteHandler = (id: string) => {
        deleteIncome(id)
        const updatedIncomes = incomesData.filter((income: IncomeTypes) => income.id !== id)
        setIncomesData(updatedIncomes)
    }
    
    return (
        <>
            <HelmetPage title='Incomes' content='Incomes page'/>
            <PageHeaderIncomes/>
            <section className='p-6'>
                <IncomesTable incomesData={incomesData} deleteHandler={deleteHandler}/>
                {incomes.length < 1 && <p className='text-gray-500 text-sm mt-5 text-center'>You don't have incomes currenctly</p>}
            </section>
        </>
    )
}

export default Incomes