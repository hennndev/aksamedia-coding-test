import DarkMode from './DarkMode'
import SearchInput from './SearchInput'
import { LuMenu } from "react-icons/lu";
import ProfileDropdown from './profile/ProfileDropdown'

type PropsTypes = {
    openSidebarHandler: () => void
}

const Navbar = ({openSidebarHandler}: PropsTypes) => {
    return (
        <header className='flex-between bg-white dark:bg-primary px-4'>
            <section className='flexx'>
                <LuMenu className='text-2xl xl:hidden mr-3 text-gray-500 dark:text-gray-100' onClick={openSidebarHandler}/>
                <SearchInput/>
            </section>
            <section className='flexx space-x-5'>
                <DarkMode/>
                <ProfileDropdown/>
            </section>
        </header>   
    )
}

export default Navbar