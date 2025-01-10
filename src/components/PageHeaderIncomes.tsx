import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// components
import PageHeader from './PageHeader'
import ModalFilterIncomes from './modals/ModalFilterIncomes'
import PageHeaderButtons from './PageHeaderButtons'


const PageHeaderIncomes = () => {
    const navigate = useNavigate()
    const [openModalSort, setOpenModalSort] = useState<boolean>(false)
    const [openModalFilter, setOpenModalFilter] = useState<boolean>(false)

    return (
        <PageHeader pageTitle='Incomes'>
            {openModalFilter && (
                <ModalFilterIncomes closeModalHandler={() => setOpenModalFilter(false)}/>
            )}
            <PageHeaderButtons
                openModalSortHandler={() => setOpenModalSort(true)}
                openModalFilterHandler={() => setOpenModalFilter(true)}/>
            <button className='rounded-md text-white text-sm py-2 px-4 bg-primary dark:bg-[#222] hover:opacity-90' onClick={() => navigate("/incomes/add-income")}>
                Add new income
            </button>
        </PageHeader>
    )
}

export default PageHeaderIncomes