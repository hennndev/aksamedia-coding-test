import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { incomesStore } from '../store/incomesStore'
// components
import moment from 'moment'
import HelmetPage from '../components/HelmetPage'
import IncomesTable from '../components/tables/IncomesTable'
import PageHeaderIncomes from '../components/PageHeaderIncomes'

const Incomes = () => {
    const location = useLocation()
    const { incomes, deleteIncome } = incomesStore()
    const [incomesData, setIncomesData] = useState<IncomesTypes>(incomes)
    const queryStr = queryString.parse(location.search)

    const filteringDataIncomes = () => {
        const queryIncomes = incomes.filter((income: IncomeTypes) => {
            if(queryStr.q) {
                const keyword = queryStr.q as string
                return income.incomeName.toLowerCase().replace(/\s/g, "").includes(keyword.toLowerCase().replace(/\s/g, ""))
            } else {
                return income
            }
        }).filter((income: IncomeTypes) => {
            if(queryStr.incomeType) {
                const incomeType = queryStr.incomeType as string
                return income.incomeType === incomeType.replace("-", " ")
            } else {
                return income
            }
        }).filter((income: IncomeTypes) => {
            if(queryStr.minimumIncomeAmount && !queryStr.maximumIncomeAmount) {
                const minimumIncomeAmount = parseInt(queryStr.minimumIncomeAmount as string)
                return income.incomeAmount >= minimumIncomeAmount 
            } else if(queryStr.maximumIncomeAmount && !queryStr.minimumIncomeAmount) {
                const maximumIncomeAmount = parseInt(queryStr.maximumIncomeAmount as string)
                return income.incomeAmount <= maximumIncomeAmount 
            } else if(queryStr.minimumIncomeAmount && queryStr.maximumIncomeAmount)  {
                const minimumIncomeAmount = parseInt(queryStr.minimumIncomeAmount as string)
                const maximumIncomeAmount = parseInt(queryStr.maximumIncomeAmount as string)
                return income.incomeAmount >= minimumIncomeAmount && income.incomeAmount <= maximumIncomeAmount
            } else {
                return income
            }
        }).filter((income: IncomeTypes) => {
            if(queryStr.incomeDateFrom && !queryStr.incomeDateTo) {
                const incomeDateFrom = queryStr.incomeDateFrom as string
                return moment(income.incomeDate).startOf("day") >= moment(incomeDateFrom, "DD-MM-YYYY").startOf("day")
            } else if(queryStr.incomeDateTo && !queryStr.incomeDateFrom) {
                const incomeDateTo = queryStr.incomeDateTo as string
                return moment(income.incomeDate).startOf("day") <= moment(incomeDateTo, "DD-MM-YYYY").startOf("day")
            } else if(queryStr.incomeDateFrom && queryStr.incomeDateTo) {
                const incomeDateFrom = queryStr.incomeDateFrom as string
                const incomeDateTo = queryStr.incomeDateTo as string
                return moment(income.incomeDate).startOf("day") >= moment(incomeDateFrom, "DD-MM-YYYY").startOf("day") && moment(income.incomeDate).startOf("day") <= moment(incomeDateTo, "DD-MM-YYYY").startOf("day")
            } else {
                return income
            }
        })
        setIncomesData(queryIncomes)
    }

    useEffect(() => {
        if(queryStr.q || queryStr.incomeType || queryStr.minimumIncomeAmount || queryStr.maximumIncomeAmount || queryStr.incomeDateFrom || queryStr.incomeDateTo) {
            filteringDataIncomes()
        } else {
            setIncomesData(incomes)
        }
    }, [queryStr.q, queryStr.incomeType, queryStr.minimumIncomeAmount, queryStr.maximumIncomeAmount, queryStr.incomeDateFrom, queryStr.incomeDateTo])

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