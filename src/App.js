// third party imports
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

// my imports
import TopLayout from './components/wrappers/TopLayout'
import TopNavbar from './components/navbars/navbar/TopNavbar'
import BottomNavbar from './components/navbars/navbar/BottomNavbar'
import { Routes } from './Routes'
import { theme } from './styles/theme'
import { AppProvider } from './contexts/AppContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <TopLayout>
          <TopNavbar />
          <Routes />
          <BottomNavbar />
        </TopLayout>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
