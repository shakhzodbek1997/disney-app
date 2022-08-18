import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
            <h1>Hello App file</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
