import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'
import Sections from './views/Sections/Sections'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './addons/css/fadeTransition.css'

function App() {
  const imagesToLoad = [
    'src/img/icons/adobexd.png',
    'src/img/icons/css3.svg',
    'src/img/icons/expressjs.svg',
    'src/img/icons/git.png',
    'src/img/icons/html5.svg',
    'src/img/icons/javascript.svg',
    'src/img/icons/mongodb.svg',
    'src/img/icons/mongoose.png',
    'src/img/icons/nodejs.svg',
    'src/img/icons/reactjs.svg',
    'src/img/icons/sass.svg',
    'src/img/icons/vscode.png',
    'src/img/github.svg',
    'src/img/icons/vuejs.svg',
    'src/img/projects/company.JPG',
    'src/img/projects/eventPage.JPG',
    'src/img/projects/image.JPG',
    'src/img/projects/portfolio.JPG',
    'src/img/projects/quizzes.JPG',
  ]

  const loadImages = () => {
    imagesToLoad.forEach((item, index) => {
      let img = new Image()
      img.src = item
    })
  }

  useEffect(() => {
    loadImages()
  })

  return (
    <Router>
      <div className="App">
        <main>
          <Route render={({ location }) => (
              <SwitchTransition mode="out-in">
                <CSSTransition
                    key={ location.pathname }
                    timeout={500}
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
