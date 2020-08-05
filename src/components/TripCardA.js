import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TripCardA() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevated">
      <CardContent>
        <Typography variant="h4" component="h2" id="tripLocation">
          Monterery
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="subtitle" id="tripStart">
          Start: July 3 2020
        </Typography>
        <br></br>
        <Typography className={classes.pos} color="textSecondary" variant="subtitle" id="tripEnd">
          End: July 8 2020
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" id="tripDescription">
          Family trip
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Covid Info</Button>
      </CardActions>
    </Card>
  );
}