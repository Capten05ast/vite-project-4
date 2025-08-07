import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usecallbacks from './Usecallbacks.jsx'
import Usememo from './Usememos.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Useref from './Useref.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Useref />
    <ToastContainer />
  </BrowserRouter>
    
)
