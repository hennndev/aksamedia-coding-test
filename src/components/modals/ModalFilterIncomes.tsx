import { useEffect } from 'react'
import moment from 'moment'
import queryString from 'query-string'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useQueryParams } from '../../hooks/useQueryParams'
// components
import ModalBackdrop from './ModalBackdrop'

type PropsTypes = {
    closeModalHandler: () => void
}

type FormTypes = {
    incomeType: string
    minimumIncomeAmount: number
    maximumIncomeAmount: number
    incomeDateFrom: Date | string
    incomeDateTo: Date | string
}

const ModalFilterIncomes = ({closeModalHandler}: PropsTypes) => {
    const location = useLocation()
    const queryStr = queryString.parse(location.search)
    const { register, handleSubmit, reset, setValue } = useForm<FormTypes>({
        defaultValues: {
            incomeType: "",
        }
    }) 
    const { setSearchParams, newQueryParameters, handleSetQueries } = useQueryParams()

    const submitHandler = (values: FormTypes) => {
        handleSetQueries(queryStr)
        if(values.incomeType) {
            newQueryParameters.delete("incomeType")
            newQueryParameters.set("incomeType", values.incomeType.replace(/\s/g, "-"))
        } else {
            newQueryParameters.delete("incomeType")
        }
        
        if(values.minimumIncomeAmount) {
            newQueryParameters.delete("minimumIncomeAmount")
            newQueryParameters.set("minimumIncomeAmount", String(values.minimumIncomeAmount))
        } else {
            newQueryParameters.delete("minimumIncomeAmount")
        }

        if(values.maximumIncomeAmount) {
            newQueryParameters.delete("maximumIncomeAmount")
            newQueryParameters.set("maximumIncomeAmount", String(values.maximumIncomeAmount))
        } else {
            newQueryParameters.delete("maximumIncomeAmount")
        }

        if(values.incomeDateFrom) {
            newQueryParameters.delete("incomeDateFrom")
            newQueryParameters.set("incomeDateFrom", moment(values.incomeDateFrom).format("DD-MM-YYYY"))
        } else {
            newQueryParameters.delete("incomeDateFrom")
        }
        
        if(values.incomeDateTo) {
            newQueryParameters.delete("incomeDateTo")
            newQueryParameters.set("incomeDateTo", moment(values.incomeDateTo).format("DD-MM-YYYY"))
        } else {
            newQueryParameters.delete("incomeDateTo")
        }
        setSearchParams(newQueryParameters)
        closeModalHandler()
    }

    const resetHandler = () => {
        setSearchParams(newQueryParameters)
        reset()
        closeModalHandler()
    }

    useEffect(() => {
        if(queryStr.incomeType) {
            const incomeType = queryStr.incomeType as string
            setValue("incomeType", incomeType.replace("-", " "))
        } 
        if(queryStr.minimumIncomeAmount) {
            setValue("minimumIncomeAmount", +queryStr.minimumIncomeAmount)
        }
        if(queryStr.maximumIncomeAmount) {
            setValue("maximumIncomeAmount", +queryStr.maximumIncomeAmount)
        }
        if(queryStr.incomeDateFrom) {
            setValue("incomeDateFrom", moment(queryStr.incomeDateFrom as string, "DD-MM-YYYY").format('YYYY-MM-DD'))
        }
        if(queryStr.incomeDateTo) {
            setValue("incomeDateTo", moment(queryStr.incomeDateTo as string, "DD-MM-YYYY").format('YYYY-MM-DD'))
        }
    }, [location.search])
    

    return (
        <ModalBackdrop>
            <section className='bg-white dark:bg-primary max-w-[400px] md:max-w-[600px] rounded-lg py-8 px-4 md:px-8'>
                <h1 className='text-xl text-primary dark:text-gray-100 mb-5'>Filter Incomes</h1>
                <form onSubmit={handleSubmit(submitHandler)} className='mt-2'>
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary dark:text-gray-100'>Jenis pemasukan</label>
                        <select 
                            {...register("incomeType", {
                                required: false
                            })}
                            className='border border-[#ccc] dark:border-gray-600 dark:text-gray-100 bg-transparent dark:bg-primary rounded-md py-2.5 px-4 outline-none'>
                            <option value="">Pilih jenis income</option>
                            <option value="Pemasukan aktif">Pemasukan aktif (gaji, bonus, fee, honor, project based, etc)</option>
                            <option value="Pemasukan pasif">Pemasukan pasif(saham, royalti, sewa, affiliate, bunga deposito/tabungan, etc)</option>
                            <option value="Pemasukan bisnis">Pemasukan bisnis (profit, reseller, kemitraan)</option>
                            <option value="Pemasukan digital">Pemasukan digital (NFT, subscription, course, affiliate)</option>
                            <option value="Pemasukan properti">Pemasukan properti (sewa apartemen, sewa rumah, sewa kost, sewa kendaraan, sewa barang elektronik)</option>
                        </select>
                    </section>
                    {/* jumlah pemasukan */}
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary dark:text-gray-100'>Jumlah pemasukan</label>
                        <section className='w-full flexx space-x-1 md:space-x-3'>
                            <input 
                                type="number" 
                                {...register("minimumIncomeAmount", {
                                    required: false,
                                })}
                                placeholder='Input minimum amount'
                                className='w-full border border-[#ccc] dark:border-gray-600 dark:text-gray-100 bg-transparent rounded-md py-2.5 px-4 outline-none'/>
                            <span className='text-primary dark:text-gray-200'>-</span>
                            <input 
                                type="number" 
                                {...register("maximumIncomeAmount", {
                                    required: false,
                                })}
                                placeholder='Input maximum amount'
                                className='w-full border border-[#ccc] dark:border-gray-600 dark:text-gray-100 bg-transparent rounded-md py-2.5 px-4 outline-none'/>
                        </section>      
                    </section>
                    {/* tanggal pemasukan */}
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary dark:text-gray-100'>Tanggal pemasukan</label>
                        <section className='w-full flexx space-x-1 md:space-x-3'>
                            {/* tanggal awal */}
                            <input 
                                type="date" 
                                {...register("incomeDateFrom", {
                                    required: false
                                })}
                                className='w-full border border-[#ccc] dark:border-gray-600 dark:text-gray-100 bg-transparent rounded-md py-2.5 px-4 outline-none'/>
                            <span className='text-primary dark:text-gray-200'>-</span>
                            {/* tanggal akhir */}
                            <input 
                                type="date" 
                                {...register("incomeDateTo", {
                                    required: false
                                })}
                                className='w-full border border-[#ccc] dark:border-gray-600 dark:text-gray-100 bg-transparent rounded-md py-2.5 px-4 outline-none'/>
                        </section>
                    </section>

                    <section className='flexx space-x-2 mt-5'>
                        <button type='button' className='border-none outline-none rounded-md bg-gray-500 dark:bg-gray-600 py-2 px-4 text-white hover:opacity-90' onClick={closeModalHandler}>Close</button>
                        <button type='button' className='border-none outline-none rounded-md bg-red-500 dark:bg-red-700 py-2 px-4 text-white hover:opacity-90' onClick={resetHandler}>Reset</button>
                        <button type='submit' className='border-none outline-none rounded-md py-2 px-4 text-white bg-primary dark:bg-[#222] hover:opacity-90'>
                            Filter Incomes
                        </button>
                    </section>
                </form>
            </section>
        </ModalBackdrop>
    )
}

export default ModalFilterIncomes