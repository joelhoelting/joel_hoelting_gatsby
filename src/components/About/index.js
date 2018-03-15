import React from 'react';
import Radium from 'radium';
import Markdown from 'react-markdown';

import profile_pic from './profile.jpg';
import about from './about';

const styles = {
  container: {
    maxWidth: '650px',
    margin: '0 auto'
  },
  image: {
    borderRadius: '100%',
    display: 'block',
    margin: '0 auto',
    border: '4px solid #24255d',
    '@media (max-width: 700px)': {
      width: '40%'
    },
  },
  header: {
    textAlign: 'center',
    margin: '20px 0'
  }
};

const { container, image, header } = styles;

const About = () => (
 <div style={container}>
  <img style={image} src={profile_pic} />
  <h1 style={header}>About Me</h1>
  <Markdown source={about} />
 </div>
);

export default Radium(About);
