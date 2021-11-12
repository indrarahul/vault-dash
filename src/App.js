import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AppsRoles from './pages/AppsRoles';
import Entities from './pages/Entities';
import Groups from './pages/Groups'
import Home from './pages/Home';

function App() {

  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" render={() => {
            return (
              <Redirect to="/home" />
            )
          }} />

          <Route path='/home'>
            <Home />
          </Route>

          <Route path="/groups">
            <Groups />
          </Route>

          <Route path="/entities">
            <Entities />
          </Route>

          <Route path="/apps">
            <AppsRoles />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
