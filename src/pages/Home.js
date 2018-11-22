import React from 'react';
import { useStore, useAction } from 'easy-peasy';
import { Redirect } from '@reach/router';

function Home() {
  const auth = useStore(state => state.auth);
  const logout = useAction(dispatch => dispatch.auth.logout);

  if (!auth.isChecked) {
    return <div style={{ textAlign: 'center' }}>pending...</div>;
  }

  if (!auth.isAuthed) {
    return <Redirect noThrow to="login" />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome home!</h1>
      <p>
        <b>You are signed in as {auth.userData.email}</b>
      </p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Home;
