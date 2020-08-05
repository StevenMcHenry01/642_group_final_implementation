// 3rd party imports
import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'

// My imports

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  tripWrapper: {
    maxHeight: '60vh',
    overflowY: 'scroll',
  },
  tripBar: {
    width: '100%',
    backgroundColor: grey[200],
    height: '80px',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${grey[400]}`,
  },
}))

const Trips = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', margin: '1rem 0' }}
      >
        Your Trips
      </Typography>
      <div className={classes.tripWrapper}>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Paris
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Amsterdam
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Berlin
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Prague
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                China
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Finland
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Canada
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
        <Link to='/trip-overview/Paris' style={{ textDecoration: 'none' }}>
          <div className={classes.tripBar}>
            <div>
              <Typography variant='h5' style={{ color: grey[900] }}>
                Portugal
              </Typography>
              <Typography style={{ color: grey[600] }}>
                09/23/2020 - 10/04/2020
              </Typography>
            </div>
            <ArrowForwardIosIcon style={{ color: grey[500] }} />
          </div>
        </Link>
      </div>
      <Link
        style={{
          textDecoration: 'none',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        to='/new-trip'
      >
        <Button
          variant='contained'
          color='primary'
          style={{ width: '80%', margin: '2rem 0', height: '70px' }}
        >
          ADD TRIP
        </Button>
      </Link>
    </div>
  )
}

export default Trips

// STYLING
