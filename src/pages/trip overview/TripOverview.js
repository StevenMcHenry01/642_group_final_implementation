import React from 'react'
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const TripOverview = () => {
    const classes = useStyles();

    return (
        <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
                2019 Summer
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Fiji, Suva
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Start: July 3
              <br/>
              End: July 18
            </Typography>
            <Typography variant="body2" component="p">
                Description: Family Trip
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More details</Button>
          </CardActions>
        </Card>

        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
                2020 Spring
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Japan, Tokyo
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Start: Feb, 24
                <br/>
                End: Mar 2
            </Typography>
            <Typography variant="body2" component="p">
                Description: Just for fun with friends
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">More details</Button>
        </CardActions>
    </Card>
    <br/>
    <br/>
    <Button type='submit' 
        variant='contained'
        >Add more</Button>
    </div>
      );
    }

export default TripOverview