import React from 'react';
import profilePic from '../../assets/profile.jpg';

const Bio = () => (
  <div>
    <hr style={{ marginBottom: '1em'}}/>
    <div style={{margin: '1em'}}>
     <img
        src={profilePic}
        alt="Joel Hölting"
        style={{
          borderRadius: '0.5em',
          float: 'left',
          marginRight: '2em',
          height: '100px'
        }}
      />
      <p>Written by Joel Hölting who lives in New York City and uses technology as an agent for elevating social consciousness. Watch him code on <a style={{color: '#000'}} href="https://github.com/joelhoelting" target="_blank">Github</a> or connect with him on <a style={{color: '#000'}} href="https://www.linkedin.com/in/joel-hoelting/" target="_blank">LinkedIn</a></p>
    </div>
  </div>
);

export default Bio;
