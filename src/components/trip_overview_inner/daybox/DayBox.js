// 3rd party imports
import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'

// My imports

const useStyles = makeStyles((theme) => ({
  dayBox: {
    width: '100%',
    height: '100px',
    backgroundColor: grey[100],
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    borderTop: `1px solid ${grey[200]}`,
    borderBottom: `1px solid ${grey[200]}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  viewButon: {
    color: theme.palette.frequent.white,
    height: '40px',
    margin: 'auto 0',
  },
}))

const DayBox = ({ dayNumber, date, description }) => {
  const classes = useStyles()
  return (
    <div className={classes.dayBox}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6'>{dayNumber}</Typography>
        <Typography>{date}</Typography>
      </div>
      <Typography style={{ width: '100px', fontSize: '12px' }}>
        {description}
      </Typography>
      <Link
        style={{ textDecoration: 'none' }}
        to='/day-breakdown/August 5 2020'
      >
        <Button
          className={classes.viewButon}
          variant='contained'
          color='primary'
        >
          View
        </Button>
      </Link>
    </div>
  )
}

export default DayBox

// STYLING
