import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthWrapper = () => {
    return (
        <main className='flex-center bg-gray-50 min-h-screen'>
            <Outlet/>
        </main>
    )
}

export default AuthWrapper