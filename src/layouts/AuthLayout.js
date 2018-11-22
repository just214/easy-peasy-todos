import React from 'react';
import Footer from '../components/Footer';
import logo from '../logo.svg';

function AuthLayout(props) {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {props.children}
      <Footer />
    </div>
  );
}

export default AuthLayout;
