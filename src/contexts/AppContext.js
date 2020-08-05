import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState()

  const providerValue = {
    user,
    setUser
  }

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('Must be used within a provide :)')
  }
  return context
}