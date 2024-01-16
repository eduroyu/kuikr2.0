import React from 'react'
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

import './footer.scss';

const Footer = ({ content, githubLink }) => {
  return (
    <div className="footer-container">
      <div className="footer-background"></div>
      <div className="footer-content">
        <p className=" ml-10 large-text section">{content}</p>
        <br />
        <a className="ml-10 large-text section" href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub size="1em"/>  eduroyu</a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  content: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Footer;