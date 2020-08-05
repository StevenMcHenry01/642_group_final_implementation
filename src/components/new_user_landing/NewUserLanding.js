// 3rd party imports
import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import { Typography, Button } from '@material-ui/core'

// My imports
import plane from '../../assets/images/undraw_aircraft_fbvl.svg'
import { Link } from 'react-router-dom'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
    padding: '1rem',
  },
  signUp: {
    display: 'inline-block',
  },
}))

const NewUserLanding = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography variant='h4'>Welcome to Travel Guardian!</Typography>
      <img style={{ width: '90%' }} src={plane} alt='airplane' />
      <Typography
        variant='h6'
        style={{ margin: '1rem 0', fontStyle: 'italic' }}
      >
        "We are dedicated to being your goto solution for traveling during the
        Covid-19 pandemic."
      </Typography>
      <Link to='/signup'>

      <Button variant='contained' color='primary' className={classes.signUp}>
        Create an account
      </Button>
      </Link>
      <Typography>to start planning your next safe trip.</Typography>
      <Typography style={{ color: grey[500] }}>
        Already have an account? <Link to='/login' style={{textDecoration: 'none'}}>Login</Link>
      </Typography>
      <Typography variant='h6' style={{ margin: '1rem 0' }}>
        OR
      </Typography>
      <Typography>
        Jump right in by looking up a destination's risks!
      </Typography>
      <div style={{ display: 'flex', width: '100%' }}>
        <TextField style={{width: '100%', marginRight: '5px'}} variant='filled' label='destination' />
        <Button variant='contained' color='primary'>
          Search
        </Button>
      </div>
    </div>
  )
}

export default NewUserLanding

// STYLING
