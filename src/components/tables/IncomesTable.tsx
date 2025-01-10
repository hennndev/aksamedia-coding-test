import { useState } from 'react'
import moment from 'moment'
import { useNavigate, useLocation } from 'react-router-dom'
import { rupiahFormat } from '../../utils/rupiahCurrency'
import queryString from 'query-string'
// components
import ModalConfirm from '../modals/ModalConfirm'

type PropsTypes = {
    incomesData: IncomesTypes
    deleteHandler: (id: string) => void
}

const DATA_LIMIT = 10

const IncomesTable = ({incomesData, deleteHandler}: PropsTypes) => {
    const location = useLocation()
    const navigate = useNavigate()
    const queryStr = queryString.parse(location.search)
    const [openModal, setOpenModal] = useState<null | string>(null)
   
    const openModalDeleteHandler = (id: string) => {
        setOpenModal(id)
    }

    let page = 1 
    if(queryStr.page) {
        page = +queryStr.page
    }

    return (
        <section className="relative overflow-x-auto rounded-xl shadow-box-primary">
            {openModal && (
                <ModalConfirm 
                    modalType='delete' 
                    modalTitle='Are you sure want to delete this income?' 
                    closeHandler={() => setOpenModal(null)}
                    submitHandler={() => {
                        deleteHandler(openModal)
                        setOpenModal(null)
                    }}/>
            )}
            <table className="w-full text-sm text-left bg-white dark:bg-primary">
                <thead className="text-sm text-primary dark:text-gray-100 border-b-2 border-gray-100 dark:border-gray-700">
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
                        <tr className="border-b dark:border-gray-700 text-primary dark:text-gray-100" key={income.id}>
                            <td className="px-6 py-4">
                                {(index + 1) + ((page - 1) * DATA_LIMIT)}
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
                                {moment(income.incomeDate).format("DD-MM-YYYY")}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className='border-none outline-none cursor-pointer bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md mr-2 hover:opacity-90' onClick={() => navigate(`/incomes/edit-income/${income.id}`)}>Edit</button>
                                <button className='border-none outline-none cursor-pointer bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-md hover:opacity-90' onClick={() => openModalDeleteHandler(income.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default IncomesTable