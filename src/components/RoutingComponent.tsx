import { FC, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { LoginPage } from '../pages'
import { Landingpage } from '../pages/Landingpage/Landingpage'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { useCookies } from 'react-cookie'
import AppContext from '../AppContext'
import { Report } from '../types'

export const RoutingComponent: FC = () => {
  const [redirectIsAllowed, setRedirectIsAllowed] = useState(true)
  const [finishedLoading, setFinishedLoading] = useState(false)
  const [cookies] = useCookies(['access_token'])

  const [selectedRoomId, setSelectedRoomId] = useState<string>('')
  const [certainRoomIdReports, setCertainRoomIdReports] = useState<Report[]>([])

  const checkForLoggedInStatus = (): void => {
    if (
      cookies.access_token &&
      cookies.access_token !== '' &&
      Math.floor(Date.now() / 1000) -
        (jwt_decode(cookies.access_token) as JwtPayload).iat <
        900
    ) {
      setRedirectIsAllowed(true)
      setFinishedLoading(true)
    } else {
      setRedirectIsAllowed(false)
      setFinishedLoading(true)
    }
  }

  useEffect(() => {
    checkForLoggedInStatus()
  }, [])

  useEffect(() => {
    checkForLoggedInStatus()
  }, [cookies])

  return (
    <AppContext.Provider
      value={{
        selectedRoomId,
        setSelectedRoomId,
        certainRoomIdReports,
        setCertainRoomIdReports,
      }}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            {!redirectIsAllowed && finishedLoading ? (
              <LoginPage setRedirectIsAllowed={setRedirectIsAllowed} />
            ) : finishedLoading ? (
              <Redirect to={'/overview'} />
            ) : (
              <></>
            )}
          </Route>
          <Route path="/overview" exact>
            {redirectIsAllowed && finishedLoading ? (
              <Landingpage />
            ) : finishedLoading ? (
              <Redirect to={'/'} />
            ) : (
              <></>
            )}
          </Route>
          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}
