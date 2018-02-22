import React from 'react';

import profile_pic from './profile.jpg';

const styles = {
  image: {
    borderRadius: '100%',
    display: 'block',
    margin: '0 auto',
    border: '2px solid #24255d'
  }
};

const About = () => (
 <div>
  <img style={styles.image} src={profile_pic} />
  <h1>My Story</h1>
 </div>
);

export default About;
