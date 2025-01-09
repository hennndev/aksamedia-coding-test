import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import IncomeForm from '../components/forms/IncomeForm'

const AddIncome = () => {
    const navigate = useNavigate()
    return (
        <>
            <PageHeader pageTitle='Add Income'>
                <button className='border border-gray-200 rounded-md text-white text-sm py-2 px-4 bg-primary hover:opacity-90' onClick={() => navigate("/incomes")}>
                    Back to Incomes
                </button>
            </PageHeader>
            <section className='p-6'>
                <IncomeForm/>
            </section>
        </>
    )
}

export default AddIncome