import * as React from "react";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/utils/Loading";
import { CenteredDiv } from "./styles/utils/CenteredDiv";
import OtherPage from "./pages/OtherPage";
import AddActivityPage from "./pages/AddActivity";


// Lazy Load Pages

const DayBreakdown = lazy(() => import('./pages/DayBreakdown'))
const Covid = lazy(() => import('./pages/Covid/Covid'))
const Home = lazy(() => import("./pages/Home"));
const ActivitiesPage = lazy(() => import("./pages/Activities"));
const ActivitiesResults = lazy(() => import("./pages/ActivitiesResults"));
const DoesNotExist = lazy(() => import("./pages/404"));
const NewTrip = lazy(() => import('./pages/new trip/NewTrip'))
const TripOverview = lazy(()=> import('./pages/trip overview/TripOverview'))

export const Routes = () => (
  <>
    <Suspense
      fallback={
        <CenteredDiv>
          <Loading />
        </CenteredDiv>
      }
    >
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route path='/Covid'>
          <Covid />
        </Route>
        <Route path='/TripOverview'>
          <TripOverview />
        </Route>
        <Route path='/NewTrip'>
          <NewTrip />

        </Route>
        <Route exact={true} path='/otherPage'>
          <OtherPage />
        </Route>
        {/* <Route path='/trip-overview/:tripName' children={<TripOverview />} /> */}
        <Route path='/day-breakdown/:date' children={<DayBreakdown />} />

        <Route exact={true} path="/activities">
          <ActivitiesPage />
        </Route>

        <Route exact={true} path="/activities-results">
          <ActivitiesResults />
        </Route>

        <Route exact={true} path="/add-activity">
          <AddActivityPage />
        </Route>

        {/* 404 route */}
        <Route>
          <DoesNotExist />
        </Route>
      </Switch>
    </Suspense>
  </>
);
