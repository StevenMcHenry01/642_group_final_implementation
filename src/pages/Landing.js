// 3rd party imports
import React from 'react'
// My imports
import Typography from '@material-ui/core/Typography';
import TripCard from '../components/TripCard';
import TripCardA from '../components/TripCardA';
import TripCardB from '../components/TripCardB';
import TripCardC from '../components/TripCardC';

const Landing = () => {
    return (
        <div>
            <Typography variant='h2' align='center'>Your Trips</Typography>
            <TripCardA></TripCardA>
            <br></br>
            <TripCardB></TripCardB>
            <br></br>
            <TripCardC></TripCardC>
        </div>
      )
}

export default Landing

// STYLING