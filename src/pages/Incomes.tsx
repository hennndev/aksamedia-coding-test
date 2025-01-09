import { useEffect, useState } from 'react'
import queryString from 'query-string'
import PageHeader from '../components/PageHeader'
import { incomesStore } from '../store/incomesStore'
import { useNavigate, useLocation } from 'react-router-dom'
import IncomesTable from '../components/tables/IncomesTable'

const Incomes = () => {
    const navigate = useNavigate()
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
            <PageHeader pageTitle='Incomes' isTables>
                <button className='border border-gray-200 rounded-md text-white text-sm py-2 px-4 bg-primary hover:opacity-90' onClick={() => navigate("/incomes/add-income")}>
                    Add new income
                </button>
            </PageHeader>
            <section className='p-6'>
                <IncomesTable incomesData={incomesData} deleteHandler={deleteHandler}/>
                {incomes.length < 1 && <p className='text-gray-500 text-sm mt-5 text-center'>You don't have incomes currenctly</p>}
            </section>
        </>
    )
}

export default Incomes