import React from 'react';
import logo from '../icons/logo.svg';

function AuthLayout(props) {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>easy-peasy-todos</h1>
      {props.children}
    </div>
  );
}

export default AuthLayout;
