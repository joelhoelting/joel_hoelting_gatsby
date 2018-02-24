import React from 'react';
import Markdown from 'react-markdown';

import Footer from '../../components/Footer';

import profile_pic from './profile.jpg';
import about from './about';

const styles = {
  image: {
    borderRadius: '100%',
    display: 'block',
    margin: '0 auto',
    border: '4px solid #24255d'
  },
  header: {
    textAlign: 'center',
    margin: '20px 0'
  }
};

const About = () => (
 <div style={{maxWidth: '700px', margin: '0 auto'}}>
  <img style={styles.image} src={profile_pic} />
  <h1 style={styles.header}>My Story</h1>
  <Markdown source={about} />
  <Footer />
 </div>
);

export default About;
