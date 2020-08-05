// 3rd party imports
import React from 'react'
import { Typography, Button, makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

// My imports
import { useAppState } from '../../../contexts/AppContext'

const useStyles = makeStyles((theme) => ({
  chipButton: {
    backgroundColor: theme.palette.frequent.white,
    borderRadius: '16px',
  },
  topBar: {
    padding: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
  },
  backArrow: {
    color: theme.palette.frequent.white,
    minWidth: '17px',
  },
  appTitle: {
    color: theme.palette.frequent.white,
    margin: '0 auto',
  },
}))

const TopNavbar = () => {
  const history = useHistory()
  const { user } = useAppState()
  const classes = useStyles()

  return (
    <div className={classes.topBar}>
      <div style={{ display: 'flex' }}>
        <Button className={classes.backArrow} onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </Button>

        <Typography variant='h6' className={classes.appTitle}>
          Travel Guardian
        </Typography>
      </div>
      {user ? (
        <Button className={classes.chipButton} variant='contained'>
          Account
        </Button>
      ) : (
        <Link to='/signup' style={{textDecoration: 'none'}}>
          <Button className={classes.chipButton} variant='contained'>
            Sign Up
          </Button>
        </Link>
      )}
    </div>
  )
}

export default TopNavbar
