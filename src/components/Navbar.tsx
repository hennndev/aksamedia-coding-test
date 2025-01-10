import DarkMode from './DarkMode'
import SearchInput from './SearchInput'
import ProfileDropdown from './profile/ProfileDropdown'

const Navbar = () => {
    return (
        <header className='flex-between bg-white dark:bg-primary px-4'>
            <SearchInput/>
            <section className='flexx space-x-5'>
                <DarkMode/>
                <ProfileDropdown/>
            </section>
        </header>   
    )
}

export default Navbar