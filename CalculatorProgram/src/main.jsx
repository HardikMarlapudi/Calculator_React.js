import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './Calculator.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
    <Footer />
  </StrictMode>,
)
