// 3rd party imports
import React from 'react'
import { Typography, useTheme, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// My imports

const TopNavbar = () => {
  const theme = useTheme()
  const history = useHistory()

  return (
    <TopBar style={{ backgroundColor: theme.palette.primary.main }}>
      <div style={{ display: 'flex' }}>
        <Button
          style={{ color: theme.palette.frequent.white, minWidth: '17px' }}
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon />
        </Button>
        <Typography
          variant='h6'
          style={{ color: theme.palette.frequent.white, margin: '0 auto' }}
        >
          Travel Guardian
        </Typography>
      </div>
      <AccountButton variant='contained'>Account</AccountButton>
    </TopBar>
  )
}

export default TopNavbar

// STYLING

const TopBar = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`

const AccountButton = styled(Button)`
  background-color: #ffffff;
  border-radius: 16px;
`
