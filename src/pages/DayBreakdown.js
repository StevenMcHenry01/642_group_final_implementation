// 3rd party imports
import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// My imports

const useStyles = makeStyles((theme) => ({
  dateCycler: {
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'center'
  },
  calender: {
    display: 'flex',
    borderTop: `1px solid ${grey[200]}`
  },
  times: {
    width: '70px',
    padding: '0 10px 0 20px',
    textAlign: 'right'
  },
  events: {
    width: '100%',
    backgroundColor: '#e8ecfd',
    paddingTop: '30px'
  },
  time: {
    fontSize: '10px',
    margin: '3.5rem 0'
  },
  eventSlot: {
    height: '35.45px',
    width: '100%',
    borderBottom: `1px solid ${grey[300]}`
  }
}))

const elementBarArray = []
for(let i = 0; i < 35; i++) {
  elementBarArray.push('')
}

const DayBreakdown = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.dateCycler}>
        <Button><ArrowBackIosIcon /></Button>
        <Typography variant='h5'>July 6 - 2020</Typography>
        <Button><ArrowForwardIosIcon /></Button>
      </div>
      <div className={classes.calender}>
        <div className={classes.times}>
          <Typography className={classes.time}>7 AM</Typography>
          <Typography className={classes.time}>8 AM</Typography>
          <Typography className={classes.time}>9 AM</Typography>
          <Typography className={classes.time}>10 AM</Typography>
          <Typography className={classes.time}>11 AM</Typography>
          <Typography className={classes.time}>12 PM</Typography>
          <Typography className={classes.time}>1 PM</Typography>
          <Typography className={classes.time}>2 PM</Typography>
          <Typography className={classes.time}>3 PM</Typography>
          <Typography className={classes.time}>4 PM</Typography>
          <Typography className={classes.time}>5 PM</Typography>
          <Typography className={classes.time}>6 PM</Typography>
          <Typography className={classes.time}>7 PM</Typography>
          <Typography className={classes.time}>8 PM</Typography>
          <Typography className={classes.time}>9 PM</Typography>
          <Typography className={classes.time}>10 PM</Typography>
          <Typography className={classes.time}>11 PM</Typography>
          <Typography className={classes.time}>12 AM</Typography>
        </div>
        <div className={classes.events}>
          {elementBarArray.map((el, index)=>{
            return <div key={index} className={classes.eventSlot}></div>
          })}
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default DayBreakdown

// STYLING