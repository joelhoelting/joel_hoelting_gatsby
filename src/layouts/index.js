import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../stylesheets/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joel Hoelting"
      meta={[
        { name: 'description', content: 'Joel Hoelting: Full Stack Web Developer' },
      ]}
    />
    <div className="container">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
