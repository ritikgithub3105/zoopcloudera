import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import {Analytics} from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <App />
        <Analytics />
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
)
