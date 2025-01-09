import SearchInput from './SearchInput'
import ProfileDropdown from './profile/ProfileDropdown'
import { LuMoon, LuMail, LuBell } from "react-icons/lu"

const Navbar = () => {
    return (
        <header className='flex-between bg-white px-4'>
            <SearchInput/>
            <section className='flexx space-x-5'>
                <LuMail className='text-xl text-gray-600 cursor-pointer'/>
                <LuBell className='text-xl text-gray-600 cursor-pointer'/>
                <LuMoon className='text-xl text-gray-600 cursor-pointer'/>
                <ProfileDropdown/>
            </section>
        </header>   
    )
}

export default Navbar