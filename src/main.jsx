import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './pages/Home.jsx'
// import Login from './pages/Login.jsx';
// import Registro from './pages/Registro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    {/*<Registro />  */} 
  </StrictMode>,
)
