import { useCookies } from 'react-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const [cookies] = useCookies(['user']);
    if(!cookies.user) {
        return <Navigate to='/login' replace={true}/>
    } else {
        return <Outlet/>
    }
}

export default RequireAuth