import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { v4 as uuid } from "uuid"
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { incomesStore } from '../../store/incomesStore'
// components
import ModalConfirm from '../modals/ModalConfirm'

type FormTypes = {
    incomeName: string
    incomeType: string
    incomeAmount: number
    incomeDate: Date
    incomeDescription: string
}

type PropsTypes = {
    isEdit?: boolean
}

const IncomeForm = ({isEdit}: PropsTypes) => {
    const params = useParams()
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState<null | FormTypes>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, formState: {errors}, handleSubmit, reset, setValue } = useForm<FormTypes>({
        defaultValues: {
            incomeName: "",
            incomeType: "",
            incomeDate: new Date(),
            incomeDescription: ""
        }
    })
    const { incomes, setIncome, setIncomes } = incomesStore()

    const openModalEditHandler = (values: FormTypes) => {
        setOpenModal(values)
    }

    const submitHandler = (values: FormTypes) => {
        setIsLoading(true)
        const newIncome = {
            id: uuid(),
            ...values
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                if(!isEdit) {
                    setIncome(newIncome)
                } else {
                    const income = getSpecificIncome()
                    const newIncomes = incomes.map(obj => {
                        if(obj.id === income.id) {
                            return {
                                ...obj, 
                                ...values
                            }
                        } else {
                            return obj
                        }
                    })
                    setIncomes(newIncomes)
                }
                reset()
                navigate("/incomes")
                resolve(1)
            }, 2000)
        })
    }

    const getSpecificIncome = (): IncomeTypes => {
        return incomes.find(income => income.id === params.id)
    }

    useEffect(() => {
        if(isEdit && params.id) {
            const income = getSpecificIncome()
            setValue("incomeName", income.incomeName)
            setValue("incomeType", income.incomeType)
            setValue("incomeAmount", income.incomeAmount)
            setValue("incomeDate", income.incomeDate)
            setValue("incomeDescription", income.incomeDescription)
        }
    }, [isEdit, params.id])
    

    return (
        <section className='bg-white rounded-lg p-4 shadow-sm'>
            {openModal && isEdit && (
                <ModalConfirm 
                    modalTitle='Your data income will change permanently, are you sure want to continue?' 
                    modalType='edit' 
                    closeHandler={() => setOpenModal(null)}
                    submitHandler={() => {
                        submitHandler(openModal as FormTypes)
                        setOpenModal(null)
                    }}
                />
            )}
            <form onSubmit={handleSubmit(isEdit ? openModalEditHandler : submitHandler)}>
                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeName" className='text-primary'>Nama pemasukan</label>
                    <input 
                        type="text"
                        id='incomeName'
                        disabled={isLoading}
                        {...register("incomeName", {
                            required: "Nama pemasukan tidak boleh kosong"
                        })}
                        placeholder='Tulis nama pemasukan disini...' 
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                    {errors.incomeName && <p className='text-red-400 text-sm'>{errors.incomeName.message}</p>}
                </section>

                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeType" className='text-primary'>Jenis pemasukan</label>
                    <select 
                        id="incomeType" 
                        disabled={isLoading}
                        {...register("incomeType", {
                            required: "Jenis pemasukan tidak boleh kosong"
                        })}
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'>
                        <option selected value="">Pilih jenis income</option>
                        <option value="Pemasukan aktif">Pemasukan aktif (gaji, bonus, fee, honor, project based, etc)</option>
                        <option value="Pemasukan pasif">Pemasukan pasif(saham, royalti, sewa, affiliate, bunga deposito/tabungan, etc)</option>
                        <option value="Pemasukan bisnis">Pemasukan bisnis (profit, reseller, kemitraan)</option>
                        <option value="Pemasukan digital">Pemasukan digital (NFT, subscription, course, affiliate)</option>
                        <option value="Pemasukan properti">Pemasukan properti (sewa apartemen, sewa rumah, sewa kost, sewa kendaraan, sewa barang elektronik)</option>
                    </select>
                    {errors.incomeType && <p className='text-red-400 text-sm'>{errors.incomeType.message}</p>}
                </section>

                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeAmount" className='text-primary'>Jumlah pemasukan</label>
                    <input 
                        type="number" 
                        disabled={isLoading}
                        id='incomeAmount'
                        {...register("incomeAmount", {
                            required: "Jumlah pemasukan tidak boleh kosong"
                        })}
                        placeholder='Tulis jumlah pemasukan disini...' 
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                    {errors.incomeAmount && <p className='text-red-400 text-sm'>{errors.incomeAmount.message}</p>}
                </section>

                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeAmount" className='text-primary'>Tanggal pemasukan</label>
                    <input 
                        type="date" 
                        disabled={isLoading}
                        id='incomeDate'
                        {...register("incomeDate", {
                            required: "Tanggal pemasukan tidak boleh kosong"
                        })}
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                    {errors.incomeDate && <p className='text-red-400 text-sm'>{errors.incomeDate.message}</p>}
                </section>

                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeDescription" className='text-primary'>Deskripsi pemasukan</label>
                    <textarea 
                        id="incomeDescription" 
                        rows={6} 
                        cols={6} 
                        disabled={isLoading}
                        placeholder='Tulis deskripsi pemasukan disini...' 
                        {...register("incomeDescription", {
                            required: "Deskripsi pemasukan tidak boleh kosong"
                        })}
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'></textarea>
                    {errors.incomeDescription && <p className='text-red-400 text-sm'>{errors.incomeDescription.message}</p>}
                </section>

                <section className='flexx space-x-2'>
                    <button 
                        type='button'
                        disabled={isLoading}
                        onClick={() => navigate("/incomes")}
                        className={clsx("border-none outline-none bg-gray-200 rounded-md text-primary py-2 px-4 hover:opacity-90", isLoading ? "cursor-default" : "cursor-pointer")}>
                        Cancel
                    </button>
                    <button 
                        type='submit'
                        disabled={isLoading}
                        className={clsx("border-none outline-none rounded-md py-2 px-4 hover:opacity-90", isLoading ? "bg-gray-200 text-primary cursor-default" : "bg-primary text-white cursor-pointer")}>
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                </section>
            </form>
        </section>
    )
}

export default IncomeForm