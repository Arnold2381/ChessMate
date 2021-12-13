import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Landing from './pages/Landing';

function App() {
  const [games, setGames] = React.useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/dash'>
          <Dashboard />
        </Route>
        <Route exact path='/game'>
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
