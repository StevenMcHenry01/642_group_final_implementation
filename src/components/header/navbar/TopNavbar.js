// 3rd party imports
import React from 'react'
import { Typography, useTheme, Button } from '@material-ui/core'
import styled from 'styled-components'

// My imports

const TopNavbar = () => {
  const theme = useTheme()

  return (
    <TopBar style={{ backgroundColor: theme.palette.primary.main }}>
      <div style={{ display: 'flex' }}>
        <Button style={{ color: theme.palette.frequent.white }}>←</Button>
        <Typography
          variant='h6'
          style={{ color: theme.palette.frequent.white }}
        >
          Travel Guardian
        </Typography>
      </div>
      <Button variant='contained'>Account</Button>
    </TopBar>
  )
}

export default TopNavbar

// STYLING

const TopBar = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
