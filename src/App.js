import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { useAction } from 'easy-peasy';

// * Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  const startAuthListener = useAction(
    dispatch => dispatch.auth.startAuthListener,
  );

  useEffect(() => {
    startAuthListener();
  }, []);

  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Signup path="/signup" />
    </Router>
  );
}

export default App;
