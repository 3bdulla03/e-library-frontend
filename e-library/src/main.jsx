import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.querySelector('#root')).render(<BrowserRouter><App /></BrowserRouter>)
