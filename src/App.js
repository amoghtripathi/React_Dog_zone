import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>checkout page</h1>
        </Route>
        <Route path="/login">
          <h1>login page</h1>
        </Route>
        <Route path="/signup">
          <h1>signUp page</h1>
        </Route>
        
        <Route path="/">
          <Header/>
          <h1>test</h1>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
