// 3rd party imports
import React from 'react'
import { makeStyles, Typography, Divider, TextField, Button } from '@material-ui/core'

// My imports
import DayBox from './daybox/DayBox'

const dayData = [
  {
    dayNumber: 'Day 1',
    date: 'August 5 - 2020',
    description:
      'Mostly a day of exploring the town and getting the lay of the land.',
  },
  {
    dayNumber: 'Day 2',
    date: 'August 6 - 2020',
    description: 'Aquarium day! Then finish with a nice dinner.',
  },
  {
    dayNumber: 'Day 3',
    date: 'August 7 - 2020',
    description: 'Getting ready to leave and seeing grandparents',
  },
  {
    dayNumber: 'Day 4',
    date: 'August 8 - 2020',
    description:
      'Mostly a day of exploring the town and getting the lay of the land.',
  },
  {
    dayNumber: 'Day 5',
    date: 'August 9 - 2020',
    description: 'Meeting with friends at the park and wine tasting.',
  },
  {
    dayNumber: 'Day 6',
    date: 'August 10 - 2020',
    description: 'Aquarium day! Then finish with a nice dinner',
  },
  {
    dayNumber: 'Day 7',
    date: 'August 11 - 2020',
    description: 'Flying home.',
  },
]

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    maxHeight: '50vh',
    backgroundColor: 'lightblue',
    overflowY: 'scroll',
    position: 'relative',
  },
  fadeout: {
    position: 'fixed',
    bottom: '280px',
    width: '100%',
    height: '6em',
    background: `linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.78) 100%
  )`,
  },
  form: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    color: theme.palette.frequent.white,
    backgroundColor: theme.palette.success.main,
    margin: '1rem auto 0 auto',
    width: '100px'
  }
}))

const TripOverviewInner = ({ tripName }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div style={{ margin: '1rem 0', textAlign: 'center' }}>
        <Typography variant='h5' style={{ marginBottom: '.5rem' }}>{tripName}</Typography>
        <Divider style={{ margin: '0 auto', maxWidth: '70%' }} />
      </div>
      <div className={classes.boxContainer}>
        {dayData.map((day) => {
          return (
            <DayBox
              key={day.date}
              dayNumber={day.dayNumber}
              date={day.date}
              description={day.description}
            />
          )
        })}
        <div className={classes.fadeout}></div>
      </div>
      <form className={classes.form}>
        <Typography variant='h6'>New Day</Typography>
        <TextField label='Date' helperText='MM/DD/YYYY' />
        <TextField label='Description' />
        <Button className={classes.addButton}>Add</Button>
      </form>
    </React.Fragment>
  )
}

export default TripOverviewInner

// STYLING
