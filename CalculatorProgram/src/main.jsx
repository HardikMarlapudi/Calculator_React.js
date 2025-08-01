import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Calculator from './Calculator.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Calculator />
    <Footer />
  </StrictMode>,
)
