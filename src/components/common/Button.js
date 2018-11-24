import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SpinkitSpinner from 'react-spinkit';

const StyledButton = styled.button`
  margin: 3px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  padding: 5px;
  height: 40px;
  background-color: lightblue;
  cursor: pointer;
  min-width: 100px;
  font-weight: bold;
  text-transform: uppercase;

  :disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.loading ? <SpinkitSpinner /> : props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export { Button };
