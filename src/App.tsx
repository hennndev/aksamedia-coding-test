import Login from './pages/Login'
import AuthWrapper from './wrapper/AuthWrapper'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route element={<AuthWrapper/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>
        </Routes>
    )
}
export default App