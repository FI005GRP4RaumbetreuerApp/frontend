import { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../pages'
import { Landingpage } from '../pages/Landingpage/Landingpage'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { useCookies } from 'react-cookie'

export const RoutingComponent: FC = () => {
  const [redirectIsAllowed, setRedirectIsAllowed] = useState(false)
  const [cookies] = useCookies(['access_token'])

  useEffect(() => {
    if (
      Math.floor(Date.now() / 1000) -
        (jwt_decode(cookies.access_token) as JwtPayload).iat <
      900
    ) {
      setRedirectIsAllowed(true)
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage setRedirectIsAllowed={setRedirectIsAllowed} />
        </Route>
        <Route path="/overview" exact>
          {redirectIsAllowed && <Landingpage />}
        </Route>
        <Route path="/">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  )
}
