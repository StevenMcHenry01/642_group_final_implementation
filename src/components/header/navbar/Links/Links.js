// 3rd party imports
import React from 'react'
import { Typography } from '@material-ui/core'

// My imports
import LinkActive from './LinkActive'

const Links = () => {
  return (
    <React.Fragment>
      <LinkActive to='/'>
        <Typography>Home</Typography>
      </LinkActive>
      <LinkActive to='/otherPage'>
        <Typography>Other Page</Typography>
      </LinkActive>
    </React.Fragment>
  )
}

export default Links
