import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPrivatePage from './components/userPrivateComponents/index';
import ConnectToLinkedIn from './components/auth/ConnectToLinkedIn/index'
import LandingPage from './components/landingPage/index';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/connectToLinkedIn" component={ConnectToLinkedIn} />
        <Route path="/userPrivate" component={UserPrivatePage} />
      </div>
    </Router>
  );
}

export default App;
