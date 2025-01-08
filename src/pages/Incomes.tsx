import React from 'react'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'

const Incomes = () => {
    const navigate = useNavigate()
    return (
        <>
            <PageHeader isTables>
                <button className='border border-gray-200 rounded-md text-white text-sm py-2 px-4 bg-primary hover:opacity-90' onClick={() => navigate("/incomes/add-income")}>
                    Add new income
                </button>
            </PageHeader>
            <section className='p-6'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Incomes