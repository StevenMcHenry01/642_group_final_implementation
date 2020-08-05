// 3rd party imports
import React from 'react'
import {
  makeStyles,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import { useAppState } from '../../contexts/AppContext'
import MoreVertIcon from '@material-ui/icons/MoreVert'

// My imports
import avatar from '../../assets/images/avatar.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '1rem',
    textAlign: 'center',
  },
  textField: {
    width: '80%',
    marginBottom: '1rem'
  },
}))

const Account = () => {
  const { user } = useAppState()
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <img src={avatar} alt='avatar icon' style={{ width: '60%' }} />
      <Typography variant='h4'>Hello {user.username}!</Typography>
      <Link style={{ textDecoration: 'none' }} to='/new-trip'>
        <Button variant='outlined' color='primary'>
          New Trip
        </Button>
      </Link>
      <div style={{ margin: '2rem 0' }}>
        <Typography variant='h6' style={{marginBottom: '1rem'}}>Personal Info</Typography>
        <TextField
          disabled
          variant='outlined'
          label='username'
          defaultValue={user.username}
          id='standard-start-adornment'
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <MoreVertIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          variant='outlined'
          label='password'
          defaultValue='*********'
          id='standard-start-adornment'
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <MoreVertIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          variant='outlined'
          label='DOB'
          defaultValue='August 17, 1993'
          id='standard-start-adornment'
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <MoreVertIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default Account
