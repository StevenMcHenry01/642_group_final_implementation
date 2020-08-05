// 3rd party imports
import React, { useState } from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

// My imports

const useStyles = makeStyles((theme) => ({
  dateCycler: {
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  calender: {
    display: 'flex',
    borderTop: `1px solid ${grey[200]}`,
  },
  times: {
    width: '70px',
    padding: '0 10px 0 20px',
    textAlign: 'right',
  },
  events: {
    width: '100%',
    backgroundColor: '#e8ecfd',
    paddingTop: '30px',
  },
  time: {
    fontSize: '10px',
    margin: '3.5rem 0',
  },
  eventSlot: {
    height: '35.45px',
    width: '100%',
    borderBottom: `1px solid ${grey[300]}`,
  },
}))

const elementBarArray = []
for (let i = 0; i < 35; i++) {
  elementBarArray.push('')
}

const DayBreakdown = () => {
  const classes = useStyles()
  const [day, setDay] = useState(5)
  return (
    <React.Fragment>
      <div className={classes.dateCycler}>
        <Button onClick={() => setDay((d) => d - 1)}>
          <ArrowBackIosIcon />
        </Button>
        <Typography variant='h5'>August {day} - 2020</Typography>
        <Button onClick={() => setDay((d) => d + 1)}>
          <ArrowForwardIosIcon />
        </Button>
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
          {day === 5 ? (
            <>
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: 'hsl(12, 100%, 82%)',
                  width: '83vw',
                  top: '500px',
                  height: '200px',
                  padding: '.5rem',
                  color: '#1a1a1a',
                }}
              >
                Going to dinner at Rotero's
              </div>
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: 'hsl(48, 96%, 88%)',
                  width: '83vw',
                  top: '200px',
                  height: '100px',
                  padding: '.5rem',
                  color: '#1a1a1a',
                }}
              >
                Hike
              </div>

              
            </>
          ) : (
            <>
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: 'hsl(132, 89%, 88%)',
                  width: '83vw',
                  top: '400px',
                  height: '150px',
                  padding: '.5rem',
                  color: '#1a1a1a',
                }}
              >
                Shopping at the mall
              </div>
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: 'hsl(291, 90%, 88%)(48, 96%, 88%)',
                  width: '83vw',
                  top: '300px',
                  height: '50px',
                  padding: '.5rem',
                  color: '#1a1a1a',
                }}
              >
                Running over bridge
              </div>

              
            </>
          )}
          {elementBarArray.map((el, index) => {
            return <div key={index} className={classes.eventSlot}></div>
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default DayBreakdown

// STYLING
