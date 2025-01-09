import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')!).render(
      <CookiesProvider>
  <Router>
      <App />
    </Router>
  </CookiesProvider>,
)
