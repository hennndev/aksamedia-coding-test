import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import HelmetPage from '../components/HelmetPage'
// components
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
    const [cookies] = useCookies(["user"])
    if(cookies.user) {
        return <Navigate to="/dashboard" replace={true}/>
    }
    return (
        <>
            <HelmetPage title='Login' content='Login page'/>
            <section className="bg-white w-[400px] rounded-2xl shadow-box-primary p-10">
                <section className="text-center">
                    <h1 className='text-2xl text-primary font-bold tracking-tight'>Selamat datang</h1>
                    <p className='text-gray-500 mt-2'>Silahkan isi detailmu untuk login</p>
                </section>
                <LoginForm/>
            </section>
        </>
    )
}

export default Login