import { useNavigate } from 'react-router-dom'
// components
import PageHeader from '../components/PageHeader'
import HelmetPage from '../components/HelmetPage'
import IncomeForm from '../components/forms/IncomeForm'

const EditIncome = () => {
    const navigate = useNavigate()
    return (
        <>
            <HelmetPage title='Edit Income' content='Edit income page'/>
            <PageHeader pageTitle='Edit Income'>
                <button className='rounded-md text-white text-sm py-2 px-4 bg-gray-500 dark:bg-gray-600 hover:opacity-90' onClick={() => navigate("/incomes")}>
                    Back to Incomes
                </button>
            </PageHeader>

            <section className='p-6'>
                <IncomeForm isEdit/>
            </section>
        </>
    )
}

export default EditIncome