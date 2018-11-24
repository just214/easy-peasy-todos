import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props => props.placeholder,
}))`
  margin: 3px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  padding: 5px;
  width: ${props => props.width || '250px'};
  height: 30px;
  background-color: ${props => (props.dark ? '#333' : 'white')};
  color: ${props => (props.dark ? 'white' : '#333')};
  ::placeholder {
    color: ${props => (props.dark ? 'lightblue' : '#888')};
  }
`;

Input.propTypes = {
  width: PropTypes.string,
  dark: PropTypes.bool,
};

export { Input };
