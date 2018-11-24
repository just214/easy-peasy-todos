import React, { Fragment, useEffect } from 'react';
import { Router, Redirect } from '@reach/router';
import { useAction, useStore } from 'easy-peasy';

// * Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';

// * Components
import Footer from './components/Footer';
import { Spinner } from './components/common';

function PublicRoute(props) {
  const isAuthed = useStore(state => state.auth.isAuthed);

  if (isAuthed) {
    return <Redirect noThrow to="/" />;
  } else {
    return props.render;
  }
}

function ProtectedRoute(props) {
  const isAuthed = useStore(state => state.auth.isAuthed);
  if (!isAuthed) {
    return <Redirect noThrow to="/login" />;
  } else {
    return props.render;
  }
}

function App() {
  const auth = useStore(state => state.auth);

  const startAuthListener = useAction(
    dispatch => dispatch.auth.startAuthListener,
  );

  useEffect(() => {
    startAuthListener();
  }, []);

  if (!auth.isChecked) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Router>
        <ProtectedRoute path="/" default render={<Home />} />
        <PublicRoute path="/login" render={<Login />} />
        <PublicRoute path="/signup" render={<Signup />} />
        <PublicRoute path="/reset-password" render={<ResetPassword />} />
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
