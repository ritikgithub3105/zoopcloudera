import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageWrapper from './pages/PageWrapper'
import Footer from './components/Footer'
import Team from './components/Home/Team'
import NotFound from './pages/NotFound'
import ServicePage from './pages/ServicePage'
import servicesData from './data/Services'

const App = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
        {Object.keys(servicesData).map((serviceId) => (
          <Route
            key={serviceId}
            path={`/services/${serviceId}`}
            element={<PageWrapper><ServicePage serviceId={serviceId} /></PageWrapper>}
          />
        ))}
        <Route path='*' element={<><PageWrapper><NotFound /></PageWrapper></>} />
      </Routes>
    </div>
  )
}

export default App