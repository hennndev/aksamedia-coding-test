import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { userStore } from './store/userStore'
import MainWrapper from './wrapper/MainWrapper'
import AuthWrapper from './wrapper/AuthWrapper'
import RequireAuth from './wrapper/RequireAuth'
import { Routes, Route, Navigate } from 'react-router-dom'
// pages
import Login from './pages/Login'
import Plans from './pages/Plans'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Dashboard from './pages/Dashboard'
import AddIncome from './pages/AddIncome'
import EditIncome from './pages/EditIncome'

const App = () => {
    const [cookies] = useCookies(['user'])
    const { setUser } = userStore()

    useEffect(() => {
        if(!cookies.user) {
            setUser(null)
            localStorage.removeItem("user")
        }
    }, [cookies.user])
    
    return (
        <Routes>     
            <Route element={<AuthWrapper/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
            <Route element={<RequireAuth/>}>
                <Route element={<MainWrapper/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/incomes" element={<Incomes/>}/>
                    <Route path="/incomes/add-income" element={<AddIncome/>}/>
                    <Route path="/incomes/edit-income/:id" element={<EditIncome/>}/>
                    <Route path="/expenses" element={<Expenses/>}/>
                    <Route path="/plans" element={<Plans/>}/>
                </Route>
            </Route>
            <Route path="*" element={<InitialPage/>}/>
        </Routes>
    )
}

const InitialPage = () => {
    return <Navigate to="/login" replace={true}/>
}

export default App