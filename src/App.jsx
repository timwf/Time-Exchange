import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import NavBar from './components/NavBar';
import AnnouncementBar from './components/AnnouncementBar'

function App() {
  return (
    <React.Fragment>
      <AnnouncementBar></AnnouncementBar>
      <NavBar />
          <Layout>
              <Router>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  {/* <Route component={NoMatch} /> */}
              </Router>
           </Layout>
    </React.Fragment>

  );
}

export default App;
