import SearchInput from './SearchInput'
import { userStore } from '../store/userStore'
import { LuCircleUserRound, LuMoon, LuMail, LuBell } from "react-icons/lu"


const Navbar = () => {
    const { user } = userStore()
    return (
        <header className='flex-between bg-white px-4'>
            <SearchInput/>
            <section className='flexx space-x-5'>
                <LuMail className='text-xl text-gray-600 cursor-pointer'/>
                <LuBell className='text-xl text-gray-600 cursor-pointer'/>
                <LuMoon className='text-xl text-gray-600 cursor-pointer'/>
                <section className='flexx space-x-2 border-l-2 border-gray-100 pl-3 py-[17px] cursor-pointer'>
                    <p className='text-primary text-[15px]'>
                        {user?.username}
                    </p>
                    <LuCircleUserRound className='text-xl text-gray-600'/>
                </section>
            </section>
        </header>   
    )
}

export default Navbar