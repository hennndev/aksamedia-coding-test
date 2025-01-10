import React from 'react'
import ModalBackdrop from './ModalBackdrop'

type PropsTypes = {
    closeModalHandler: () => void
}

const ModalFilterIncomes = ({closeModalHandler}: PropsTypes) => {
    return (
        <ModalBackdrop>
            <section className='bg-white max-w-[600px] rounded-lg p-8'>
                <h1 className='text-xl text-primary mb-5'>Filter Incomes</h1>
                <section className='mt-2'>
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary'>Jenis pemasukan</label>
                        <select className='border border-[#ccc] rounded-md py-2.5 px-4 outline-none'>
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
                                placeholder='Input minimum amount'
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                            <span>-</span>
                            <input 
                                type="number" 
                                placeholder='Input maximum amount'
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                        </section>      
                    </section>
                    {/* tanggal pemasukan */}
                    <section className='flex flex-col space-y-2 mb-4'>
                        <label className='text-primary'>Tanggal pemasukan</label>
                        <section className='w-full flexx space-x-3'>
                            <input 
                                type="date" 
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>
                            <span>-</span>
                            <input 
                                type="date" 
                                className='w-full border border-[#ccc] rounded-md py-2.5 px-4 outline-none'/>

                        </section>
                       
                    </section>

                    <section className='flexx space-x-2 mt-5'>
                        <button className='border-none outline-none rounded-md bg-gray-500 py-2 px-4 text-white hover:opacity-90' onClick={closeModalHandler}>Close</button>
                        <button className='border-none outline-none rounded-md bg-red-500 py-2 px-4 text-white hover:opacity-90' onClick={closeModalHandler}>Reset</button>
                        <button className='border-none outline-none rounded-md py-2 px-4 text-white bg-primary hover:opacity-90'>
                            Filter Incomes
                        </button>
                    </section>
                </section>
            </section>
        </ModalBackdrop>
    )
}

export default ModalFilterIncomes