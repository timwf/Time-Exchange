import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import NavBar from './components/NavBar';
import AnnouncementBar from './components/AnnouncementBar'
import SignIn from './components/SignIn';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <React.Fragment>
      <SignIn show={show} handleClose={handleClose}/>
      <AnnouncementBar></AnnouncementBar>
      <NavBar handleShow={handleShow}/>
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
