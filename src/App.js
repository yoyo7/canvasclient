import React from 'react';
import Home from './pages/Home/Home';
import ChangeKey from './pages/ChangeKey/ChangeKey';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import TopNavBar from './components/TopNavBar';
function App() {
  return (
    <Router>
      <div>
      <TopNavBar />
    <Switch>
      
      <Route exact path="/" component={Home} />
      <Route path="/key" component={ChangeKey} />
      
    </Switch>
    </div>
    </Router>
  );
}

export default App;
