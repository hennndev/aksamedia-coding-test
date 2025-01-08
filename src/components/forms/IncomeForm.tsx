import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormTypes = {
    incomeName: string
    incomeType: string
    incomeAmount?: number
    incomeDate: Date
    incomeDescription: string
}

const IncomeForm = () => {
    const navigate = useNavigate()

    const { register, formState: {errors}, handleSubmit } = useForm<FormTypes>({
        defaultValues: {
            incomeName: "",
            incomeType: "",
            incomeDate: new Date(),
            incomeDescription: ""
        }
    })

    const submitHandler = (values: FormTypes) => {
        console.log(values)
    }

    return (
        <section className='bg-white rounded-lg p-4 shadow-sm'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeName" className='text-primary'>Nama pemasukan</label>
                    <input 
                        type="text"
                        id='incomeName'
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
                        {...register("incomeType", {
                            required: "Jenis pemasukan tidak boleh kosong"
                        })}
                        className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'>
                        <option selected value="">Pilih jenis income</option>
                        <option value="activeIncome">Pemasukan aktif (gaji, bonus, fee, honor, project based, etc)</option>
                        <option value="passiveIncome">Pemasukan pasif(saham, royalti, sewa, affiliate, bunga deposito/tabungan, etc)</option>
                        <option value="businessIncome">Pemasukan bisnis (profit, reseller, kemitraan)</option>
                        <option value="digitalIncome">Pemasukan digital (NFT, subscription, course, affiliate)</option>
                        <option value="propertyIncome">Pemasukan properti (sewa apartemen, sewa rumah, sewa kost, sewa kendaraan, sewa barang elektronik)</option>
                    </select>
                    {errors.incomeType && <p className='text-red-400 text-sm'>{errors.incomeType.message}</p>}
                </section>

                <section className='flex flex-col space-y-2 mb-4'>
                    <label htmlFor="incomeAmount" className='text-primary'>Jumlah pemasukan</label>
                    <input 
                        type="number" 
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
                        onClick={() => navigate("/incomes")}
                        className='border-none outline-none cursor-pointer bg-gray-200 rounded-md text-primary py-2 px-4 hover:opacity-90'>
                        Cancel
                    </button>
                    <button 
                        type='submit'
                        className='border-none outline-none bg-primary text-white cursor-pointer rounded-md py-2 px-4 hover:opacity-90'>
                        Submit
                    </button>
                </section>
            </form>
        </section>
    )
}

export default IncomeForm