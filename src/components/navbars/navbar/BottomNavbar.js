// 3rd party imports

import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Typography, useTheme, Button } from '@material-ui/core'

// My imports
import { useAppState } from '../../../contexts/AppContext'

// ICONS
import BugReportIcon from '@material-ui/icons/BugReport'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const BottomNavbar = () => {
  const theme = useTheme()
  const { user } = useAppState()

  return (
    <BottomBar style={{ backgroundColor: theme.palette.primary.main }}>
      {user ? (
        <>
          <NavLink
            to='/covid-overview'
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <BugReportIcon style={{ fontSize: '2rem' }} />
          </NavLink>
          <NavLink
            to='/day-breakdown/July 7 - 2020'
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <Brightness7Icon style={{ fontSize: '2rem' }} />
          </NavLink>
          <NavLink
            to='/'
            exact
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <AirplanemodeActiveIcon style={{ fontSize: '2rem' }} />
          </NavLink>
          <NavLink
            to='/activities'
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <DirectionsRunIcon style={{ fontSize: '2rem' }} />
          </NavLink>
          <NavLink
            to='/add-activity'
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <AddCircleIcon style={{ fontSize: '2rem' }} />
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to='/covid-overview'
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <BugReportIcon style={{ fontSize: '2rem' }} />
          </NavLink>
          <NavLink
            to='/'
            exact
            activeStyle={{
              color: theme.palette.frequent.white,
              textDecoration: 'none',
            }}
          >
            <AirplanemodeActiveIcon style={{ fontSize: '2rem' }} />
          </NavLink>
        </>
      )}
    </BottomBar>
  )
}

export default BottomNavbar

// STYLING
const BottomBar = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`
