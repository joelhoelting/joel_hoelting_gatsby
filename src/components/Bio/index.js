import React from 'react';
import profilePic from '../../assets/profile.jpg';

const Bio = () => {
  const styles = {
    horizontalRule: {
      marginBottom: '1em'
    },
    img: {
      borderRadius: '0.5em',
      float: 'left',
      marginRight: '2em',
      height: '100px'
    },
    link: {
      color: '#000'
    }
  }
  
  const { horizontalRule, img, link } = styles;

  return (
    <div>
      <hr style={{ }}/>
      <div style={horizontalRule}>
       <img alt="Joel Hölting" src={profilePic} style={img} />
        <p>Written by Joel Hölting who lives in New York City and uses technology as an agent for elevating social consciousness. Watch him code on <a style={link} href="https://github.com/joelhoelting" target="_blank">Github</a> or connect with him on <a style={link} href="https://www.linkedin.com/in/joel-hoelting/" target="_blank">LinkedIn</a></p>
      </div>
    </div>
  )
};

export default Bio;
