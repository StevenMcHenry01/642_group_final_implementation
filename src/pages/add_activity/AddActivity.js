// 3rd party imports
import React from 'react'
import { Box, TextField, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

// My imports

const AddActivityPage = () => {
  return (
    <React.Fragment>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        m={4}
      >
        <Typography variant='h4' style={{ margin: '1rem 0' }}>
          Add a new activity
        </Typography>
        <Box m={2} display='flex' flexDirection='column'>
          <label htmlFor='activity-name'>Name of Activity</label>
          <TextField type='text' id='activity-name' />
        </Box>
        <Box m={2} display='flex' flexDirection='column'>
          <label htmlFor='activity-type'>Type of Activity</label>
          <TextField type='text' id='activity-type' />
        </Box>
        <Box m={2} display='flex' flexDirection='column'>
          <label htmlFor='activity-address'>Address</label>
          <TextField type='text' id='activity-address' />
        </Box>
        <Box m={2} display='flex' flexDirection='column'>
          <label htmlFor='activity-start-time'>Start Time</label>
          <TextField type='datetime-local' id='activity-start-time' />
        </Box>
        <Box m={2} display='flex' flexDirection='column'>
          <label htmlFor='activity-end-time'>End Time</label>
          <TextField type='datetime-local' id='activity-end-time' />
        </Box>
        <Box m={4}>
          <Link
            to='/day-breakdown/August 5 2020'
            style={{ textDecoration: 'none' }}
          >
            <Button variant='contained' color='primary'>
              Add
            </Button>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default AddActivityPage
