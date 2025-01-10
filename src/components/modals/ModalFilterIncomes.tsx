import React from 'react'
import { useForm } from 'react-hook-form'
import ModalBackdrop from './ModalBackdrop'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import { useQueryParams } from '../../hooks/useQueryParams'

type PropsTypes = {
    closeModalHandler: () => void
}

type FormTypes = {
    incomeType: string
    minimumIncomeAmount: number
    maximumIncomeAmount: number
    incomeDateFrom: Date
    incomeDateTo: Date
}

const ModalFilterIncomes = ({closeModalHandler}: PropsTypes) => {
    const location = useLocation()
    const queryStr = queryString.parse(location.search)
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormTypes>({
        defaultValues: {
            incomeType: "",
            minimumIncomeAmount: undefined,
            maximumIncomeAmount: undefined,
            incomeDateFrom: undefined,
            incomeDateTo: undefined
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

    return (
        <ModalBackdrop>
            <section className='bg-white max-w-[600px] rounded-lg p-8'>
                <h1 className='text-xl text-primary mb-5'>Filter Incomes</h1>
                <form onSubmit={handleSubmit(submitHandler)} className='mt-2'>
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary'>Jenis pemasukan</label>
                        <select 
                            {...register("incomeType", {
                                required: false
                            })}
                            className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'>
                            <option selected value="">Pilih jenis income</option>
                            <option value="Pemasukan aktif">Pemasukan aktif (gaji, bonus, fee, honor, project based, etc)</option>
                            <option value="Pemasukan pasif">Pemasukan pasif(saham, royalti, sewa, affiliate, bunga deposito/tabungan, etc)</option>
                            <option value="Pemasukan bisnis">Pemasukan bisnis (profit, reseller, kemitraan)</option>
                            <option value="Pemasukan digital">Pemasukan digital (NFT, subscription, course, affiliate)</option>
                            <option value="Pemasukan properti">Pemasukan properti (sewa apartemen, sewa rumah, sewa kost, sewa kendaraan, sewa barang elektronik)</option>
                        </select>
                    </section>
                    {/* jumlah pemasukan */}
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary'>Jumlah pemasukan</label>
                        <section className='w-full flexx space-x-3'>
                            <input 
                                type="number" 
                                {...register("minimumIncomeAmount", {
                                    required: false,
                                })}
                                placeholder='Input minimum amount'
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                            <span>-</span>
                            <input 
                                type="number" 
                                {...register("maximumIncomeAmount", {
                                    required: false,
                                })}
                                placeholder='Input maximum amount'
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                        </section>      
                        {errors.minimumIncomeAmount && <p className='text-red-500 text-sm'>{errors.minimumIncomeAmount.message}</p>}
                        {errors.maximumIncomeAmount && <p className='text-red-500 text-sm'>{errors.maximumIncomeAmount.message}</p>}
                    </section>
                    {/* tanggal pemasukan */}
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary'>Tanggal pemasukan</label>
                        <section className='w-full flexx space-x-3'>
                            <input 
                                type="date" 
                                {...register("incomeDateFrom", {
                                    required: false
                                })}
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                            <span>-</span>
                            <input 
                                type="date" 
                                {...register("incomeDateTo", {
                                    required: false
                                })}
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                        </section>
                    </section>

                    <section className='flexx space-x-2 mt-5'>
                        <button type='button' className='border-none outline-none rounded-md bg-gray-500 py-2 px-4 text-white hover:opacity-90' onClick={closeModalHandler}>Close</button>
                        <button type='button' className='border-none outline-none rounded-md bg-red-500 py-2 px-4 text-white hover:opacity-90' onClick={resetHandler}>Reset</button>
                        <button type='submit' className='border-none outline-none rounded-md py-2 px-4 text-white bg-primary hover:opacity-90'>
                            Filter Incomes
                        </button>
                    </section>
                </form>
            </section>
        </ModalBackdrop>
    )
}

export default ModalFilterIncomes