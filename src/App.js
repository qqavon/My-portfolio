import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'
import Sections from './views/Sections/Sections'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Route render={({ location }) => (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={ location.pathname }
                  timeout={ 600 }
                  classNames='fade'
                  >
                  <Switch location={ location }>
                      <Route exact path="/" component={ Home } />
                      <Route path="/sections" component={ Sections } />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
          )}/>
        </main>
      </div>
    </Router>
  );
}

export default App;
