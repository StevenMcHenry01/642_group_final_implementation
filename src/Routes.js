// 3rd party imports
import * as React from 'react'
import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// my imports
import Loading from './components/utils/Loading'
import { CenteredDiv } from './styles/utils/CenteredDiv'
import { useAppState } from './contexts/AppContext'

// Lazy Load Pages
const DayBreakdown = lazy(() => import('./pages/day_breakdown/DayBreakdown'))
const CovidOverview = lazy(() => import('./pages/covid_overview/CovidOverview'))
const Activities = lazy(() => import('./pages/activities/Activities'))
const ActivitiesResults = lazy(() =>
  import('./pages/activities_results/ActivitiesResults')
)
const DoesNotExist = lazy(() => import('./pages/404/404'))
const NewTrip = lazy(() => import('./pages/new_trip/NewTrip'))
const TripOverview = lazy(() => import('./pages/trip_overview/TripOverview'))
const AddActivity = lazy(() => import('./pages/add_activity/AddActivity'))
const Landing = lazy(() => import('./pages/landing/Landing'))
const CovidLocationRisk = lazy(() =>
  import('./pages/covid_location_risk/CovidLocationRisk')
)
const Login = lazy(() => import('./pages/login/Login'))
const Signup = lazy(() => import('./pages/signup/Signup'))
const Account = lazy(() => import('./pages/account/Account'))

export const Routes = () => {
  const { user } = useAppState()

  return (
    <>
      <Suspense
        fallback={
          <CenteredDiv>
            <Loading />
          </CenteredDiv>
        }
      >
        <Switch>
          {/* unprotected */}
          <Route exact={true} path='/' children={<Landing />} />
          <Route
            path='/covid-location-risk/:location'
            children={<CovidLocationRisk />}
          />

          <Route
            exact={true}
            path='/covid-overview'
            children={<CovidOverview />}
          />
          <Route exact={true} path='/Login' children={<Login />} />
          <Route exact={true} path='/Signup' children={<Signup />} />

          {/* protected */}
          <Route exact={true} path='/activities'>
            {user ? <Activities /> : <Redirect to='/' />}
          </Route>
          <Route exact={true} path='/account'>
            {user ? <Account /> : <Redirect to='/' />}
          </Route>
          <Route exact={true} path='/new-trip'>
            {user ? <NewTrip /> : <Redirect to='/' />}
          </Route>
          <Route exact={true} path='/add-activity'>
            {user ? <AddActivity /> : <Redirect to='/' />}
          </Route>
          <Route path='/trip-overview/:tripName'>
            {user ? <TripOverview /> : <Redirect to='/' />}
          </Route>

          <Route path='/day-breakdown/:date'>
            {user ? <DayBreakdown /> : <Redirect to='/' />}
          </Route>

          <Route path='/activities-results/:search'>
            {user ? <ActivitiesResults /> : <Redirect to='/' />}
          </Route>

          <Route children={<DoesNotExist />} />
        </Switch>
      </Suspense>
    </>
  )
}
