import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import '../../styles/standardInject.scss'

const TopLayout = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppWrapper>{children}</AppWrapper>
    </BrowserRouter>
  )
}

// STYLING
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
`

export default TopLayout
