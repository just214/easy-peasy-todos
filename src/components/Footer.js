import React from 'react';
import styled from 'styled-components';
import githubLogo from '../icons/github.svg';

const StyledFooter = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <small>
        This demo is powered by{' '}
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Hooks
        </a>{' '}
        and the awesome{' '}
        <a
          href="https://github.com/ctrlplusb/easy-peasy"
          target="_blank"
          rel="noopener noreferrer"
        >
          easy-peasy
        </a>{' '}
        library.
      </small>

      <a
        href="https://github.com/gojutin/easy-peasy-todos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} className="Github-logo" alt="github-logo" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
