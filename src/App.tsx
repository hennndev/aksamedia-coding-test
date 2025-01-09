import Login from './pages/Login'
import AuthWrapper from './wrapper/AuthWrapper'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainWrapper from './wrapper/MainWrapper'
import Dashboard from './pages/Dashboard'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Plans from './pages/Plans'
import AddIncome from './pages/AddIncome'
import EditIncome from './pages/EditIncome'
import RequireAuth from './components/RequireAuth'

const App = () => {
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