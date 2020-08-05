// 3rd party imports
import React from 'react'
import { makeStyles } from '@material-ui/core'

// My imports
import LoginForm from '../../components/login_form/LoginForm'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '70vh',
  },
}))

const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Login
