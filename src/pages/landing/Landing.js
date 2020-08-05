// 3rd party imports
import React from 'react'
import { Typography } from '@material-ui/core'

// My imports
import { useAppState } from '../../contexts/AppContext'
import NewUserLanding from '../../components/new_user_landing/NewUserLanding'
import Trips from '../../components/trips/Trips'

const Landing = () => {
  const { user } = useAppState()

  if (user) {
    return <Trips />
  }
  return <NewUserLanding />
}

export default Landing
