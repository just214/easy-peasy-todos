import React from 'react';
import SpinkitSpinner from 'react-spinkit';

function Spinner() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SpinkitSpinner
        name="double-bounce"
        color="white"
        style={{
          height: '300px',
          width: '300px',
        }}
      />
    </div>
  );
}

export { Spinner };
