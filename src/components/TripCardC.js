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

export default function TripCardC() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevated">
      <CardContent>
        <Typography variant="h4" component="h2" id="tripLocation">
          Tokyo
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="subtitle" id="tripStart">
          Start: December 11 2019
        </Typography>
        <br></br>
        <Typography className={classes.pos} color="textSecondary" variant="subtitle" id="tripEnd">
          End: December 29 2019
        </Typography>
        <br></br>
        <Typography variant="body2" component="p" id="tripDescription">
          Holiday getaway
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Covid Info</Button>
      </CardActions>
    </Card>
  );
}