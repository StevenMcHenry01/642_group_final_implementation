// 3rd party imports
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { grey, red } from '@material-ui/core/colors'

const LinkActive = ({ children, to }) => (
  <NavLinkStyled
    exact
    activeStyle={{
      color: grey[50],
      textDecoration: 'none',
      borderBottom: `1px solid ${red[800]}`,
      paddingBottom: '3px',
    }}
    to={to}
  >
    {children}
  </NavLinkStyled>
)

export default LinkActive

// STYLING
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${grey[400]};
  margin: 0 0.75rem;
  /* Needed to keep spacing consistent */
  border-bottom: 1px solid transparent;
  padding-bottom: 3px;
`
