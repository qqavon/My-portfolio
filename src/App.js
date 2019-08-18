import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'
import Sections from './views/Sections/Sections'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/sections" component={ Sections } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
