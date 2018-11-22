import React from 'react';
import githubLogo from '../github.svg';

function Footer() {
  return (
    <div className="footer">
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

      <a href="https://github.com">
        <img
          href="https://github.com"
          src={githubLogo}
          className="Github-logo"
          alt="github-logo"
        />
      </a>
    </div>
  );
}

export default Footer;
