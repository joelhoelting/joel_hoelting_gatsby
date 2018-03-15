import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import Radium, { StyleRoot } from 'radium';

// Syntax Highlighting
require('prismjs/themes/prism-okaidia.css');

// Local Fonts
import './Fonts.scss';

const styles = {
  container: {
    margin: '0 auto',
    paddingTop: '5em',
    maxWidth: '980px',
    width: '95%'
  }
};

const TemplateWrapper = ({ children }) => (

  <StyleRoot>
    <Helmet
      title="Joel Hölting"
      meta={[
        { name: 'description', content: 'Passionate full stack web developer and coding instructor with over two years of experience in Ruby, Javascript, Python and PHP.' },
      ]}
    />
    <Navigation />
    <div style={styles.container}>
      {children()}
    </div>
  </StyleRoot>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default Radium(TemplateWrapper);
