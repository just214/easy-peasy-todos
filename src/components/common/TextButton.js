import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextButton = styled.span`
  margin: 3px;
  font-size: 14px;
  border: none;
  padding: 5px;
  cursor: pointer;
  width: 100px;
  font-weight: bold;
  color: ${props => props.color || 'lightblue'};

  &disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

TextButton.propTypes = {
  color: PropTypes.string,
};

export { TextButton };
