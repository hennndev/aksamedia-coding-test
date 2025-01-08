import Login from './pages/Login'
import AuthWrapper from './wrapper/AuthWrapper'
import { Routes, Route } from 'react-router-dom'
import MainWrapper from './wrapper/MainWrapper'
import Dashboard from './pages/Dashboard'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Plans from './pages/Plans'
import AddIncome from './pages/AddIncome'

const App = () => {
    return (
        <Routes>
            <Route element={<AuthWrapper/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>

            <Route element={<MainWrapper/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/incomes" element={<Incomes/>}/>
                <Route path="/incomes/add-income" element={<AddIncome/>}/>
                <Route path="/expenses" element={<Expenses/>}/>
                <Route path="/plans" element={<Plans/>}/>
            </Route>
        </Routes>
    )
}
export default App