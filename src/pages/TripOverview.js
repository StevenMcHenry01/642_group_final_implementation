// 3rd party imports
import React from 'react'
import { useParams } from 'react-router-dom'

// My imports
import TripOverviewInner from '../components/trip_overview_inner/TripOverviewInner'

const TripOverview = () => {
  const {tripName} = useParams()
  return (
    <TripOverviewInner tripName={tripName} />
  )
}

export default TripOverview