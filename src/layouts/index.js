import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import {StyleRoot} from 'radium';

// Syntax Highlighting
require('prismjs/themes/prism-okaidia.css');

// Local Fonts
import './Fonts.scss';

const TemplateWrapper = ({ children }) => (
  <StyleRoot>
    <Helmet
      title="Joel Hölting"
      meta={[
        { name: 'description', content: 'Full Stack Web Developer' },
      ]}
    />
    <Navigation />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '980px',
        width: '95%'
      }}
    >
      {children()}
    </div>
  </StyleRoot>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
