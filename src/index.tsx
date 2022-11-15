import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { Landingpage } from './pages/LoginPage/Landingpage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/overview/" exact>
        <Landingpage />
      </Route>
      <Route path="/">
        <div>404</div>
      </Route>
    </Switch>
  </Router>
)
