import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../stylesheets/main.scss';

const Header = () => (
  <div id="header">
    <nav id="navigation">
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">Resume</Link></li>
      </ul>
    </nav>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joel Hoelting"
      meta={[
        { name: 'description', content: 'Full Stack Web Developer' },
      ]}
    />

    <div className="container">
      <Header />
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
