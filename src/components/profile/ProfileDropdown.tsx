import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { userStore } from '../../store/userStore'
// components
import ModalProfile from '../modals/ModalProfile'
import { LuCircleUserRound } from 'react-icons/lu'
import ModalEditProfile from '../modals/ModalEditProfile'

const ProfileDropdown = () => {
    const { user, setUser } = userStore()
    const [ , , removeCookie ] = useCookies(["user"])
    const [openModalProfile, setOpenModalProfile] = useState<boolean>(false)
    const [openModalEditProfile, setOpenModalEditProfile] = useState<boolean>(false)
    const [isDropdown, setIsDropdown] = useState<boolean>(false)

    const logoutHandler = () => {
        removeCookie("user")
        setUser(null)
    } 
    return (
        <section className='relative flexx space-x-2 border-l-2 border-gray-100 pl-3 py-[17px] cursor-pointer' onClick={() => setIsDropdown(!isDropdown)}>
            {/* modal profile */}
            {openModalProfile && (
                <ModalProfile closeHandler={() => setOpenModalProfile(false)}/>
            )}
            {/* modal edit profile */}
            {openModalEditProfile && (
                <ModalEditProfile closeHandler={() => setOpenModalEditProfile(false)}/>
            )}

            <p className='text-primary text-[15px]'>
                {user?.username}
            </p>
            <LuCircleUserRound className='text-xl text-gray-600'/>
            {isDropdown && (
                <section className='absolute w-[150px] z-50 border border-gray-400 bg-white top-14 right-0 rounded-xl py-4 px-2'>
                    <section className='flex flex-col'>
                        <p className='text-primary py-1.5 px-4 rounded-lg hover:bg-gray-100' onClick={() => setOpenModalProfile(true)}>My Profile</p>
                        <p className='text-primary py-1.5 px-4 rounded-lg hover:bg-gray-100' onClick={() => setOpenModalEditProfile(true)}>Edit Profile</p>
                        <p className='text-primary py-1.5 px-4 rounded-lg hover:bg-gray-100' onClick={logoutHandler}>Logout</p>
                    </section>
                </section>
            )}
        </section>
    )
}

export default ProfileDropdown