// 3rd party imports
import React from 'react'
import { makeStyles } from '@material-ui/core'
import SignupForm from '../../components/signup_form/SignpForm'

// My imports

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '70vh'
  },
}))

const Signup = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <SignupForm />
    </div>
  )
}

export default Signup

// STYLING
