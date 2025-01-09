import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { incomesStore } from '../../store/incomesStore'
import { rupiahFormat } from '../../utils/rupiahCurrency'
import { useNavigate, useLocation } from 'react-router-dom'

type PropsTypes = {
    incomesData: IncomesTypes
}

const IncomesTable = ({incomesData}: PropsTypes) => {
    const navigate = useNavigate()
    const { deleteIncome } = incomesStore()

    return (
        <section className="relative overflow-x-auto rounded-xl shadow-box-primary">
            <table className="w-full text-sm text-left bg-white">
                <thead className="text-sm text-primary border-b-2 border-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-medium">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium text-right">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {incomesData.map((income: IncomeTypes, index) => (
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {income.incomeName}
                            </th>
                            <td className="px-6 py-4">
                                {income.incomeType}
                            </td>
                            <td className="px-6 py-4">
                                {rupiahFormat(income.incomeAmount)}
                            </td>
                            <td className="px-6 py-4">
                                {new Date(income.incomeDate).toDateString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className='border-none outline-none cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:opacity-90' onClick={() => navigate(`/incomes/edit-income/${income.id}`)}>Edit</button>
                                <button className='border-none outline-none cursor-pointer bg-red-500 text-white py-2 px-4 rounded-md hover:opacity-90' onClick={() => deleteIncome(income.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default IncomesTable