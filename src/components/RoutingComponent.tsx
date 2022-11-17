import { FC, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../pages'
import { Landingpage } from '../pages/Landingpage/Landingpage'

export const RoutingComponent: FC = () => {
  const [redirectIsAllowed, setRedirectIsAllowed] = useState(false)
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
