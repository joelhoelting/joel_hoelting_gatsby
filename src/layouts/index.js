import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../stylesheets/main.scss';

// Syntax Highlighting
require('prismjs/themes/prism-okaidia.css');

const Navigation = () => (
    <nav id="navigation">
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">Resume</Link></li>
      </ul>
    </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joel Hoelting"
      meta={[
        { name: 'description', content: 'Full Stack Web Developer' },
      ]}
    />
    <Navigation />
    <div className="container">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
